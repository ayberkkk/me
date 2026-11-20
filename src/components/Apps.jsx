"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FiChevronLeft, FiChevronRight, FiChevronDown, FiExternalLink, FiMail } from "react-icons/fi";
import { copy, ui, experiences, skillCategories, contactLinks } from "@/data";

import { FolderIcon } from "@/components/Icons";
export { FolderIcon };

const useL = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "tr" ? "tr" : "en";
  return { t, lang, c: copy[lang], u: ui[lang] };
};

const Toolbar = ({ title, count, u }) => (
  <div className="h-11 shrink-0 flex items-center gap-3 px-4 border-b border-gray-200 bg-[#f6f6f6] text-gray-500">
    <FiChevronLeft /> <FiChevronRight className="opacity-40" />
    <p className="font-semibold text-sm text-gray-800 ml-1">{title}</p>
    {count != null && <p className="ml-auto text-xs">{count} {u.items}</p>}
  </div>
);


const NAV = ["about", "experience", "skills", "contact", "cv"];
const Shell = ({ id, openApp, children }) => {
  const { u } = useL();
  return (
    <div className="h-full flex">
      <aside className="hidden md:flex w-44 shrink-0 flex-col gap-0.5 p-3 bg-[#e3e3e6] border-r border-black/10 text-[13px]">
        <p className="text-[11px] font-semibold text-gray-400 px-2 mb-1">Favorites</p>
        {NAV.map((n) => (
          <button key={n} onClick={() => openApp?.(n)} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-left ${n === id ? "bg-black/10 font-medium" : "hover:bg-black/5"}`}>
            <FolderIcon size={16} /> {u.names[n]}
          </button>
        ))}
      </aside>
      <div className="flex-1 min-w-0 flex flex-col">{children}</div>
    </div>
  );
};

export function AboutApp() {
  const { t, c } = useL();
  return (
    <div className="h-full overflow-y-auto bg-[#fffdf3] text-[#2b2b2b]">
      <div className="max-w-2xl mx-auto px-6 md:px-10 py-8">
        <div className="flex items-center gap-5 mb-6">
          <div className="relative w-24 h-28 rounded-2xl overflow-hidden bg-gray-200 shrink-0">
            <Image src="/ayberk-tigli.jpg" alt="Ayberk Tığlı" fill sizes="96px" className="object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Ayberk Tığlı</h1>
            <p className="text-sm text-gray-500">{c.role} · Laravel & Next.js</p>
            <p className="text-sm mt-1">{c.status}</p>
          </div>
        </div>
        <p className="text-lg leading-relaxed mb-4">{t("heroDescription")}</p>
        <p className="leading-relaxed text-gray-700 mb-6">{t("aboutMe")}</p>
        <h2 className="font-bold mb-2">{c.doTitle}</h2>
        <ul className="space-y-2 mb-6">{c.does.map((d) => <li key={d}>{d}</li>)}</ul>
        <ul className="grid grid-cols-2 gap-2">
          {c.stats.map((s) => <li key={s} className="rounded-xl bg-black/5 px-3 py-2 text-sm">✅ {s}</li>)}
        </ul>
      </div>
    </div>
  );
}

export function ExperienceApp({ open: openApp }) {
  const { t, lang, c, u } = useL();
  const [open, setOpen] = useState(1);
  return (
    <Shell id="experience" openApp={openApp}>
    <div className="h-full flex flex-col bg-white">
      <Toolbar title={u.names.experience} count={experiences.length} u={u} />
      <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_190px_90px] px-4 py-2 text-xs text-gray-400 border-b border-gray-100">
        <span>{u.name}</span><span className="hidden md:block">{u.date}</span><span className="hidden md:block">{u.kind}</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        {experiences.map((e, i) => {
          const isOpen = open === e.id;
          return (
            <div key={e.id} className={i % 2 ? "bg-gray-50/70" : ""}>
              <button onClick={() => setOpen(isOpen ? null : e.id)} className="w-full grid grid-cols-[1fr_auto] md:grid-cols-[1fr_190px_90px] items-center px-4 py-2.5 text-left text-sm hover:bg-[#0b84ff]/10">
                <span className="flex items-center gap-2 min-w-0">
                  {isOpen ? <FiChevronDown className="text-gray-400" /> : <FiChevronRight className="text-gray-400" />}
                  <FolderIcon size={20} />
                  <span className="truncate font-medium">{e.company}</span>
                  {e.current && <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-700">{c.current}</span>}
                </span>
                <span className="hidden md:block text-gray-500 text-xs">{lang === "en" ? e.period : e.periodTr}</span>
                <span className="hidden md:block text-gray-500 text-xs">{u.job}</span>
              </button>
              {isOpen && (
                <div className="msg-in px-4 md:px-12 pb-5 pt-1 text-sm">
                  <p className="font-semibold">{lang === "en" ? e.position : e.positionTr || e.position}</p>
                  <p className="text-xs text-gray-500 mb-2 md:hidden">{lang === "en" ? e.period : e.periodTr}</p>
                  <p className="text-gray-700 leading-relaxed my-2">{t(e.descriptionKey)}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {e.technologies.map((x) => <span key={x} className="text-[11px] px-2 py-0.5 rounded-full bg-[#0b84ff]/10 text-[#0b6fd6]">{x}</span>)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
    </Shell>
  );
}

export function SkillsApp({ open: openApp }) {
  const { u } = useL();
  return (
    <Shell id="skills" openApp={openApp}>
    <div className="h-full flex flex-col bg-white">
      <Toolbar title={u.names.skills} count={skillCategories.length} u={u} />
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {skillCategories.map((cat) => (
          <section key={cat.title}>
            <div className="flex items-center gap-2 mb-3">
              <FolderIcon size={26} />
              <h3 className="font-semibold">{cat.title}</h3>
              <span className="text-xs text-gray-400">{cat.skills.length} {u.items}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {cat.skills.map((s) => (
                <div key={s} className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-center hover:bg-[#0b84ff]/10 hover:border-[#0b84ff]/40 transition-colors">
                  {s}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
    </Shell>
  );
}

export function ContactApp() {
  const { c, u } = useL();
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="h-11 shrink-0 flex items-center gap-2 px-4 border-b border-gray-200 bg-[#f6f6f6] text-sm font-semibold text-gray-800">
        <FiMail /> {u.mailTo}
      </div>
      <div className="px-6 py-3 border-b border-gray-100 text-sm">
        <p><span className="text-gray-400 w-16 inline-block">To:</span>Ayberk Tığlı</p>
        <p className="mt-1"><span className="text-gray-400 w-16 inline-block">Subj:</span>{u.mailSubject}</p>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <p className="mb-5 text-gray-700">{c.contactIntro}</p>
        <ul className="space-y-2">
          {contactLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                 className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 hover:bg-[#0b84ff]/10 hover:border-[#0b84ff]/40 transition-colors">
                <span><span className="text-xs text-gray-400 block">{l.label}</span>{l.value}</span>
                <FiExternalLink className="text-gray-400" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function CvApp() {
  const { lang, u } = useL();
  const file = `/Aybek-Tigli-${lang === "tr" ? "TR" : "EN"}.pdf`;
  return (
    <div className="h-full flex flex-col bg-[#525659]">
      <iframe src={file} title="CV" className="flex-1 w-full bg-white" />
      <div className="shrink-0 px-4 py-2 text-xs text-white/80 bg-[#3a3d3f] flex justify-between">
        <span>{u.cvNote}</span>
        <a href={file} download className="underline">{u.cvOpen}</a>
      </div>
    </div>
  );
}
