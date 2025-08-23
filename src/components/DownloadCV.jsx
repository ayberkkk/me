"use client";
import { useTranslation } from "react-i18next";
import { AiOutlineDownload } from "react-icons/ai";

const Download = ({ showAsFixed = true }) => {
  const { t, i18n } = useTranslation();

  const downloadCV = () => {
    const cvFileName = i18n.language === "tr" ? "Aybek-Tigli-TR.pdf" : "Aybek-Tigli-EN.pdf";
    const cvFilePath = `/${cvFileName}`;
    const a = document.createElement("a");
    a.href = cvFilePath;
    a.download = cvFileName;
    a.click();
  };

  if (!showAsFixed) {
    return (
      <button
        className="btn-primary flex items-center gap-2"
        onClick={downloadCV}
      >
        <AiOutlineDownload className="text-lg" />
        <span>{t("cv")}</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        className="btn-primary flex items-center gap-2 shadow-lg hover:shadow-xl"
        onClick={downloadCV}
      >
        <AiOutlineDownload className="text-lg" />
        <span>{t("cv")} ({i18n.language.toUpperCase()})</span>
      </button>
    </div>
  );
};

export default Download;
