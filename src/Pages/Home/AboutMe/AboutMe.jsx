import { FaDownload } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div className="h-[100vh] flex items-center justify-center pt-24" id="about">
            <div className="mt-10 max-w-screen-2xl mx-auto my-80">
                <div className="flex flex-col items-center font-semibold text-4xl">
                    <h3>About Me</h3>
                    <progress className="progress bg-[#15E0B7] w-52 h-[5px]"></progress>
                </div>
                <div className="flex flex-col md:flex-row gap-10 w-9/12 mx-auto mt-12">
                    <div data-aos="fade-right" className="w-[650px]">
                        <p className="text-2xl font-light text-zinc-400">Abdur Rahim is a skilled MERN stack web developer with expertise in ReactJS, Typescript, MongoDB, ExpressJS, NodeJS, and various other technologies related to JavaScript and Typescript. With a passion for crafting dynamic and interactive web applications, Rahim brings creativity and proficiency to every project. With a keen eye for detail and a strong problem-solving mindset, Rahim is committed to delivering high-quality, efficient, and user-friendly solutions. From front-end development to back-end implementation, Rahim possesses the comprehensive skills necessary to build robust and scalable web applications.</p>
                    </div>
                    <div data-aos="fade-left" className="text-2xl font-light">
                        <h3 className="text-[#15E0B7] text-3xl font-semibold">I am web developer</h3>
                        <ul className="flex flex-col gap-4 list-inside list-disc">
                            <li>Name: Abdur Rahim</li>
                            <li>Nick Name: (Mithu)</li>
                            <li>Age: 23</li>
                            <li>Nationality: Bangladesh</li>
                            <li>Address: Nazirpur, pirojpur, Bangladesh</li>
                        </ul>
                        <a className="btn btn-outline btn-success text-2xl font-bold uppercase border-2  my-5 border-[#15E0B7] rounded px-3 py-1" href="resume-of-abdurrahim.pdf" download>downloads resume <FaDownload /> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;