import { TypeAnimation } from "react-type-animation";
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaRavelry,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
// aos style import;
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
// lottie animation
import Lottie from "lottie-react";
import animationData from "../../../assets/animation-lottie/banner-lottie.json";

// TODO
// TEXT PRIMARY COLOR [text-black],  SECONDARY COLOR [text-blue-400]

const Banner = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      id="#"
    >
      <div className="container mx-auto pt-24 px-5 sm:px-0 lg:pt-36 flex flex-col items-center md:justify-between sm:flex-row-reverse sm:gap-10">
        <div className="w-full md:w-[50%]">
          <Lottie animationData={animationData} loop={true} autoPlay={true} />
        </div>
        <div className="w-auto sm:w-8/12">
          <h3 className="text-xl lg:text-5xl text-[#564E4C] font-bold">
            Hi, <br /> I am Abdur Rahim
          </h3>
          <div className="flex gap-2 items-center">
            <span className="text-blue-400 text-xl font-bold lg:text-4xl">
              AS A
            </span>
            <TypeAnimation
              className="font-bold text-[#564E4C] text-xl lg:text-4xl"
              sequence={[
                "WEB DEVELOPER!",
                500,
                "REACT DEVELOPER!",
                500,
                "MAN STACK WEB DEVELOPER!",
                500,
                "CONTENT CREATOR!",
                500,
                "FONT END WEB DEVELOPER!",
                500,
              ]}
              speed={10}
              repeat={Infinity}
            />
          </div>
          <div className="">
            <p className="font-light text-xl">
              I am MERN Stack web developer. <br />
              Web Design & Development is my passion, I can provide clean code
              and pixel perfect design. I also make website more & more
              interactive with web animations.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-55"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
              </span>
              <p className="text-[#564E4C] text-xl font-semibold">Contact me</p>
              <div className="flex justify-center items-center w-5 h-5 rounded-full ring ring-blue-400 ring-offset-2">
                <Link className="text-blue-400">
                  <FaRavelry />
                </Link>
              </div>
            </div>
            <div className="flex gap-4 text-[27px] my-2">
              <Link to="https://www.linkedin.com/in/abdurrahim99100/">
                <FaLinkedin />
              </Link>
              <Link to="https://github.com/abdurrahim99100">
                <FaGithubSquare />
              </Link>
              <Link to="">
                <FaTwitterSquare />
              </Link>
              <Link to="https://www.facebook.com/abdurrahimm99100">
                <FaFacebookSquare />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Marquee */}
      <div>
        <Marquee>
          <div className="flex gap-8 my-4">
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/bBCmxYS/html-5-1.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/kSmRbpy/css.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/ss6wbTz/icons8-javascript-480.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/0G071Bp/icons8-express-js-500.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/VQX7ZxF/4691413-netlify-icon.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/rb6k99Z/vercel-brand-icon-211876.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/WGLcfsv/firebase.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/FzwKk11/github.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/xH0WHKR/figma.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/kM2YzRW/daisy-ui.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/MGr3ty7/bootstrap-1.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/KVrQd1m/physics.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/j6gS06K/tailwind-css.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/X8pzydm/node-js-1.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/0s1F6wN/mongodb.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/2ZRZLS5/icons8-npm-480.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/cD2px50/development.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/SRQF3sn/icons8-rest-api-100.png"
                alt=""
              />
            </div>
            <div className="border-2 border-[#46434238] rounded p-2 shadow-lg shadow-black-500/50 mr-7">
              <img
                className="w-[60px] bg-[#ffffff] h-[60px] rounded"
                src="https://i.ibb.co/b2yKGC1/icons8-jwt-480.png"
                alt=""
              />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Banner;
