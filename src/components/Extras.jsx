"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiCheck } from "react-icons/fi";
import { ui, copy, experiences, skillCategories, contactLinks, WALLPAPERS, years } from "@/data";

const prompt = "ayberk@portfolio ~ %";

export function TerminalApp({ open }) {
  const { i18n } = useTranslation();
  const lang = i18n.language === "tr" ? "tr" : "en";
  const [lines, setLines] = useState([{ t: "out", v: 'Welcome. Type "help" to see commands.' }]);
  const [val, setVal] = useState("");
  const [hist, setHist] = useState([]);
  const [hi, setHi] = useState(-1);
  const box = useRef(null);
  const input = useRef(null);

  useEffect(() => { box.current?.scrollTo({ top: box.current.scrollHeight }); }, [lines]);
  useEffect(() => { input.current?.focus(); }, []);

  const run = (raw) => {
    const [cmd, ...args] = raw.trim().split(/\s+/);
    const out = (...v) => v.map((x) => ({ t: "out", v: x }));
    switch ((cmd || "").toLowerCase()) {
      case "": return [];
      case "help":
        return out("Commands:", "  whoami       who am I", "  neofetch     system info", "  skills       tech stack", "  experience   work history", "  contact      how to reach me", "  open <app>   about | experience | skills | contact | cv | messages | settings", "  clear        clear screen");
      case "whoami": return out(`Ayberk Tığlı - ${copy[lang].role}`, copy[lang].status);
      case "neofetch":
        return out("ayberk@portfolio", "----------------", `Role:      ${copy[lang].role}`, `Stack:     Laravel, Next.js, TypeScript, Prisma`, `Exp:       ${years}+ years`, `Languages: TR, EN`, "Shell:     zsh (almost)");
      case "skills": return skillCategories.flatMap((c) => out(`${c.title}:`, `  ${c.skills.join(", ")}`));
      case "experience": return experiences.flatMap((e) => out(`${lang === "en" ? e.period : e.periodTr}  ${e.company} - ${e.position}`));
      case "contact": return contactLinks.flatMap((l) => out(`${l.label}: ${l.value}`));
      case "open": {
        const id = args[0];
        if (["about", "experience", "skills", "contact", "cv", "messages", "settings"].includes(id)) { open(id); return out(`Opening ${id}...`); }
        return out(`open: unknown app "${id || ""}"`);
      }
      case "ls": return out("about  experience  skills  contact  CV.pdf");
      case "sudo": return out("Nice try 😄");
      default: return out(`zsh: command not found: ${cmd}`);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const raw = val;
    if (raw.trim().toLowerCase() === "clear") { setLines([]); }
    else setLines((l) => [...l, { t: "in", v: raw }, ...run(raw)]);
    if (raw.trim()) setHist((h) => [...h, raw]);
    setHi(-1);
    setVal("");
  };

  const key = (e) => {
    if (e.key === "ArrowUp" && hist.length) {
      e.preventDefault();
      const n = hi === -1 ? hist.length - 1 : Math.max(0, hi - 1);
      setHi(n); setVal(hist[n]);
    } else if (e.key === "ArrowDown" && hi !== -1) {
      e.preventDefault();
      const n = hi + 1;
      if (n >= hist.length) { setHi(-1); setVal(""); } else { setHi(n); setVal(hist[n]); }
    }
  };

  return (
    <div ref={box} onClick={() => input.current?.focus()} className="h-full overflow-y-auto bg-[#1e1e1e] text-[#d4d4d4] font-mono text-[13px] p-4 cursor-text">
      {lines.map((l, i) => (
        <div key={i} className="whitespace-pre-wrap break-words">
          {l.t === "in" ? <><span className="text-green-400">{prompt}</span> {l.v}</> : l.v}
        </div>
      ))}
      <form onSubmit={submit} className="flex gap-2">
        <span className="text-green-400 shrink-0">{prompt}</span>
        <input ref={input} value={val} onChange={(e) => setVal(e.target.value)} onKeyDown={key} autoCapitalize="off" autoCorrect="off" spellCheck={false} className="flex-1 bg-transparent outline-none caret-green-400" />
      </form>
    </div>
  );
}

export function SettingsApp({ wp, setWp }) {
  const { i18n } = useTranslation();
  const lang = i18n.language === "tr" ? "tr" : "en";
  const u = ui[lang];
  return (
    <div className="h-full overflow-y-auto bg-[#f5f5f7] p-6 text-[#1c1c1e]">
      <section className="mb-8">
        <h3 className="font-semibold mb-3">{u.wpTitle}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Object.entries(WALLPAPERS).map(([k, bg]) => (
            <button key={k} onClick={() => setWp(k)} className="relative aspect-video rounded-xl overflow-hidden border-2 transition-all" style={{ background: bg, borderColor: wp === k ? "#0b84ff" : "transparent" }}>
              {wp === k && <span className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#0b84ff] text-white flex items-center justify-center"><FiCheck size={12} /></span>}
            </button>
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h3 className="font-semibold mb-3">{u.langTitle}</h3>
        <div className="inline-flex rounded-xl bg-white border border-gray-200 overflow-hidden text-sm">
          {[["en", "English"], ["tr", "Türkçe"]].map(([k, n]) => (
            <button key={k} onClick={() => i18n.changeLanguage(k)} className={`px-5 py-2 ${lang === k ? "bg-[#0b84ff] text-white" : "hover:bg-gray-50"}`}>{n}</button>
          ))}
        </div>
      </section>
      <section>
        <h3 className="font-semibold mb-3">{u.aboutMac}</h3>
        <div className="rounded-xl bg-white border border-gray-200 p-4 text-sm space-y-1 text-gray-600">
          <p><b className="text-gray-900">Ayberk Tığlı</b> - {copy[lang].role}</p>
          <p>Next.js · React · Tailwind CSS</p>
          <p>⌘K / Ctrl+K: Spotlight</p>
        </div>
      </section>
    </div>
  );
}
