import "animate.css";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:p-40 sm:p-10 sm:mt-10">
        <div className="col-span-1 md:col-span-1 hidden lg:block animate__animated animate__fadeInLeft">
          <Image
            className="object-cover profile-img"
            src="/ayberk-tigli.jpg"
            title="Ayberk Tigli"
            alt="Ayberk Tigli"
            width={300}
            height={300}
          />
        </div>
        <div className="col-span-1 md:col-span-1p-4 md:p-10 animate__animated animate__fadeInRight">
          <div className="flex items-center mb-5 p-3">
            <h1 className="text-3xl mr-4">Ayberk Tığlı</h1>
            <div className="space-animate">🚀</div>
          </div>
          <div className="desc-box relative">
            <div className="p-5">
              <p className="text-base">
              <h1>{t('aboutMe')}</h1>
              </p>
            </div>
            <span class="absolute rounded-lg top"></span>
            <span class="absolute rounded-lg float-right right"></span>
            <span class="absolute rounded-lg bottom"></span>
            <span class="absolute rounded-lg float-left left"></span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link href="#skills">
          <Image
            className="bouncing-mouse"
            src="/mouse.svg"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </>
  );
};

export default About;
