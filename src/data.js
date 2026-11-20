export const years = Math.max(1, new Date().getFullYear() - 2021);

export const experiences = [
  { id: 1, company: "Mata - Nada Hub", position: "Full-Stack Developer", period: "April 2024 - Present", periodTr: "Nisan 2024 - Devam Ediyor", descriptionKey: "exp1Desc", technologies: ["Next.js", "React", "TypeScript", "Prisma", "Laravel", "PHP", "MySQL / PostgreSQL", "REST API", "SEO"], current: true },
  { id: 2, company: "Feel Medya & Organizasyon", position: "Frontend Developer", period: "August 2023 - February 2024", periodTr: "Ağustos 2023 - Şubat 2024", descriptionKey: "exp2Desc", technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"] },
  { id: 3, company: "Serenay Yazılım", position: "Jr. Frontend Developer", period: "February 2021 - March 2023", periodTr: "Şubat 2021 - Mart 2023", descriptionKey: "exp3Desc", technologies: ["HTML", "CSS", "JavaScript", "jQuery", "E-commerce", "PHP", "CodeIgniter"] },
  { id: 4, company: "Blueit", position: "Jr. Frontend Developer (Volunteer)", positionTr: "Jr. Frontend Developer (Gönüllü)", period: "October 2021 - June 2022", periodTr: "Ekim 2021 - Haziran 2022", descriptionKey: "exp4Desc", technologies: ["HTML", "CSS", "JavaScript", "UI Development"], volunteer: true },
];

export const skillCategories = [
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "jQuery", "React", "Next.js", "TypeScript"] },
  { title: "CSS & Tools", skills: ["Bootstrap", "Tailwind CSS", "SASS/SCSS"] },
  { title: "Backend & Data", skills: ["PHP", "Laravel", "Prisma ORM", "MySQL / PostgreSQL", "REST API & Auth", "Zod / Zustand / TanStack Query", "Payment & ERP Integrations", "Technical SEO & i18n"] },
];

export const contactLinks = [
  { label: "Email", value: "ayberktiglii@gmail.com", href: "mailto:ayberktiglii@gmail.com" },
  { label: "LinkedIn", value: "ayberk-tigli", href: "https://www.linkedin.com/in/ayberk-tigli/" },
  { label: "GitHub", value: "ayberkkk", href: "https://github.com/ayberkkk" },
];

export const copy = {
  en: {
    search: "Search",
    messages: "Messages",
    quick: "Quick replies",
    role: "Full-Stack Developer",
    threads: {
      about: { name: "Ayberk Tığlı", preview: "Full-Stack Developer · Laravel & Next.js", q: "Hey! Who are you?" },
      experience: { name: "Experience", preview: "4 roles since 2021", q: "What's your work experience?" },
      skills: { name: "Skills", preview: "Laravel, Next.js, TypeScript, Prisma…", q: "What's your tech stack?" },
      contact: { name: "Contact", preview: "Let's work together", q: "How can I reach you?" },
    },
    aboutBubbles: ["Hey, nice to meet you 👋", "Frontend + backend, from corporate sites to e-commerce platforms."],
    stats: [`${years}+ years of experience`, "40+ web projects delivered", "Laravel & Next.js", "TR / EN multilingual builds"],
    doTitle: "Here's what I do:",
    does: ["🏢 Corporate websites & admin panels (Laravel)", "🛒 E-commerce & B2B platforms: catalogs, payments, ERP & Excel/XML imports", "⚡ Modern web apps with Next.js, TypeScript & Prisma"],
    status: "🟢 Open to new projects",
    expIntro: "Here's the short version of my journey:",
    skillsIntro: "This is what I work with every day:",
    contactIntro: "Reach out anytime, I usually reply fast.",
    contactOutro: "Or download my CV 👇",
    cv: "Download CV",
    current: "Current",
    volunteer: "Volunteer",
  },
  tr: {
    search: "Ara",
    messages: "Mesajlar",
    quick: "Hızlı yanıtlar",
    role: "Full-Stack Developer",
    threads: {
      about: { name: "Ayberk Tığlı", preview: "Full-Stack Developer · Laravel & Next.js", q: "Selam! Sen kimsin?" },
      experience: { name: "Deneyim", preview: "2021'den beri 4 pozisyon", q: "İş deneyimin nedir?" },
      skills: { name: "Yetenekler", preview: "Laravel, Next.js, TypeScript, Prisma…", q: "Hangi teknolojileri kullanıyorsun?" },
      contact: { name: "İletişim", preview: "Birlikte çalışalım", q: "Sana nasıl ulaşabilirim?" },
    },
    aboutBubbles: ["Selam, tanıştığımıza memnun oldum 👋", "Kurumsal sitelerden e-ticaret platformlarına kadar hem frontend hem backend yapıyorum."],
    stats: [`${years}+ yıl deneyim`, "40+ teslim edilen web projesi", "Laravel & Next.js", "TR / EN çok dilli yapılar"],
    doTitle: "Şunları yapıyorum:",
    does: ["🏢 Kurumsal siteler ve admin paneller (Laravel)", "🛒 E-ticaret ve B2B platformları: katalog, ödeme, ERP ve Excel/XML aktarımı", "⚡ Next.js, TypeScript ve Prisma ile modern web uygulamaları"],
    status: "🟢 Yeni projelere açığım",
    expIntro: "Yolculuğumun kısa özeti:",
    skillsIntro: "Her gün şunlarla çalışıyorum:",
    contactIntro: "İstediğin zaman yaz, genelde hızlı dönerim.",
    contactOutro: "Ya da CV'mi indir 👇",
    cv: "CV İndir",
    current: "Güncel",
    volunteer: "Gönüllü",
  },
};

