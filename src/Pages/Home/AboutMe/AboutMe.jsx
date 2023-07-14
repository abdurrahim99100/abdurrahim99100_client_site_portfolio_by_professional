import { FaDownload } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div id="about">
            <div className="h-auto lg:h-[100vh] px-5 lg:container lg:mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col items-center font-semibold text-4xl mb-2">
                    <h3>About Me</h3>
                    <progress className="progress bg-[#15E0B7] w-52 h-[5px]"></progress>
                </div>
                <div className="mt-5 flex-none lg:flex lg:justify-center lg:gap-5">
                    <div className="w-auto lg:w-4/12">
                        <p className="text-2xl font-light text-zinc-400">Abdur Rahim is a skilled MERN stack web developer with expertise in ReactJS, Typescript, MongoDB, ExpressJS, NodeJS, and various other technologies related to JavaScript and Typescript. With a passion for crafting dynamic and interactive web applications, Rahim brings creativity and proficiency to every project. With a keen eye for detail and a strong problem-solving mindset, Rahim is committed to delivering high-quality, efficient, and user-friendly solutions. From front-end development to back-end implementation, Rahim possesses the comprehensive skills necessary to build robust and scalable web applications.</p>
                    </div>
                    <div className="text-2xl font-light mt-5 lg:mt-0">
                        <h3 className="text-[#15E0B7] text-3xl font-semibold uppercase">I am web developer</h3>
                        <ul className="list-inside list-disc leading-10">
                            <li>Name: Abdur Rahim</li>
                            <li>Nick Name: (Mithu)</li>
                            <li>Gender: Mail</li>
                            <li>Age: 23</li>
                            <li>Nationality: Bangladesh</li>
                            <li>Address: Nazirpur, pirojpur, Bangladesh</li>
                        </ul>
                        <a className="w-[290px] p-0 mt-5 text-xl rounded flex items-center gap-2 text-[#15E0B7] border-2 border-[#15E0B7] uppercase btn bg-[#18172b]" download><span>downloads resume</span> <FaDownload /> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;