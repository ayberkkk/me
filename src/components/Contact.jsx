import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto g:p-40 p-10">
      <h2 className="text-4xl text-center">Contact Me !</h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <Link
            href="https://github.com/ayberkkk"
            className="flex items-center content-center transition-all ease-in duration-100 hover:text-green-500"
          >
            <AiFillGithub />
            <span className="ml-2 font-thin text-lg">ayberkkk</span>
          </Link>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <Link
            href="https://www.linkedin.com/in/ayberk-tigli/"
            className="flex items-center content-center transition-all ease-in duration-100 hover:text-green-500"
          >
            <AiFillLinkedin />
            <span className="ml-2 font-thin text-lg">ayberk-tigli</span>
          </Link>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <Link
            href="mailto:ayberktiglii@gmail.com"
            className="flex items-center content-center transition-all ease-in duration-100 hover:text-green-500"
          >
            <AiOutlineMail />
            <span className="ml-2 font-thin text-lg">ayberktiglii@gmail.com</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
