"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaApple } from "react-icons/fa";
import { FiWifi, FiBatteryCharging, FiMessageCircle, FiFile, FiSearch, FiDownload, FiGlobe, FiToggleRight } from "react-icons/fi";
import * as I from "@/components/Icons";
const { FinderIcon, NotesIcon, MailIcon, TerminalIcon, SettingsIcon, TrashIcon, DocIcon } = I;
import Messages from "@/components/Messages";
import { AboutApp, ExperienceApp, SkillsApp, ContactApp, CvApp, FolderIcon } from "@/components/Apps";
import { TerminalApp, SettingsApp } from "@/components/Extras";
import { ui, copy, WALLPAPERS } from "@/data";

const APPS = {
  messages: { Comp: () => <Messages />, w: 980, h: 620 },
  about: { Comp: AboutApp, w: 640, h: 560 },
  experience: { Comp: ExperienceApp, w: 820, h: 500 },
  skills: { Comp: SkillsApp, w: 780, h: 520 },
  contact: { Comp: ContactApp, w: 520, h: 470 },
  cv: { Comp: CvApp, w: 680, h: 600 },
  terminal: { Comp: TerminalApp, w: 640, h: 400 },
  settings: { Comp: SettingsApp, w: 600, h: 520 },
};

// m: mobilde de gorunur. app: pencere ac, url: yeni sekme, spot: arama
const DOCK = [
  { id: "finder", name: "Finder", Icon: I.FinderIcon, app: "experience", m: 1 },
  { id: "launchpad", name: "Launchpad", Icon: I.LaunchpadIcon, spot: 1 },
  { id: "mail", name: "Mail", Icon: I.MailIcon, app: "contact", m: 1 },
  { id: "safari", name: "Safari", Icon: I.SafariIcon, url: "https://github.com/ayberkkk" },
  { id: "whatsapp", name: "Messages", Icon: I.WhatsAppIcon, app: "messages", m: 1 },
  { id: "chrome", name: "Google Chrome", Icon: I.ChromeIcon },
  { id: "hex", name: "Hex", Icon: I.HexIcon },
  { id: "mata", name: "Mata", Icon: I.MataIcon, url: "https://matabt.com" },
  { id: "curve", name: "Curve", Icon: I.CurveIcon },
  { id: "panels", name: "Panels", Icon: I.PanelsIcon },
  { id: "terminal", name: "Terminal", Icon: I.TerminalIcon, app: "terminal", m: 1 },
  { id: "cloud", name: "Claude Code", Icon: I.CloudIcon },
  { id: "docker", name: "Docker", Icon: I.DockerIcon, app: "skills" },
  { id: "obsidian", name: "Obsidian", Icon: I.ObsidianIcon },
  { id: "claude", name: "Claude", Icon: I.SparkIcon },
  { id: "warp", name: "Warp", Icon: I.WarpIcon },
  { id: "mamp", name: "MAMP", Icon: I.MampIcon, app: "skills" },
  { id: "keys", name: "Keychain", Icon: I.KeysIcon },
  { id: "datagrip", name: "DataGrip", Icon: I.DataGripIcon, app: "skills" },
  { id: "postman", name: "Postman", Icon: I.PostmanIcon, app: "skills" },
  { id: "filezilla", name: "FileZilla", Icon: I.FileZillaIcon, app: "skills" },
  { id: "spotify", name: "Spotify", Icon: I.SpotifyIcon },
  { id: "notes", name: "Notes", Icon: I.NotesIcon, app: "about", m: 1 },
  { id: "remote", name: "iPhone Mirroring", Icon: I.RemoteIcon },
  { id: "settings", name: "System Settings", Icon: I.SettingsIcon, app: "settings", m: 1 },
];

const DESKTOP = ["about", "experience", "skills", "contact", "cv"];

