import { FaDownload } from "react-icons/fa";
import aboutImage from '../../../assets/about-photo.png';
// AOS style import
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const AboutMe = () => {
  return (
    <div id="about" className="container mx-auto px-5 sm:px-0 pt-10 sm:pt-[150px]">
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="text-center font-bold uppercase text-4xl mb-5 sm:mb-10"
      >
        <h3 className="text-gray-900">About Me</h3>
      </div>
      <div className="flex flex-col items-center md:flex-row">
        {/* image dev */}
        <div className="w-full h-auto md:w-6/12 overflow-hidden">
          <img src={aboutImage} alt="" className="w-full h-auto block" />
        </div>

        {/* Text div */}
        <div
          className="w-full md:w-6/12 flex flex-col justify-end"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <p className="text-lg text-gray-700 leading-relaxed">

            Abdur Rahim is a skilled MERN stack web developer with expertise in ReactJS, TypeScript, MongoDB, ExpressJS, and NodeJS. He is passionate about building dynamic, scalable web applications and excels in both front-end and back-end development. Rahim is committed to delivering high-quality, efficient solutions with a strong focus on user experience and technical excellence.
          </p>


          <pre className="bg-gray-100 p-4 rounded-md text-[12px] md:text-[14px] lg:text-[18px] font-mono">
            <code>
              {`
  function details() {

  const Full_Name = 'Abdur Rahim';
  let Occupation = 'Front-end Developer';
  const Email = 'abdurrahim99100@gmail.com';
  const Contact_Number = '+88 01857-400322'  
  
  }
             `}
            </code>
          </pre>
          <a
            className="w-full sm:w-[290px] p-3 mt-6 text-xl rounded-full flex items-center justify-center gap-3 text-white bg-blue-500 hover:bg-blue-600 transition duration-300"
            href="abdur-rahim-resume.pdf"
            download
          >
            <span>Download Resume</span> <FaDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
