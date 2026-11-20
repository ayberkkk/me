import React from "react";

const Squircle = ({ id, a, b, children, size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: "block" }}>
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={a} />
        <stop offset="1" stopColor={b} />
      </linearGradient>
      <linearGradient id={`${id}-g`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#fff" stopOpacity="0.45" />
        <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect x="3" y="3" width="94" height="94" rx="22" fill={`url(#${id})`} />
    {children}
    <rect x="3" y="3" width="94" height="94" rx="22" fill={`url(#${id}-g)`} />
    <rect x="3.5" y="3.5" width="93" height="93" rx="21.5" fill="none" stroke="#000" strokeOpacity="0.12" />
  </svg>
);

export const MessagesIcon = ({ size = 52 }) => (
  <Squircle id="ic-msg" a="#6bf178" b="#0bbf2c" size={size}>
    <path d="M50 22c-19 0-34 11.5-34 26 0 8 4.6 15 11.8 19.8-.8 4-2.8 7.4-5.8 10.2 6-.2 11-2.4 14.6-5.4 3.8 1 7.4 1.4 13.4 1.4 19 0 34-11.5 34-26S69 22 50 22Z" fill="#fff" />
  </Squircle>
);

export const FinderIcon = ({ size = 52 }) => (
  <Squircle id="ic-fin" a="#7fd6ff" b="#1c7cf0" size={size}>
    <path d="M3 25a22 22 0 0 1 22-22h25v94H25A22 22 0 0 1 3 75Z" fill="#e6f4ff" opacity="0.92" />
    <path d="M50 3h25a22 22 0 0 1 22 22v50a22 22 0 0 1-22 22H50Z" fill="#2b86f3" opacity="0.55" />
    <rect x="31" y="31" width="5" height="16" rx="2.5" fill="#111a33" />
    <rect x="64" y="31" width="5" height="16" rx="2.5" fill="#111a33" />
    <path d="M50 38v14" stroke="#111a33" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    <path d="M30 65c9 10 31 10 40 0" fill="none" stroke="#111a33" strokeWidth="4" strokeLinecap="round" />
  </Squircle>
);

export const NotesIcon = ({ size = 52 }) => (
  <Squircle id="ic-note" a="#ffffff" b="#f2f2f2" size={size}>
    <path d="M3 25a22 22 0 0 1 22-22h50a22 22 0 0 1 22 22v10H3Z" fill="#ffd33d" />
    <g stroke="#d5d5d9" strokeWidth="2.5" strokeLinecap="round">
      <path d="M16 50h68M16 63h68M16 76h68M16 89h40" />
    </g>
  </Squircle>
);

export const MailIcon = ({ size = 52 }) => (
  <Squircle id="ic-mail" a="#62d0ff" b="#0a62ff" size={size}>
    <rect x="18" y="30" width="64" height="42" rx="6" fill="#fff" />
    <path d="M18 36l32 23 32-23" fill="none" stroke="#0a62ff" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
  </Squircle>
);

export const PreviewIcon = ({ size = 52 }) => (
  <Squircle id="ic-prev" a="#f7f7f9" b="#d9d9de" size={size}>
    <rect x="16" y="20" width="56" height="44" rx="4" fill="#9fd8ff" stroke="#fff" strokeWidth="3" />
    <path d="M16 56l16-16 14 14 10-8 16 16v2H16Z" fill="#4cb35a" />
    <circle cx="58" cy="32" r="5" fill="#ffe066" />
    <circle cx="64" cy="66" r="14" fill="#fff" fillOpacity="0.5" stroke="#3b82f6" strokeWidth="5" />
    <path d="M74 76l10 10" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
  </Squircle>
);

export const TerminalIcon = ({ size = 52 }) => (
  <Squircle id="ic-term" a="#4a4a4d" b="#0b0b0c" size={size}>
    <rect x="12" y="16" width="76" height="68" rx="8" fill="#0b0b0c" stroke="#8a8a8e" strokeWidth="2" />
    <path d="M24 38l12 9-12 9" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M44 60h18" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
  </Squircle>
);

export const SettingsIcon = ({ size = 52 }) => (
  <Squircle id="ic-set" a="#d6d6db" b="#7a7a80" size={size}>
    <g transform="translate(50 50)" fill="#4a4a50">
      {[0, 45, 90, 135].map((r) => (
        <rect key={r} x="-6" y="-34" width="12" height="68" rx="3" transform={`rotate(${r})`} />
      ))}
      <circle r="25" />
      <circle r="11" fill="#d0d0d5" />
    </g>
  </Squircle>
);

