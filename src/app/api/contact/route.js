import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Basit bellek içi hız sınırı (sunucusuz ortamda örnek başına çalışır)
const hits = new Map();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  return list.length > MAX_PER_WINDOW;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const clean = (v, max) => String(v ?? "").replace(/\r/g, "").trim().slice(0, max);

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: botlar bu gizli alanı doldurur, sessizce başarılı gibi davran
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 80);
  const email = clean(body.email, 120);
  const message = clean(body.message, 3000);

  if (name.length < 2) return NextResponse.json({ error: "name" }, { status: 400 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "email" }, { status: 400 });
  if (message.length < 10) return NextResponse.json({ error: "message" }, { status: 400 });

  const ip = (req.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
  if (limited(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return NextResponse.json({ error: "not_configured" }, { status: 503 });

  const from = process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>";
  const subject = `Portfolio mesajı: ${name}`.replace(/[\r\n]/g, " ").slice(0, 120);
  const text = `Ad: ${name}\nE-posta: ${email}\n\n${message}\n`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject, text }),
    });
    if (!res.ok) {
      console.error("Resend error", res.status, await res.text().catch(() => ""));
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Resend fetch failed", e);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