const Dot = ({ c, active, onClick, label, glyph }) => (
  <button onClick={onClick} onPointerDown={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()} aria-label={label}
    className="w-3 h-3 rounded-full flex items-center justify-center text-[9px] leading-none font-black text-black/60 border border-black/10"
    style={{ background: active ? c : "#c9c9cc" }}>
    <span className="opacity-0 group-hover:opacity-100">{glyph}</span>
  </button>
);

function Window({ title, w, h, state, active, mobile, onClose, onMin, onMax, onFocus, onMove, children }) {
  const drag = useRef(null);
  const down = (e) => {
    onFocus();
    if (mobile || state.max) return;
    drag.current = { dx: e.clientX - state.x, dy: e.clientY - state.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const move = (e) => {
    if (!drag.current) return;
    onMove(Math.max(-w + 120, e.clientX - drag.current.dx), Math.max(28, e.clientY - drag.current.dy));
  };
  const up = () => (drag.current = null);
  const full = mobile || state.max;

  const style = full
    ? { top: 28, left: 0, right: 0, bottom: mobile ? 84 : 0, zIndex: state.z }
    : { left: state.x, top: state.y, width: w, height: h, zIndex: state.z };

  return (
    <div
      onMouseDown={onFocus}
      style={{ ...style, display: state.min ? "none" : "flex" }}
      className={`fixed flex-col overflow-hidden bg-white win-in ${full ? "" : "rounded-[12px]"} ${active ? "shadow-[0_22px_70px_rgba(0,0,0,0.45),0_0_0_0.5px_rgba(0,0,0,0.35)]" : "shadow-[0_10px_30px_rgba(0,0,0,0.25),0_0_0_0.5px_rgba(0,0,0,0.25)]"}`}
    >
      <div
        onPointerDown={down} onPointerMove={move} onPointerUp={up}
        onDoubleClick={() => !mobile && onMax()}
        className={`h-[38px] shrink-0 flex items-center px-3.5 border-b border-black/10 select-none cursor-default touch-none ${active ? "bg-gradient-to-b from-[#ebebeb] to-[#d8d8d8]" : "bg-[#f1f1f1]"}`}
      >
        <div className="flex gap-2 group">
          <Dot active={active} c="#ff5f57" onClick={onClose} label="Close" glyph="×" />
          <Dot active={active} c="#febc2e" onClick={onMin} label="Minimize" glyph="−" />
          <span className="hidden md:block"><Dot active={active} c="#28c840" onClick={onMax} label="Zoom" glyph="+" /></span>
        </div>
        <p className={`absolute left-1/2 -translate-x-1/2 text-[13px] font-semibold pointer-events-none ${active ? "text-[#3a3a3c]" : "text-[#a1a1a6]"}`}>{title}</p>
      </div>
      <div className="flex-1 min-h-0">{children}</div>
    </div>
  );
}

function Dock({ wins, open, u, mobile, onSpot }) {
  const [mx, setMx] = useState(null);
  const [W, setW] = useState(1200);
  const [bounce, setBounce] = useState(null);
  const refs = useRef([]);

  useEffect(() => {
    const f = () => setW(window.innerWidth);
    f();
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);

  const items = DOCK.filter((d) => !mobile || d.m);
  const mins = Object.entries(wins).filter(([, s]) => s.min).map(([id]) => id);
  const slots = items.length + mins.length + 1;
  const GAP = 6;
  const BASE = Math.max(34, Math.min(56, Math.floor((W * 0.97 - 36 - (slots + 2) * GAP) / slots)));
  const MAX = Math.round(BASE * 1.65), RANGE = 130;

  const size = (i) => {
    if (mx == null) return BASE;
    const el = refs.current[i];
    if (!el) return BASE;
    const r = el.getBoundingClientRect();
    const d = Math.abs(mx - (r.left + r.width / 2));
    const t = Math.max(0, 1 - d / RANGE);
    return BASE + (MAX - BASE) * Math.cos((1 - t) * Math.PI / 2) ** 1.6;
  };

  const act = (it) => {
    setBounce(it.id);
    setTimeout(() => setBounce(null), 700);
    if (it.app) open(it.app);
    else if (it.url) window.open(it.url, "_blank", "noopener");
    else if (it.spot) onSpot();
  };

  const running = (it) => (it.app && wins[it.app]) || false;
  let idx = 0;

  return (
    <div
      onMouseMove={(e) => setMx(e.clientX)} onMouseLeave={() => setMx(null)}
      className="fixed bottom-1.5 left-1/2 -translate-x-1/2 z-[1000] flex items-end rounded-[26px] bg-white/20 backdrop-blur-2xl border border-white/25 shadow-[0_10px_40px_rgba(0,0,0,0.35),inset_0_0_0_0.5px_rgba(255,255,255,0.4)]"
      style={{ gap: GAP, padding: `${GAP + 2}px ${GAP + 6}px ${GAP + 4}px` }}
    >
      {items.map((it) => {
        const i = idx++;
        const s = size(i);
        return (
          <button key={it.id} ref={(el) => (refs.current[i] = el)} onClick={() => act(it)} className="group relative flex flex-col items-center" style={{ width: s }}>
            <span className="absolute -top-10 px-2.5 py-1 rounded-md bg-[#2c2c2e]/90 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">{it.name}</span>
            <span className={`drop-shadow-[0_6px_8px_rgba(0,0,0,0.35)] ${bounce === it.id ? "dock-bounce" : ""}`}><it.Icon size={s} /></span>
            <span className={`absolute -bottom-1.5 w-1 h-1 rounded-full bg-white ${running(it) ? "opacity-90" : "opacity-0"}`} />
          </button>
        );
      })}

      <span className="w-px self-stretch bg-white/35 mx-0.5 my-2" />

      {mins.map((id) => {
        const i = idx++;
        const s = size(i);
        return (
          <button key={id} ref={(el) => (refs.current[i] = el)} onClick={() => open(id)} className="group relative flex flex-col items-center" style={{ width: s * 1.45 }}>
            <span className="absolute -top-10 px-2.5 py-1 rounded-md bg-[#2c2c2e]/90 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">{u.names[id]}</span>
            <div className="rounded-md overflow-hidden bg-white shadow-[0_6px_10px_rgba(0,0,0,0.4)] border border-white/60 flex flex-col" style={{ width: s * 1.45, height: s * 0.92 }}>
              <div className="h-2 bg-[#e3e3e6] flex items-center gap-0.5 px-1"><i className="w-1 h-1 rounded-full bg-[#ff5f57]" /><i className="w-1 h-1 rounded-full bg-[#febc2e]" /><i className="w-1 h-1 rounded-full bg-[#28c840]" /></div>
              <div className="flex-1 flex items-center justify-center text-[8px] text-gray-500 font-medium">{u.names[id]}</div>
            </div>
          </button>
        );
      })}

      <div ref={(el) => (refs.current[idx] = el)} title="Trash" className="relative flex flex-col items-center" style={{ width: size(idx) }}>
        <span className="drop-shadow-[0_6px_8px_rgba(0,0,0,0.3)]"><TrashIcon size={size(idx)} /></span>
      </div>
    </div>
  );
}

export default function Desktop() {
  const { i18n } = useTranslation();
  const lang = i18n.language === "tr" ? "tr" : "en";
  const u = ui[lang];

  const [wins, setWins] = useState({});
  const [sel, setSel] = useState(null);
  const [now, setNow] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [wp, setWpState] = useState("sunset");
  const [spot, setSpot] = useState(false);
  const [q, setQ] = useState("");
  const [menu, setMenu] = useState(false);
  const [locked, setLocked] = useState(false);
  const [notif, setNotif] = useState(false);
  const zRef = useRef(10);
  const bootRef = useRef(false);

  const setWp = (k) => { setWpState(k); try { localStorage.setItem("wp", k); } catch {} };

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    setNow(new Date());
    try { const k = localStorage.getItem("wp"); if (k && WALLPAPERS[k]) setWpState(k); } catch {}
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setSpot((v) => !v); setQ(""); }
      if (e.key === "Escape") { setSpot(false); setMenu(false); }
    };
    window.addEventListener("keydown", onKey);
    const id = setInterval(() => setNow(new Date()), 30000);
    const n1 = setTimeout(() => setNotif(true), 2500);
    const n2 = setTimeout(() => setNotif(false), 9000);
    return () => { window.removeEventListener("resize", check); window.removeEventListener("keydown", onKey); clearInterval(id); clearTimeout(n1); clearTimeout(n2); };
  }, []);

  const open = (id) => {
    setWins((w) => {
      zRef.current += 1;
      if (w[id]) return { ...w, [id]: { ...w[id], min: false, z: zRef.current } };
      const n = Object.keys(w).length;
      const a = APPS[id];
      const x = Math.max(24, (window.innerWidth - a.w) / 2 + (n % 5) * 34 - 60);
      const y = Math.max(44, (window.innerHeight - a.h) / 2 - 30 + (n % 5) * 30);
      return { ...w, [id]: { x, y, z: zRef.current, min: false, max: false } };
    });
  };

  useEffect(() => {
    if (bootRef.current) return;
    bootRef.current = true;
    open("messages");
  }, []);

  const patch = (id, p) => setWins((w) => ({ ...w, [id]: { ...w[id], ...p } }));
  const focus = (id) => { zRef.current += 1; patch(id, { z: zRef.current }); };
  const close = (id) => setWins((w) => { const n = { ...w }; delete n[id]; return n; });

  const front = Object.entries(wins).filter(([, s]) => !s.min).sort((a, b) => b[1].z - a[1].z)[0]?.[0];
  const appName = front ? u.names[front] : u.finder;

  const loc = lang === "tr" ? "tr-TR" : "en-US";
  const time = now ? now.toLocaleString(loc, { weekday: "short", day: "numeric", month: "short" }) + "  " + now.toLocaleTimeString(loc, { hour: "2-digit", minute: "2-digit" }) : "";

  const doDownload = () => { const a = document.createElement("a"); a.href = `/Aybek-Tigli-${lang === "tr" ? "TR" : "EN"}.pdf`; a.download = ""; a.click(); };

  const appleItems = [
    { l: u.aboutMac, run: () => open("settings") },
    null,
    { l: u.names.settings, run: () => open("settings") },
    { l: u.dlcv, run: doDownload },
    null,
    { l: u.lock, run: () => setLocked(true) },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden select-none mac-font" style={{ background: WALLPAPERS[wp] }} onMouseDown={() => { setSel(null); setMenu(false); }}>
      {/* Menu bar */}
      <div className="fixed top-0 inset-x-0 h-7 z-[1000] flex items-center justify-between px-3 text-white text-[13px] bg-black/20 backdrop-blur-2xl" onMouseDown={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-1">
          <button onClick={() => setMenu((v) => !v)} className={`px-2.5 py-0.5 rounded ${menu ? "bg-white/25" : ""}`} aria-label="Apple menu"><FaApple size={15} /></button>
          <span className="font-bold px-2.5">{appName}</span>
          <span className="hidden md:flex opacity-95">
            {[u.file, u.edit, u.view, u.window, u.help].map((m) => <span key={m} className="px-2.5 py-0.5 rounded hover:bg-white/20">{m}</span>)}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => i18n.changeLanguage(lang === "en" ? "tr" : "en")} className="font-semibold px-1.5 rounded hover:bg-white/20">{lang === "en" ? "TR" : "EN"}</button>
          <FiBatteryCharging className="hidden sm:block" />
          <FiWifi className="hidden sm:block" />
          <button onClick={() => { setSpot(true); setQ(""); }} aria-label="Search"><FiSearch /></button>
          <FiToggleRight className="hidden sm:block" />
          <span className="whitespace-nowrap">{time}</span>
        </div>
      </div>

      {/* Apple menu */}
      {menu && (
        <div onMouseDown={(e) => e.stopPropagation()} className="fixed top-8 left-2 z-[1100] w-60 rounded-[10px] bg-white/80 backdrop-blur-2xl shadow-2xl border border-black/10 py-1.5 text-[13px] text-[#1c1c1e] win-in">
          {appleItems.map((it, i) =>
            it ? (
              <button key={i} onClick={() => { it.run(); setMenu(false); }} className="w-full text-left px-3 py-1 mx-0 hover:bg-[#0b84ff] hover:text-white rounded-md" style={{ width: "calc(100% - 8px)", marginLeft: 4 }}>{it.l}</button>
            ) : (
              <div key={i} className="h-px bg-black/10 my-1.5 mx-3" />
            )
          )}
        </div>
      )}

      {/* Notification */}
      <button
        onClick={() => { open("messages"); setNotif(false); }}
        onMouseDown={(e) => e.stopPropagation()}
        className={`fixed top-10 right-3 z-[1200] w-[340px] max-w-[calc(100%-1.5rem)] text-left flex gap-3 p-3 rounded-2xl bg-white/80 backdrop-blur-2xl shadow-2xl border border-black/5 transition-all duration-500 ${notif ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0 pointer-events-none"}`}
      >
        <div className="w-10 h-10 rounded-[10px] bg-gradient-to-b from-[#5bf675] to-[#0cbc2c] flex items-center justify-center text-white shrink-0"><FiMessageCircle size={20} /></div>
        <div className="min-w-0">
          <div className="flex justify-between text-[13px]"><b>Ayberk Tığlı</b><span className="text-gray-500 text-xs">{u.nowWord}</span></div>
          <p className="text-[13px] text-gray-700 leading-snug">{u.notif}</p>
        </div>
      </button>

      {/* Desktop icons */}
      <div className="absolute top-10 right-4 bottom-28 flex flex-col flex-wrap-reverse content-start gap-3">
        {DESKTOP.map((id) => (
          <button
            key={id}
            onMouseDown={(e) => { e.stopPropagation(); setSel(id); setMenu(false); }}
            onClick={() => mobile && open(id)}
            onDoubleClick={() => open(id)}
            className="w-24 flex flex-col items-center gap-1 p-1 rounded-lg text-white"
          >
            <div className={`p-1 rounded-lg ${sel === id ? "bg-white/25" : ""}`}>
              {id === "cv" ? (
                <DocIcon size={64} label="PDF" color="#e5342b" />
              ) : id === "about" ? (
                <DocIcon size={64} label="TXT" color="#8e8e93" lines />
              ) : (
                <FolderIcon size={64} />
              )}
            </div>
            <span className={`text-[12px] px-1.5 rounded text-center leading-tight [text-shadow:0_1px_3px_rgba(0,0,0,0.6)] ${sel === id ? "bg-[#0b84ff]" : ""}`}>{u.names[id]}</span>
          </button>
        ))}
      </div>

      {/* Widgets */}
      <div className="hidden lg:flex absolute top-12 left-6 flex-col gap-4 w-56">
        <div className="rounded-[22px] bg-white/20 backdrop-blur-2xl border border-white/30 p-5 text-white shadow-xl">
          <p className="text-xs uppercase tracking-widest opacity-80">{now ? now.toLocaleDateString(loc, { weekday: "long" }) : ""}</p>
          <p className="text-[44px] leading-none whitespace-nowrap font-light mt-2">{now ? now.toLocaleTimeString(loc, { hour: "2-digit", minute: "2-digit" }) : ""}</p>
          <p className="text-sm opacity-80 mt-1">{now ? now.toLocaleDateString(loc, { day: "numeric", month: "long", year: "numeric" }) : ""}</p>
        </div>
        <div className="rounded-[22px] bg-white/20 backdrop-blur-2xl border border-white/30 p-5 text-white shadow-xl">
          <p className="text-xs uppercase tracking-widest opacity-80 mb-2">{u.nowTitle}</p>
          <p className="font-semibold">Ayberk Tığlı</p>
          <p className="text-sm opacity-90 mt-1">{u.nowText}</p>
          <p className="text-xs mt-3 opacity-80">{copy[lang].status}</p>
        </div>
      </div>

      {/* Windows */}
      {Object.entries(wins).map(([id, state]) => {
        const { Comp, w, h } = APPS[id];
        return (
          <Window
            key={id} title={u.names[id]} w={Math.min(w, typeof window !== "undefined" ? window.innerWidth - 40 : w)} h={h}
            state={state} active={front === id} mobile={mobile}
            onClose={() => close(id)} onMin={() => patch(id, { min: true })} onMax={() => patch(id, { max: !state.max })}
            onFocus={() => focus(id)} onMove={(x, y) => patch(id, { x, y })}
          >
            <Comp open={open} wp={wp} setWp={setWp} />
          </Window>
        );
      })}

      {/* Spotlight */}
      {spot && (() => {
        const items = [
          ...Object.keys(APPS).map((id) => ({ k: id, label: u.names[id], run: () => open(id) })),
          { k: "dl", label: u.dlcv, run: doDownload },
          { k: "lang", label: u.switchLang, run: () => i18n.changeLanguage(lang === "en" ? "tr" : "en") },
        ].filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));
        const go = (i) => { i.run(); setSpot(false); };
        return (
          <div className="fixed inset-0 z-[2000] flex items-start justify-center pt-[15vh] bg-black/20" onMouseDown={() => setSpot(false)}>
            <div onMouseDown={(e) => e.stopPropagation()} className="w-[92%] max-w-xl rounded-2xl bg-white/85 backdrop-blur-2xl shadow-2xl border border-white/40 overflow-hidden win-in">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-black/10">
                <FiSearch className="text-gray-500" />
                <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === "Enter" && items[0] && go(items[0])} placeholder={u.search} className="flex-1 bg-transparent outline-none text-lg" />
              </div>
              <ul className="max-h-72 overflow-y-auto p-2">
                {items.length === 0 && <li className="px-3 py-3 text-gray-500 text-sm">{u.noResult}</li>}
                {items.map((i, n) => (
                  <li key={i.k}>
                    <button onClick={() => go(i)} className={`w-full text-left px-3 py-2.5 rounded-lg text-sm flex items-center gap-3 hover:bg-[#0b84ff] hover:text-white ${n === 0 ? "bg-black/5" : ""}`}>
                      {i.k === "dl" ? <FiDownload /> : i.k === "lang" ? <FiGlobe /> : <FiFile />} {i.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })()}

      <Dock wins={wins} open={open} u={u} mobile={mobile} onSpot={() => { setSpot(true); setQ(""); }} />

      {/* Lock screen */}
      {locked && (
        <div onClick={() => setLocked(false)} className="fixed inset-0 z-[3000] flex flex-col items-center justify-between py-16 text-white cursor-pointer win-in" style={{ background: WALLPAPERS[wp] }}>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-2xl" />
          <div className="relative text-center mt-6">
            <p className="text-xl font-medium">{now ? now.toLocaleDateString(loc, { weekday: "long", day: "numeric", month: "long" }) : ""}</p>
            <p className="text-8xl font-semibold tracking-tight">{now ? now.toLocaleTimeString(loc, { hour: "2-digit", minute: "2-digit" }) : ""}</p>
          </div>
          <div className="relative flex flex-col items-center gap-3">
            <img src="/ayberk-tigli.jpg" alt="" className="w-20 h-20 rounded-full object-cover border-2 border-white/60" />
            <p className="font-semibold text-lg">Ayberk Tığlı</p>
            <p className="text-sm opacity-80">{u.unlock}</p>
          </div>
        </div>
      )}
    </div>
  );
}