export const SkillsIcon = ({ size = 52 }) => (
  <Squircle id="ic-skill" a="#58b9ff" b="#1450e0" size={size}>
    <g transform="rotate(-40 50 50)">
      <rect x="45" y="30" width="10" height="52" rx="4" fill="#fff" />
      <rect x="28" y="20" width="44" height="18" rx="5" fill="#fff" />
    </g>
  </Squircle>
);

export const TrashIcon = ({ size = 52 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: "block" }}>
    <defs>
      <linearGradient id="ic-trash" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#fff" stopOpacity="0.75" />
        <stop offset="1" stopColor="#dfe4ec" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <ellipse cx="50" cy="22" rx="28" ry="7" fill="#fff" fillOpacity="0.55" stroke="#fff" strokeOpacity="0.7" />
    <path d="M22 22l6 66a8 8 0 0 0 8 7h28a8 8 0 0 0 8-7l6-66c-8 6-48 6-56 0Z" fill="url(#ic-trash)" stroke="#fff" strokeOpacity="0.95" strokeWidth="2" />
    <g stroke="#fff" strokeOpacity="0.9" strokeWidth="2.5" strokeLinecap="round">
      <path d="M36 36l2 50M50 38v50M64 36l-2 50" />
    </g>
  </svg>
);

export const FolderIcon = ({ size = 64 }) => (
  <svg width={size} height={size * 0.82} viewBox="0 0 64 52" fill="none" style={{ display: "block" }}>
    <defs>
      <linearGradient id="ic-fold-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#58b4f5" /><stop offset="1" stopColor="#2b8de3" /></linearGradient>
      <linearGradient id="ic-fold-f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8fd3ff" /><stop offset="1" stopColor="#4aa9f2" /></linearGradient>
    </defs>
    <path d="M2 8a6 6 0 0 1 6-6h14l6 6h28a6 6 0 0 1 6 6v30a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8Z" fill="url(#ic-fold-b)" />
    <path d="M2 17a6 6 0 0 1 6-6h48a6 6 0 0 1 6 6v27a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V17Z" fill="url(#ic-fold-f)" />
    <path d="M2 17a6 6 0 0 1 6-6h48a6 6 0 0 1 6 6v1H2Z" fill="#fff" fillOpacity="0.35" />
  </svg>
);

export const DocIcon = ({ size = 64, label = "PDF", color = "#e5342b", lines = false }) => (
  <svg width={size * 0.78} height={size} viewBox="0 0 60 76" style={{ display: "block", filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.3))" }}>
    <path d="M4 6a4 4 0 0 1 4-4h31l17 17v51a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" fill="#fff" stroke="#d3d3d8" />
    <path d="M39 2v13a4 4 0 0 0 4 4h13Z" fill="#e4e4e8" stroke="#d3d3d8" />
    {lines ? (
      <g stroke="#c4c4c9" strokeWidth="2.5" strokeLinecap="round"><path d="M14 34h32M14 43h32M14 52h32M14 61h20" /></g>
    ) : null}
    <rect x="10" y="46" width="40" height="16" rx="3" fill={color} />
    <text x="30" y="58" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="-apple-system, Helvetica, Arial">{label}</text>
  </svg>
);

/* ---------- Extra dock icons ---------- */
const wedge = (a0, a1, r = 34) => {
  const p = (a) => [50 + r * Math.cos((a * Math.PI) / 180), 50 + r * Math.sin((a * Math.PI) / 180)];
  const [x0, y0] = p(a0), [x1, y1] = p(a1);
  return `M50 50L${x0} ${y0}A${r} ${r} 0 0 1 ${x1} ${y1}Z`;
};

export const LaunchpadIcon = ({ size = 52 }) => {
  const cols = ["#ff5f57", "#febc2e", "#28c840", "#0a84ff", "#bf5af2", "#ff9f0a", "#5ac8fa", "#ff375f", "#30d158"];
  return (
    <Squircle id="ic-lp" a="#f2f2f5" b="#c9c9ce" size={size}>
      {cols.map((c, i) => (
        <rect key={i} x={20 + (i % 3) * 22} y={20 + Math.floor(i / 3) * 22} width="16" height="16" rx="4" fill={c} />
      ))}
    </Squircle>
  );
};

export const SafariIcon = ({ size = 52 }) => (
  <Squircle id="ic-saf" a="#ffffff" b="#dfe9f7" size={size}>
    <circle cx="50" cy="50" r="34" fill="#1b8cff" />
    <circle cx="50" cy="50" r="30" fill="#7fc4ff" />
    <path d="M50 50l-8-20 20 8Z" fill="#ff453a" transform="rotate(45 50 50)" />
    <path d="M50 50l8 20-20-8Z" fill="#fff" transform="rotate(45 50 50)" />
  </Squircle>
);

