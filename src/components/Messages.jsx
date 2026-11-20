"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FiSearch, FiChevronLeft, FiDownload, FiArrowUpRight } from "react-icons/fi";
import { copy, experiences, skillCategories, contactLinks } from "@/data";

const IDS = ["about", "experience", "skills", "contact"];
const COLORS = { experience: "bg-orange-400", skills: "bg-violet-500", contact: "bg-emerald-500" };
const EMOJI = { experience: "💼", skills: "🧩", contact: "✉️" };

const Avatar = ({ id, size = 48 }) =>
  id === "about" ? (
    <div className="relative rounded-full overflow-hidden shrink-0 bg-gray-200" style={{ width: size, height: size }}>
      <Image src="/ayberk-tigli.jpg" alt="" fill sizes="64px" className="object-cover" />
    </div>
  ) : (
    <div className={`rounded-full shrink-0 flex items-center justify-center text-white ${COLORS[id]}`} style={{ width: size, height: size, fontSize: size * 0.45 }}>
      {EMOJI[id]}
    </div>
  );

const Bubble = ({ me, children, className = "" }) => (
  <div className={`flex ${me ? "justify-end" : "justify-start"} msg-in`}>
    <div className={`max-w-[85%] md:max-w-[70%] px-4 py-2.5 rounded-[20px] text-[15px] leading-snug ${me ? "bg-[#0b84ff] text-white rounded-br-md" : "bg-[#e9e9eb] text-[#1c1c1e] rounded-bl-md"} ${className}`}>
      {children}
    </div>
  </div>
);

const Typing = () => (
  <div className="flex justify-start msg-in">
    <div className="bg-[#e9e9eb] rounded-[20px] rounded-bl-md px-4 py-3.5 flex gap-1.5">
      {[0, 1, 2].map((i) => (
        <span key={i} className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
      ))}
    </div>
  </div>
);

function buildMessages(id, c, t, lang, goTo) {
  const th = c.threads[id];
  const m = [{ k: "q", node: <Bubble me>{th.q}</Bubble> }];
  const add = (node) => m.push({ k: m.length, node });

  if (id === "about") {
    c.aboutBubbles.forEach((b) => add(<Bubble>{b}</Bubble>));
    add(
      <div className="flex justify-start msg-in">
        <div className="relative w-56 aspect-[4/5] rounded-[20px] rounded-bl-md overflow-hidden bg-gray-200">
          <Image src="/ayberk-tigli.jpg" alt="Ayberk Tığlı" fill sizes="224px" className="object-cover" />
        </div>
      </div>
    );
    add(<Bubble>{t("heroDescription")}</Bubble>);
    add(<Bubble>{t("aboutMe")}</Bubble>);
    add(
      <Bubble>
        <ul className="space-y-1">{c.stats.map((s) => <li key={s}>✅ {s}</li>)}</ul>
      </Bubble>
    );
    add(<Bubble>{c.doTitle}</Bubble>);
    c.does.forEach((d) => add(<Bubble>{d}</Bubble>));
    add(<Bubble>{c.status}</Bubble>);
  }

  if (id === "experience") {
    add(<Bubble>{c.expIntro}</Bubble>);
    experiences.forEach((e) =>
      add(
        <Bubble className="!max-w-[92%] md:!max-w-[75%]">
          <p className="font-semibold">{lang === "en" ? e.position : e.positionTr || e.position}</p>
          <p className="text-[13px] opacity-70 mb-2">
            {e.company} · {lang === "en" ? e.period : e.periodTr}
            {e.current && ` · ${c.current}`}
            {e.volunteer && ` · ${c.volunteer}`}
          </p>
          <p className="mb-2">{t(e.descriptionKey)}</p>
          <div className="flex flex-wrap gap-1.5">
            {e.technologies.map((x) => (
              <span key={x} className="text-[11px] px-2 py-0.5 rounded-full bg-black/10">{x}</span>
            ))}
          </div>
        </Bubble>
      )
    );
  }

  if (id === "skills") {
    add(<Bubble>{c.skillsIntro}</Bubble>);
    skillCategories.forEach((cat) =>
      add(
        <Bubble className="!max-w-[92%] md:!max-w-[75%]">
          <p className="font-semibold mb-2">{cat.title}</p>
          <div className="flex flex-wrap gap-1.5">
            {cat.skills.map((x) => (
              <span key={x} className="text-[12px] px-2.5 py-1 rounded-full bg-white shadow-sm">{x}</span>
            ))}
          </div>
        </Bubble>
      )
    );
  }

  if (id === "contact") {
    add(<Bubble>{c.contactIntro}</Bubble>);
    contactLinks.forEach((l) =>
      add(
        <Bubble>
          <a href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="flex items-center gap-2 text-[#0b84ff] underline underline-offset-2">
            <span className="text-[#1c1c1e] no-underline">{l.label}:</span> {l.value} <FiArrowUpRight />
          </a>
        </Bubble>
      )
    );
    add(<Bubble>{c.contactOutro}</Bubble>);
    add(
      <div className="flex justify-start msg-in">
        <a
          href={`/Aybek-Tigli-${lang === "tr" ? "TR" : "EN"}.pdf`}
          download
          className="inline-flex items-center gap-2 px-5 py-3 rounded-[20px] rounded-bl-md bg-[#0b84ff] text-white text-sm font-medium hover:bg-[#0a74e0] transition-colors"
        >
          <FiDownload /> {c.cv}
        </a>
      </div>
    );
  }
  return m;
}

