"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiGithub, FiLinkedin, FiMail, FiGlobe, FiSun, FiMoon, FiChevronDown, FiArrowUpRight, FiX } from "react-icons/fi";
import { SiLaravel, SiPhp, SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiBootstrap, SiSass, SiPrisma, SiMysql, SiPostgresql, SiGit, SiDocker, SiPostman, SiHtml5, SiCss3, SiJquery } from "react-icons/si";
import { copy, experiences, skillCategories, contactLinks } from "@/data";
import { useSmoothScroll, RevealText, CountUp, ScrollMarquee, GlowMarquee } from "@/components/Motion";

const TECH1 = [
  { name: "Laravel", Icon: SiLaravel, color: "#ff2d20" }, { name: "PHP", Icon: SiPhp, color: "#8892bf" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" }, { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" }, { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38bdf8" }, { name: "Prisma", Icon: SiPrisma, color: "#5a67d8" },
];
const TECH2 = [
  { name: "MySQL", Icon: SiMysql, color: "#4aa3df" }, { name: "PostgreSQL", Icon: SiPostgresql, color: "#699eca" },
  { name: "Docker", Icon: SiDocker, color: "#2496ed" }, { name: "Git", Icon: SiGit, color: "#f05133" },
  { name: "Postman", Icon: SiPostman, color: "#ff6c37" }, { name: "Bootstrap", Icon: SiBootstrap, color: "#a56bf0" },
  { name: "Sass", Icon: SiSass, color: "#cc6699" }, { name: "HTML5", Icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", Icon: SiCss3, color: "#2965f1" }, { name: "jQuery", Icon: SiJquery, color: "#5aa8e6" },
];

const T = {
  en: {
    home: "Home", about: "About", contact: "Contact", experience: "Experience", skills: "Skills",
    hi: "Hi, I'm Ayberk Tığlı. I build fast, scalable web products.",
    open: "Open to new projects, working with Laravel & Next.js.",
    avail: "Available for opportunity", loc: "Türkiye", resume: "View Resume", back: "Back",
    hello: "hello",
  },
  tr: {
    home: "Ana Sayfa", about: "Hakkımda", contact: "İletişim", experience: "Deneyim", skills: "Yetenekler",
    hi: "Merhaba, ben Ayberk Tığlı. Hızlı ve ölçeklenebilir web ürünleri geliştiriyorum.",
    open: "Yeni projelere açığım, Laravel ve Next.js ile çalışıyorum.",
    avail: "Yeni fırsatlara açığım", loc: "Türkiye", resume: "CV'yi Gör", back: "Geri",
    hello: "merhaba",
  },
};

const Bolt = () => (
  <svg viewBox="0 0 100 130" className="inline-block h-[0.72em] w-auto mx-[0.06em] align-baseline" fill="none" stroke="#2bb2ff" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round">
    <path d="M60 6 14 72h34l-8 52 46-68H52Z" />
  </svg>
);

const Code = () => (
  <svg viewBox="0 0 120 120" className="inline-block h-[0.7em] w-auto mx-[0.06em] align-baseline">
    <rect x="8" y="10" width="104" height="100" rx="26" fill="#f2b600" />
    <path d="M44 42 26 60l18 18M76 42l18 18-18 18" fill="none" stroke="#2a2108" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M66 36 54 84" stroke="#2a2108" strokeWidth="9" strokeLinecap="round" />
  </svg>
);

function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () => setT(new Date().toLocaleTimeString("en-GB"));
    f();
    const id = setInterval(f, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="font-mono text-xl tracking-[0.2em] opacity-90">{t || "00:00:00"}</span>;
}

function Sec({ id, tone = "bg2", children }) {
  return (
    <section id={`sec-${id}`} className="relative z-10 -mt-10 md:-mt-16 min-h-screen px-6 md:px-20 pt-36 pb-24 rounded-t-[40px] md:rounded-t-[64px]" style={{ background: `var(--${tone})`, boxShadow: "0 -20px 60px rgba(0,0,0,0.25)" }}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}


const FORM = {
  en: { title: "Send me a message", name: "Your name", email: "Your email", message: "Your message", send: "Send message", sending: "Sending…", ok: "Thanks! Your message has been sent.", err: "Something went wrong. Please try again or email me directly.", rate: "Too many messages. Please try again later.", notcfg: "The form isn't active yet. Please email me directly.", invalid: "Please check your name, email and message.", or: "Or reach me here" },
  tr: { title: "Bana mesaj gönder", name: "Adın", email: "E-posta adresin", message: "Mesajın", send: "Mesajı gönder", sending: "Gönderiliyor…", ok: "Teşekkürler! Mesajın gönderildi.", err: "Bir sorun oluştu. Tekrar dene ya da doğrudan mail at.", rate: "Çok fazla mesaj gönderildi. Lütfen daha sonra tekrar dene.", notcfg: "Form henüz aktif değil. Lütfen doğrudan mail at.", invalid: "Lütfen ad, e-posta ve mesajını kontrol et.", or: "Ya da buradan ulaş" },
};

function ContactForm({ lang }) {
  const f = FORM[lang];
  const [st, setSt] = useState({ s: "idle", m: "" });
  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());
    setSt({ s: "sending", m: "" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json().catch(() => ({}));
      if (res.ok) { setSt({ s: "ok", m: f.ok }); form.reset(); return; }
      const msg = res.status === 429 ? f.rate : res.status === 503 ? f.notcfg : res.status === 400 ? f.invalid : f.err;
      setSt({ s: "err", m: msg });
    } catch {
      setSt({ s: "err", m: f.err });
    }
  };
  const field = "w-full bg-transparent border-b py-4 text-lg md:text-xl outline-none placeholder:opacity-40 focus:border-[var(--fg)] transition-colors";
  return (
    <form onSubmit={submit} className="mb-16" noValidate>
      <p className="text-xs uppercase tracking-[0.3em] mb-6" style={{ color: "var(--soft)" }}>{f.title}</p>
      <div className="grid md:grid-cols-2 gap-x-10">
        <input name="name" required maxLength={80} placeholder={f.name} autoComplete="name" className={field} style={{ borderColor: "var(--line)" }} />
        <input name="email" type="email" required maxLength={120} placeholder={f.email} autoComplete="email" className={field} style={{ borderColor: "var(--line)" }} />
      </div>
      <textarea name="message" required minLength={10} maxLength={3000} rows={5} placeholder={f.message} className={`${field} resize-none`} style={{ borderColor: "var(--line)" }} />
      {/* honeypot */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="flex flex-wrap items-center gap-5 mt-8">
        <button disabled={st.s === "sending"} className="group flex items-center gap-3 h-12 px-6 rounded-full bg-[var(--fg)] text-[var(--bg)] font-semibold text-sm disabled:opacity-50">
          {st.s === "sending" ? f.sending : f.send}
          <FiArrowUpRight className="group-hover:rotate-45 transition-transform duration-500" />
        </button>
        {st.m && <p role="status" className="text-sm" style={{ color: st.s === "ok" ? "#34d399" : "#f87171" }}>{st.m}</p>}
      </div>
      <p className="text-xs uppercase tracking-[0.3em] mt-16" style={{ color: "var(--soft)" }}>{f.or}</p>
    </form>
  );
}

const H = ({ children }) => <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-12">{children}</h2>;

export default function Portfolio() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "tr" ? "tr" : "en";
  const tr = T[lang];
  const c = copy[lang];

  const [dark, setDark] = useState(true);
  const [view, setView] = useState("home");
  const [menu, setMenu] = useState(false);
  const [intro, setIntro] = useState(true);
  const [pos, setPos] = useState({ x: 50, y: 40 });
  const root = useRef(null);

  useEffect(() => {
    try { const d = localStorage.getItem("dark"); if (d !== null) setDark(d === "1"); } catch {}
    const id = setTimeout(() => setIntro(false), 2600);
    return () => clearTimeout(id);
  }, []);

  const toggleTheme = () => { setDark((d) => { try { localStorage.setItem("dark", d ? "0" : "1"); } catch {} return !d; }); };

  const scroller = useRef(null);
  const lenis = useSmoothScroll(scroller);
  const go = (v) => {
    setMenu(false);
    const target = scroller.current?.querySelector(`#sec-${v}`);
    if (!target) return;
    if (lenis.current) lenis.current.scrollTo(v === "home" ? 0 : target, { duration: 1.4 });
    else target.scrollIntoView({ behavior: "smooth" });
  };
  const onScroll = (e) => {
    const el = e.currentTarget;
    let cur = "home";
    for (const id of ["home", "about", "experience", "skills", "contact"]) {
      const n = el.querySelector(`#sec-${id}`);
      if (n && n.offsetTop - el.scrollTop < el.clientHeight * 0.4) cur = id;
    }
    setView(cur);
  };

  const vars = dark
    ? { "--bg": "#050505", "--bg2": "#0e0e11", "--fg": "#ffffff", "--soft": "rgba(255,255,255,0.55)", "--pill": "#222226", "--line": "rgba(255,255,255,0.12)" }
    : { "--bg": "#f3f2ee", "--bg2": "#ffffff", "--fg": "#0b0b0b", "--soft": "rgba(0,0,0,0.55)", "--pill": "#e0dfd9", "--line": "rgba(0,0,0,0.12)" };

  const gradText = dark ? "from-white via-white to-zinc-500" : "from-black via-black to-zinc-400";

  const resume = () => {
    const a = document.createElement("a");
    a.href = `/Aybek-Tigli-${lang === "tr" ? "TR" : "EN"}.pdf`;
    a.download = "";
    a.click();
  };

  const navBtn = (id, label) => (
    <button onClick={() => go(id)} className={`px-3 md:px-5 py-2 rounded-full text-[13px] md:text-sm font-medium whitespace-nowrap transition-colors ${view === id ? "bg-[var(--pill)]" : "opacity-80 hover:opacity-100"}`}>
      {label}
    </button>
  );

  return (
    <div
      ref={root}
      onMouseMove={(e) => setPos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 })}
      className="fixed inset-0 overflow-hidden"
      style={{ ...vars, background: "var(--bg)", color: "var(--fg)" }}
    >
      {/* spotlight */}
      <div className="pointer-events-none absolute inset-0 transition-[background] duration-300"
        style={{ background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, ${dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)"}, transparent 60%)` }} />

      {/* Intro */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${intro ? "translate-y-0" : "-translate-y-full"}`} style={{ background: "var(--bg)" }}>
        <p className="script-font text-7xl md:text-9xl intro-write">{tr.hello}</p>
      </div>

      {/* Top bar */}
      <header className="absolute top-0 inset-x-0 z-40 h-24 px-6 md:px-32 flex items-center justify-between" style={{ background: "linear-gradient(var(--bg) 60%, transparent)", backdropFilter: "blur(8px)", WebkitMaskImage: "linear-gradient(#000 70%, transparent)", maskImage: "linear-gradient(#000 70%, transparent)" }}>
        <Clock />
        <nav className="hidden md:flex items-center gap-1 relative">
          {navBtn("home", tr.home)}
          <div className="relative">
            <button onClick={() => setMenu((m) => !m)} className={`px-5 py-2 rounded-full text-sm font-medium flex items-center gap-1 ${["about", "experience", "skills"].includes(view) ? "bg-[var(--pill)]" : "opacity-80 hover:opacity-100"}`}>
              {tr.about} <FiChevronDown className={`transition-transform ${menu ? "rotate-180" : ""}`} />
            </button>
            {menu && (
              <div className="absolute top-12 left-0 w-44 rounded-2xl p-1.5 shadow-2xl border view-in" style={{ background: "var(--pill)", borderColor: "var(--line)" }}>
                {[["about", tr.about], ["experience", tr.experience], ["skills", tr.skills]].map(([id, l]) => (
                  <button key={id} onClick={() => go(id)} className="w-full text-left px-4 py-2 rounded-xl text-sm hover:bg-black/10">{l}</button>
                ))}
              </div>
            )}
          </div>
          {navBtn("contact", tr.contact)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => i18n.changeLanguage(lang === "en" ? "tr" : "en")} className="h-10 px-3 rounded-full bg-[var(--pill)] flex items-center gap-1.5 text-xs font-semibold" aria-label="Language">
            <FiGlobe /> {lang.toUpperCase()}
          </button>
          <button onClick={toggleTheme} className="w-10 h-10 rounded-full bg-[var(--pill)] flex items-center justify-center" aria-label="Theme">
            {dark ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      <nav className="md:hidden absolute top-[70px] inset-x-0 z-40 flex justify-center gap-0.5 px-2 pb-2 text-sm" style={{ background: "linear-gradient(var(--bg) 60%, transparent)" }}>
        {navBtn("home", tr.home)}{navBtn("about", tr.about)}{navBtn("experience", tr.experience)}{navBtn("skills", tr.skills)}{navBtn("contact", tr.contact)}
      </nav>

      {/* Side tab */}
      <button onClick={() => go("contact")} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white text-black py-10 px-4 rounded-r-3xl shadow-2xl text-[10px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-rl] hover:pl-6 transition-all">
        {tr.avail}
      </button>

      {/* Scroll container */}
      <div ref={scroller} onScroll={onScroll} className="absolute inset-0 overflow-y-auto">
      <div>
      <section id="sec-home" className="relative h-screen">
      <main className="absolute inset-0 flex items-center justify-center px-4">
        <div className="relative w-full max-w-[1500px]">
          <p className="hidden md:block absolute left-[3%] top-[2%] w-44 text-left text-[11px] leading-relaxed tracking-[0.18em] uppercase" style={{ color: "var(--soft)" }}>{tr.hi}</p>
          <p className="hidden md:block absolute right-[3%] -bottom-[6%] w-52 text-[11px] leading-relaxed tracking-[0.18em] uppercase" style={{ color: "var(--soft)" }}>{tr.open}</p>

          <a href="https://github.com/ayberkkk" target="_blank" rel="noopener noreferrer" className="hidden md:block absolute right-[10%] top-[2%] opacity-60 hover:opacity-100 float-y"><FiGithub size={26} /></a>
          <a href="https://www.linkedin.com/in/ayberk-tigli/" target="_blank" rel="noopener noreferrer" className="hidden md:block absolute left-[7%] top-[46%] opacity-60 hover:opacity-100 float-y" style={{ animationDelay: "-2s" }}><FiLinkedin size={26} /></a>
          <a href="mailto:ayberktiglii@gmail.com" className="hidden md:block absolute right-[4%] top-[46%] opacity-60 hover:opacity-100 float-y" style={{ animationDelay: "-4s" }}><FiMail size={26} /></a>

          <h1 className="text-center font-black uppercase tracking-[-0.045em] leading-[0.86] text-[13vw] md:text-[clamp(44px,9.4vw,160px)] select-none">
            {[
              <>WEB &amp; API</>,
              <>FULL<Bolt />STACK</>,
              <>DEVEL<Code />OPER</>,
            ].map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.04em]">
                <span className={`block bg-gradient-to-r ${gradText} bg-clip-text text-transparent line-up`} style={{ animationDelay: `${2.4 + i * 0.12}s` }}>{line}</span>
              </span>
            ))}
          </h1>
          <div className="md:hidden flex justify-center gap-8 mt-10 opacity-70">
            <a href="https://github.com/ayberkkk" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/ayberk-tigli/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin size={24} /></a>
            <a href="mailto:ayberktiglii@gmail.com" aria-label="Email"><FiMail size={24} /></a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 inset-x-0 z-20 px-6 md:px-32 pb-6 flex items-center justify-between">
        <span className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "var(--soft)" }}>{tr.loc} — {new Date().getFullYear()}</span>
        <button onClick={resume} className="group flex items-center gap-3 h-12 rounded-full bg-white text-black pl-2 pr-2 hover:pl-6 transition-all duration-500">
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold group-hover:max-w-[140px] transition-all duration-500">{tr.resume}</span>
          <span className="w-8 h-8 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500"><FiArrowUpRight size={20} /></span>
        </button>
      </footer>
      </section>

      {/* Views */}
      <ScrollMarquee scrollerRef={scroller} words={lang === "tr" ? ["Laravel", "Next.js", "Full-Stack", "Hızlı", "Ölçeklenebilir"] : ["Laravel", "Next.js", "Full-Stack", "Fast", "Scalable"]} />
      <Sec id="about" tone="bg2">
          <H>{tr.about}</H>
          <RevealText scrollerRef={scroller} text={t("aboutMe")} className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight max-w-4xl mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px border-y" style={{ borderColor: "var(--line)" }}>
            <div className="p-6"><p className="text-4xl md:text-6xl font-black tracking-tighter"><CountUp to={new Date().getFullYear() - 2021} suffix="+" /></p><p className="text-xs mt-2" style={{ color: "var(--soft)" }}>{lang === "tr" ? "Yıllık deneyim" : "Years of experience"}</p></div>
            <div className="p-6"><p className="text-4xl md:text-6xl font-black tracking-tighter"><CountUp to={40} suffix="+" /></p><p className="text-xs mt-2" style={{ color: "var(--soft)" }}>{lang === "tr" ? "Web projesi" : "Web projects"}</p></div>
            <div className="p-6"><p className="text-4xl md:text-6xl font-black tracking-tighter"><CountUp to={2} /></p><p className="text-xs mt-2" style={{ color: "var(--soft)" }}>{lang === "tr" ? "Ana stack: Laravel & Next.js" : "Core stacks: Laravel & Next.js"}</p></div>
            <div className="p-6"><p className="text-4xl md:text-6xl font-black tracking-tighter">TR / EN</p><p className="text-xs mt-2" style={{ color: "var(--soft)" }}>{lang === "tr" ? "Çok dilli yapılar" : "Multilingual builds"}</p></div>
          </div>
          <p className="mt-12 mb-5 text-xs uppercase tracking-[0.3em]" style={{ color: "var(--soft)" }}>{c.doTitle}</p>
          <ul className="space-y-4 text-xl">{c.does.map((d) => <li key={d}>{d}</li>)}</ul>
        </Sec>
      <div className="relative z-0 -mt-10 pt-24 pb-40" style={{ background: "var(--bg2)" }}>
        <p className="text-center text-xs uppercase tracking-[0.35em] mb-8" style={{ color: "var(--soft)" }}>{lang === "tr" ? "Teknoloji & Araçlar" : "Tech Stack & Tools"}</p>
        <GlowMarquee items={TECH1} duration={55} />
        <GlowMarquee items={TECH2} reverse duration={65} />
      </div>

      <Sec id="experience" tone="bg">
          <H>{tr.experience}</H>
          {experiences.map((e) => (
            <article key={e.id} className="grid md:grid-cols-[220px_1fr] gap-4 py-8 border-t" style={{ borderColor: "var(--line)" }}>
              <p className="text-sm" style={{ color: "var(--soft)" }}>{lang === "en" ? e.period : e.periodTr}</p>
              <div>
                <h3 className="text-2xl font-bold">{lang === "en" ? e.position : e.positionTr || e.position}</h3>
                <p className="mb-3" style={{ color: "var(--soft)" }}>{e.company}</p>
                <p className="leading-relaxed opacity-85 mb-4">{t(e.descriptionKey)}</p>
                <div className="flex flex-wrap gap-2">{e.technologies.map((x) => <span key={x} className="text-xs px-3 py-1 rounded-full border" style={{ borderColor: "var(--line)" }}>{x}</span>)}</div>
              </div>
            </article>
          ))}
        </Sec>

      <Sec id="skills" tone="bg2">
          <H>{tr.skills}</H>
          {skillCategories.map((cat) => (
            <section key={cat.title} className="grid md:grid-cols-[220px_1fr] gap-4 py-8 border-t" style={{ borderColor: "var(--line)" }}>
              <p className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--soft)" }}>{cat.title}</p>
              <div className="flex flex-wrap gap-3">{cat.skills.map((x) => <span key={x} className="text-lg md:text-2xl font-semibold px-5 py-2 rounded-full border" style={{ borderColor: "var(--line)" }}>{x}</span>)}</div>
            </section>
          ))}
        </Sec>

      <Sec id="contact" tone="bg">
          <H>{tr.contact}</H>
          <ContactForm lang={lang} />
          {contactLinks.map((l) => (
            <a key={l.label} href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="group flex items-center justify-between py-8 border-t" style={{ borderColor: "var(--line)" }}>
              <span className="text-sm w-28" style={{ color: "var(--soft)" }}>{l.label}</span>
              <span className="flex-1 min-w-0 break-all text-lg sm:text-2xl md:text-5xl font-bold tracking-tight pr-3">{l.value}</span>
              <FiArrowUpRight size={28} className="group-hover:rotate-45 transition-transform duration-500" />
            </a>
          ))}
        </Sec>
      </div>
      </div>
    </div>
  );
}
