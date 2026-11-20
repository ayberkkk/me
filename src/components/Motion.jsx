"use client";
import React, { useEffect, useRef, useState } from "react";

const clamp = (n, a, b) => Math.min(b, Math.max(a, n));

/* Pürüzsüz (ataletli) kaydırma */
export function useSmoothScroll(scrollerRef) {
  const lenisRef = useRef(null);
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf, lenis, stopped = false;
    import("lenis").then(({ default: Lenis }) => {
      if (stopped) return;
      lenis = new Lenis({ wrapper: el, content: el.firstElementChild, lerp: 0.085, smoothWheel: true });
      lenisRef.current = lenis;
      const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
    });
    return () => { stopped = true; cancelAnimationFrame(raf); lenis?.destroy(); lenisRef.current = null; };
  }, [scrollerRef]);
  return lenisRef;
}

/* Kaydırdıkça kelime kelime aydınlanan metin */
export function RevealText({ text, scrollerRef, className = "" }) {
  const box = useRef(null);
  const words = text.split(" ");
  useEffect(() => {
    const sc = scrollerRef.current, box_ = box.current;
    if (!sc || !box_) return;
    const spans = box_.querySelectorAll("span[data-w]");
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = box_.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = clamp((vh * 0.88 - r.top) / (vh * 0.5 + r.height * 0.6), 0, 1);
      const n = spans.length;
      spans.forEach((s, i) => { s.style.opacity = String(0.14 + 0.86 * clamp(p * (n + 4) - i, 0, 1)); });
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    sc.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { sc.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [scrollerRef, text]);
  return (
    <p ref={box} className={className}>
      {words.map((w, i) => (
        <span key={i} data-w style={{ opacity: 0.14, transition: "opacity .25s linear" }}>{w}{" "}</span>
      ))}
    </p>
  );
}

/* Görünce sayarak yükselen sayı */
export function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), d = 1500;
      const step = (t) => {
        const k = clamp((t - t0) / d, 0, 1);
        setV(Math.round(to * (1 - Math.pow(1 - k, 3))));
        if (k < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

/* Kaydırmaya tepki veren dev kayan yazı */
export function ScrollMarquee({ words, scrollerRef }) {
  const shift = useRef(null);
  useEffect(() => {
    const sc = scrollerRef.current;
    if (!sc) return;
    const on = () => { if (shift.current) shift.current.style.transform = `translate3d(${-(sc.scrollTop * 0.35)}px,0,0)`; };
    on();
    sc.addEventListener("scroll", on, { passive: true });
    return () => sc.removeEventListener("scroll", on);
  }, [scrollerRef]);
  const row = [...words, ...words, ...words, ...words];
  return (
    <div className="overflow-hidden py-10 md:py-16 select-none" aria-hidden>
      <div ref={shift} className="will-change-transform">
        <div className="marquee-run flex w-max items-center gap-8 md:gap-14 whitespace-nowrap">
          {row.map((w, i) => (
            <React.Fragment key={i}>
              <span className={`text-[16vw] md:text-[9vw] font-black uppercase tracking-tighter leading-none ${i % 2 ? "marquee-outline" : ""}`}>{w}</span>
              <span className="text-[6vw] md:text-[3vw] text-[#2bb2ff]">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Ekranın ortasına geldikçe renklenip parlayan ikon + yazı şeridi */
export function GlowMarquee({ items, reverse = false, duration = 50 }) {
  const track = useRef(null);
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const nodes = [...el.querySelectorAll("[data-g]")];
    let raf;
    const loop = () => {
      const W = window.innerWidth, mid = W / 2;
      for (const n of nodes) {
        const r = n.getBoundingClientRect();
        if (r.right < -50 || r.left > W + 50) continue;
        const d = Math.abs(r.left + r.width / 2 - mid) / mid;
        const p = clamp(1.15 - d * 1.5, 0, 1);
        n.style.opacity = String(0.28 + 0.72 * p);
        n.style.filter = p > 0.05 ? `drop-shadow(0 0 ${Math.round(p * 16)}px ${n.dataset.c})` : "none";
        n.style.color = p > 0.3 ? n.dataset.c : "";
        n.style.transform = `scale(${1 + p * 0.12})`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [items]);
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden py-3">
      <div ref={track} className="glow-run flex w-max gap-6 md:gap-10" style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}>
        {row.map((it, i) => (
          <div key={i} data-g data-c={it.color} className="flex items-center gap-3 px-5 py-3 rounded-2xl border text-xl md:text-3xl font-semibold whitespace-nowrap" style={{ borderColor: "var(--line)", transition: "color .3s", opacity: 0.28 }}>
            <it.Icon className="shrink-0" />
            {it.name}
          </div>
        ))}
      </div>
    </div>
  );
}
