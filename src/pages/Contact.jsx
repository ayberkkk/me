import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div id="contact" className="container mx-auto g:p-40 p-10">
      <h2 className="text-4xl text-center">{t("contactMe")}</h2>
      <div className="lg:flex items-center justify-center py-10 gap-20">
        <Link
          href="https://github.com/ayberkkk"
          className="flex items-center content-center transition-all ease-in duration-100 hover:text-green-500"
        >
          <AiFillGithub />
          <span className="ml-2 font-thin text-lg">ayberkkk</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/ayberk-tigli/"
          className="flex items-center content-center transition-all ease-in duration-100 hover:text-green-500"
        >
          <AiFillLinkedin />
          <span className="ml-2 font-thin text-lg">ayberk-tigli</span>
        </Link>
        <Link
          href="mailto:ayberktiglii@gmail.com"
          className="flex items-center content-center transition-all ease-in duration-100 hover:text-green-500"
        >
          <AiOutlineMail />
          <span className="ml-2 font-thin text-lg">ayberktiglii@gmail.com</span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