export const ui = {
  en: { finder: "Finder", file: "File", edit: "Edit", view: "View", window: "Window", help: "Help",
    names: { messages: "Messages", about: "About Me", experience: "Experience", skills: "Skills", contact: "Contact", cv: "CV.pdf", terminal: "Terminal", settings: "Settings" },
    search: "Spotlight Search", noResult: "No results", actions: "Actions", dlcv: "Download CV", switchLang: "Switch to Turkish", nowTitle: "Currently", nowText: "Building with Laravel & Next.js", wpTitle: "Wallpaper", langTitle: "Language", aboutMac: "About this portfolio",
    lock: "Lock Screen", unlock: "Click to enter", nowWord: "now", notif: "Hey, welcome! 👋 Take a look around, I'm open to new projects.",
    aboutTitle: "About Me", name: "Name", date: "Date", kind: "Kind", folder: "Folder", job: "Job", items: "items",
    mailTo: "New Message", mailSubject: "Let's work together", cvNote: "Can't see the PDF?", cvOpen: "Open / download" },
  tr: { finder: "Finder", file: "Dosya", edit: "Düzen", view: "Görünüm", window: "Pencere", help: "Yardım",
    names: { messages: "Mesajlar", about: "Hakkımda", experience: "Deneyim", skills: "Yetenekler", contact: "İletişim", cv: "CV.pdf", terminal: "Terminal", settings: "Ayarlar" },
    search: "Spotlight Arama", noResult: "Sonuç yok", actions: "İşlemler", dlcv: "CV İndir", switchLang: "İngilizceye geç", nowTitle: "Şu an", nowText: "Laravel ve Next.js ile geliştiriyor", wpTitle: "Duvar Kağıdı", langTitle: "Dil", aboutMac: "Bu portfolyo hakkında",
    lock: "Ekranı Kilitle", unlock: "Girmek için tıkla", nowWord: "şimdi", notif: "Selam, hoş geldin! 👋 Etrafa göz at, yeni projelere açığım.",
    aboutTitle: "Hakkımda", name: "Ad", date: "Tarih", kind: "Tür", folder: "Klasör", job: "İş", items: "öğe",
    mailTo: "Yeni İleti", mailSubject: "Birlikte çalışalım", cvNote: "PDF görünmüyor mu?", cvOpen: "Aç / indir" },
};

export const WALLPAPERS = {
  sunset: "radial-gradient(60% 50% at 20% 15%, #ffb36b 0%, transparent 60%), radial-gradient(55% 55% at 85% 20%, #7a5cff 0%, transparent 60%), radial-gradient(70% 60% at 70% 90%, #ff5f9e 0%, transparent 60%), radial-gradient(60% 60% at 10% 90%, #2f6bff 0%, transparent 60%), #3b2a78",
  ocean: "radial-gradient(60% 60% at 15% 20%, #38e1ff 0%, transparent 60%), radial-gradient(60% 60% at 90% 30%, #2563eb 0%, transparent 60%), radial-gradient(70% 60% at 50% 100%, #0ea5a4 0%, transparent 60%), #0b1e4a",
  forest: "radial-gradient(60% 60% at 20% 20%, #a3e635 0%, transparent 55%), radial-gradient(60% 60% at 85% 25%, #10b981 0%, transparent 60%), radial-gradient(70% 60% at 60% 100%, #065f46 0%, transparent 60%), #0b2a1f",
  graphite: "radial-gradient(60% 60% at 25% 15%, #6b7280 0%, transparent 60%), radial-gradient(60% 60% at 85% 85%, #374151 0%, transparent 60%), #111827",
  peach: "radial-gradient(60% 60% at 15% 20%, #fde68a 0%, transparent 60%), radial-gradient(60% 60% at 85% 25%, #fb7185 0%, transparent 60%), radial-gradient(70% 60% at 50% 100%, #f97316 0%, transparent 60%), #7c2d12",
};