export const WhatsAppIcon = ({ size = 52 }) => (
  <Squircle id="ic-wa" a="#5af27a" b="#12b44a" size={size}>
    <path d="M50 20a30 30 0 0 0-26 45l-4 15 15-4A30 30 0 1 0 50 20Z" fill="none" stroke="#fff" strokeWidth="6" strokeLinejoin="round" />
    <path d="M40 38c-2 6 2 14 10 20s14 8 17 4l-5-5-5 2c-3-1-8-6-9-9l2-5-5-6Z" fill="#fff" />
  </Squircle>
);

export const ChromeIcon = ({ size = 52 }) => (
  <Squircle id="ic-chr" a="#ffffff" b="#e9e9ee" size={size}>
    <path d={wedge(210, 330)} fill="#ea4335" />
    <path d={wedge(90, 210)} fill="#34a853" />
    <path d={wedge(330, 450)} fill="#fbbc04" />
    <circle cx="50" cy="50" r="15" fill="#fff" />
    <circle cx="50" cy="50" r="11" fill="#4285f4" />
  </Squircle>
);

export const HexIcon = ({ size = 52 }) => (
  <Squircle id="ic-hex" a="#ffffff" b="#ececf0" size={size}>
    <g fill="#111">
      <circle cx="38" cy="36" r="9" /><circle cx="62" cy="36" r="9" /><circle cx="50" cy="58" r="9" />
      <circle cx="30" cy="62" r="9" /><circle cx="70" cy="62" r="9" />
      <rect x="30" y="30" width="40" height="38" rx="14" opacity="0.9" />
    </g>
    <circle cx="50" cy="50" r="8" fill="#fff" />
  </Squircle>
);

export const MataIcon = ({ size = 52 }) => (
  <Squircle id="ic-mata" a="#2a2a30" b="#050507" size={size}>
    <path d="M22 72V30l14 0 14 22 14-22h14v42h-12V48L50 70 34 48v24Z" fill="#43d3ff" />
  </Squircle>
);

export const CurveIcon = ({ size = 52 }) => (
  <Squircle id="ic-curve" a="#2b2b30" b="#050507" size={size}>
    <path d="M18 72c14 0 16-44 32-44s14 40 34 40" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
    <path d="M16 56h68" stroke="#fff" strokeOpacity="0.5" strokeWidth="3" />
  </Squircle>
);

export const PanelsIcon = ({ size = 52 }) => (
  <Squircle id="ic-pan" a="#b9c7d6" b="#7b8da3" size={size}>
    <rect x="24" y="30" width="38" height="42" rx="6" fill="#1b1b20" />
    <rect x="38" y="24" width="38" height="42" rx="6" fill="#fff" fillOpacity="0.85" />
  </Squircle>
);

export const CloudIcon = ({ size = 52 }) => (
  <Squircle id="ic-cloud" a="#222a4a" b="#0a0e24" size={size}>
    <path d="M32 68a14 14 0 0 1 0-28 18 18 0 0 1 34-4 14 14 0 0 1 2 32Z" fill="none" stroke="#fff" strokeWidth="4" strokeLinejoin="round" />
    <circle cx="42" cy="54" r="2.5" fill="#fff" /><circle cx="58" cy="54" r="2.5" fill="#fff" />
    <path d="M44 62c4 3 8 3 12 0" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
  </Squircle>
);

export const DockerIcon = ({ size = 52 }) => (
  <Squircle id="ic-dock" a="#4cb8ff" b="#1572e8" size={size}>
    <g fill="#fff">
      {[0, 1, 2].map((i) => <rect key={i} x={26 + i * 14} y="40" width="11" height="9" rx="1.5" />)}
      {[1, 2].map((i) => <rect key={i} x={26 + i * 14} y="30" width="11" height="9" rx="1.5" />)}
      <path d="M16 52h70c-2 12-14 20-30 20-18 0-34-8-40-20Z" />
    </g>
  </Squircle>
);

export const ObsidianIcon = ({ size = 52 }) => (
  <Squircle id="ic-obs" a="#3a3a46" b="#14141a" size={size}>
    <path d="M52 16 32 40 26 66l22 18 28-14 4-26Z" fill="#8b6cf0" />
    <path d="M52 16 48 84 26 66 32 40Z" fill="#6a4fd6" />
    <path d="M52 16 76 44 80 70" fill="none" stroke="#c9b8ff" strokeOpacity="0.6" strokeWidth="2" />
  </Squircle>
);

