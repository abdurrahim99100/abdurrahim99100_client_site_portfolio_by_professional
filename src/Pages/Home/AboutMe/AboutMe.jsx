import { FaDownload } from "react-icons/fa";
// aos style import;
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

// TODO
// TEXT PRIMARY COLOR [text-black],  SECONDARY COLOR [text-blue-400]

const AboutMe = () => {
  return (
    <div id="about" className="container mx-auto px-5 sm:px-0 pt-10 sm:pt-[150px]">
      <div
        data-aos="zoom-in"
        data-aos-duration="1900"
        className="text-center font-bold uppercase text-4xl mb-5 sm:mb-10"
      >
        <h3>About Me</h3>
      </div>
      <div className="sm:flex justify-between gap-10">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1800"
          className="w-full sm:w-6/12 h-[360px] space-x-8 overflow-y-scroll scrollbar"
        >
          <p className="text-2xl font-light">
            Abdur Rahim is a skilled MERN stack web developer with expertise in
            ReactJS, Typescript, MongoDB, ExpressJS, NodeJS, and various other
            technologies related to JavaScript and Typescript. With a passion
            for crafting dynamic and interactive web applications, Rahim brings
            creativity and proficiency to every project. With a keen eye for
            detail and a strong problem-solving mindset, Rahim is committed to
            delivering high-quality, efficient, and user-friendly solutions.
            From front-end development to back-end implementation, Rahim
            possesses the comprehensive skills necessary to build robust and
            scalable web applications.
          </p>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1800"
          className="text-2xl font-light mt-5 lg:mt-0"
        >
          <h3 className="text-[#564E4C] text-3xl font-semibold uppercase">
            I am web developer
          </h3>
          <ul className="list-inside list-disc leading-10">
            <li>Name: Abdur Rahim</li>
            <li>Nick Name: (Mithu)</li>
            <li>Gender: Mail</li>
            <li>Age: 24</li>
            <li>Nationality: Bangladesh</li>
            <li>Address: Nazirpur, pirojpur, Bangladesh</li>
          </ul>
          <a
            className="w-[290px] p-0 mt-5 text-xl rounded flex items-center gap-2 text-white border-2 uppercase btn bg-blue-400"
            href="abdur-rahim-resume.pdf"
            download
          >
            <span>downloads resume</span> <FaDownload />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
