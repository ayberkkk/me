import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  
  const contactLinks = [
    {
      icon: <AiFillGithub className="text-2xl" />,
      label: "GitHub",
      value: "ayberkkk",
      href: "https://github.com/ayberkkk",
    },
    {
      icon: <AiFillLinkedin className="text-2xl" />,
      label: "LinkedIn",
      value: "ayberk-tigli",
      href: "https://www.linkedin.com/in/ayberk-tigli/",
    },
    {
      icon: <AiOutlineMail className="text-2xl" />,
      label: "Email",
      value: "ayberktiglii@gmail.com",
      href: "mailto:ayberktiglii@gmail.com",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t("contactMe")}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {t("letsConnect")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="contact-link group"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {link.icon}
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {link.label}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {link.value}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contact;