export const SparkIcon = ({ size = 52 }) => (
  <Squircle id="ic-spark" a="#f79267" b="#d9582f" size={size}>
    <g stroke="#fff" strokeWidth="5" strokeLinecap="round">
      {[0, 30, 60, 90, 120, 150].map((r) => (
        <path key={r} d="M50 20v60" transform={`rotate(${r} 50 50)`} />
      ))}
    </g>
  </Squircle>
);

export const WarpIcon = ({ size = 52 }) => (
  <Squircle id="ic-warp" a="#ffffff" b="#e8ebf6" size={size}>
    <rect x="18" y="24" width="64" height="52" rx="14" fill="#7a8cff" />
    <path d="M30 42l10 8-10 8" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M48 60h16" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
  </Squircle>
);

export const MampIcon = ({ size = 52 }) => (
  <Squircle id="ic-mamp" a="#a3a3a8" b="#4c4c52" size={size}>
    <ellipse cx="46" cy="42" rx="24" ry="20" fill="#f2f2f4" />
    <path d="M26 40c-8 0-8 16 0 16Z" fill="#f2f2f4" />
    <path d="M62 52c10 2 10 22 2 28" stroke="#f2f2f4" strokeWidth="9" strokeLinecap="round" fill="none" />
    <rect x="28" y="54" width="10" height="28" rx="4" fill="#f2f2f4" /><rect x="50" y="54" width="10" height="28" rx="4" fill="#f2f2f4" />
    <circle cx="40" cy="38" r="2.5" fill="#333" />
  </Squircle>
);

export const KeysIcon = ({ size = 52 }) => (
  <Squircle id="ic-keys" a="#3a3a3e" b="#161618" size={size}>
    {[["#ffd60a", 28], ["#30d158", 50], ["#0a84ff", 72]].map(([c, x]) => (
      <g key={x}><circle cx={x} cy="34" r="9" fill={c} /><rect x={x - 3} y="40" width="6" height="34" rx="2" fill={c} /></g>
    ))}
  </Squircle>
);

export const DataGripIcon = ({ size = 52 }) => (
  <Squircle id="ic-dg" a="#21d789" b="#8a3ffc" size={size}>
    <rect x="22" y="22" width="56" height="56" fill="#000" />
    <text x="28" y="54" fontSize="24" fontWeight="800" fill="#fff" fontFamily="-apple-system, Helvetica, Arial">DG</text>
    <rect x="28" y="62" width="24" height="4" fill="#fff" />
  </Squircle>
);

export const PostmanIcon = ({ size = 52 }) => (
  <Squircle id="ic-post" a="#ff8a4c" b="#ee5a1c" size={size}>
    <circle cx="50" cy="50" r="26" fill="#fff" />
    <path d="M38 62l22-24" stroke="#ee5a1c" strokeWidth="7" strokeLinecap="round" />
    <circle cx="64" cy="36" r="6" fill="#ee5a1c" />
  </Squircle>
);

export const FileZillaIcon = ({ size = 52 }) => (
  <Squircle id="ic-fz" a="#c9322b" b="#8c1710" size={size}>
    <rect x="10" y="14" width="80" height="72" rx="6" fill="#fff" fillOpacity="0.1" stroke="#fff" strokeOpacity="0.6" />
    <text x="50" y="66" textAnchor="middle" fontSize="44" fontWeight="900" fill="#fff" fontFamily="-apple-system, Helvetica, Arial" fontStyle="italic">FZ</text>
  </Squircle>
);

export const SpotifyIcon = ({ size = 52 }) => (
  <Squircle id="ic-spot" a="#222" b="#000" size={size}>
    <circle cx="50" cy="50" r="32" fill="#1ed760" />
    <g fill="none" stroke="#000" strokeLinecap="round">
      <path d="M30 40c14-5 28-3 40 4" strokeWidth="6" />
      <path d="M32 52c11-4 23-2 33 4" strokeWidth="5" />
      <path d="M34 63c9-3 18-1 26 3" strokeWidth="4" />
    </g>
  </Squircle>
);

export const RemoteIcon = ({ size = 52 }) => (
  <Squircle id="ic-rem" a="#7fa2ff" b="#3a62e6" size={size}>
    <rect x="30" y="16" width="40" height="68" rx="9" fill="#fff" fillOpacity="0.9" />
    <g fill="#3a62e6" fillOpacity="0.7">
      {[0, 1, 2].map((r) => [0, 1].map((c) => <rect key={`${r}${c}`} x={37 + c * 14} y={30 + r * 12} width="10" height="8" rx="2" />))}
    </g>
  </Squircle>
);