export default function Messages({ initial = "about" }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "tr" ? "tr" : "en";
  const c = copy[lang];

  const [active, setActive] = useState(initial);
  const [showThread, setShowThread] = useState(false);
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const scroller = useRef(null);

  const messages = useMemo(() => buildMessages(active, c, t, lang), [active, c, t, lang]);

  // typing reveal
  useEffect(() => {
    setCount(1);
    let n = 1;
    const id = setInterval(() => {
      n += 1;
      setCount(n);
      if (n >= messages.length) clearInterval(id);
    }, 750);
    return () => clearInterval(id);
  }, [messages]);

  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [count]);

  const open = (id) => {
    setActive(id);
    setShowThread(true);
  };

  const list = IDS.filter((id) => {
    const th = c.threads[id];
    return (th.name + th.preview).toLowerCase().includes(query.toLowerCase());
  });

  const th = c.threads[active];

  return (
    <div className="h-full w-full flex overflow-hidden bg-white text-[#1c1c1e]">
      {/* Sidebar */}
      <aside className={`${showThread ? "hidden md:flex" : "flex"} w-full md:w-[340px] shrink-0 flex-col bg-[#f6f6f8] md:border-r border-gray-200`}>
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-2xl font-bold">{c.messages}</h1>
            <button
              onClick={() => i18n.changeLanguage(lang === "en" ? "tr" : "en")}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-gray-200 hover:bg-gray-50"
            >
              {lang === "en" ? "TR" : "EN"}
            </button>
          </div>
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={c.search}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#e9e9eb] text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#0b84ff]/40"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-2 py-2 space-y-1">
          {list.map((id) => {
            const sel = id === active;
            return (
              <button
                key={id}
                onClick={() => open(id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors ${sel ? "bg-[#0b84ff] text-white" : "hover:bg-black/5"}`}
              >
                <Avatar id={id} />
                <div className="min-w-0">
                  <p className="font-semibold truncate">{c.threads[id].name}</p>
                  <p className={`text-sm truncate ${sel ? "text-white/80" : "text-gray-500"}`}>{c.threads[id].preview}</p>
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Thread */}
      <section className={`${showThread ? "flex" : "hidden md:flex"} flex-1 min-w-0 flex-col`}>
        <header className="shrink-0 h-[72px] border-b border-gray-200 bg-white/80 backdrop-blur flex items-center justify-center relative">
          <button onClick={() => setShowThread(false)} className="md:hidden absolute left-3 flex items-center text-[#0b84ff]">
            <FiChevronLeft size={26} />
            <span className="text-sm">{c.messages}</span>
          </button>
          <div className="flex flex-col items-center">
            <Avatar id={active} size={34} />
            <p className="text-[11px] mt-0.5 text-gray-600">{th.name}</p>
          </div>
        </header>

        <div ref={scroller} className="flex-1 overflow-y-auto px-4 md:px-10 py-6 space-y-2">
          {messages.slice(0, count).map((m) => (
            <React.Fragment key={`${active}-${lang}-${m.k}`}>{m.node}</React.Fragment>
          ))}
          {count < messages.length && <Typing />}
        </div>

        <footer className="shrink-0 border-t border-gray-200 px-4 py-3 bg-white">
          <p className="text-[11px] text-gray-400 mb-2">{c.quick}</p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {IDS.filter((id) => id !== active).map((id) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className="shrink-0 px-4 py-2 rounded-full border border-[#0b84ff]/40 text-[#0b84ff] text-sm hover:bg-[#0b84ff] hover:text-white transition-colors"
              >
                {c.threads[id].q}
              </button>
            ))}
          </div>
        </footer>
      </section>
    </div>
  );
}
