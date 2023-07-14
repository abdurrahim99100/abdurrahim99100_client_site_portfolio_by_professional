import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare, FaFacebookSquare, FaRavelry } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";



const Banner = () => {
    return (
        <div className="h-auto lg:h-[100vh]" id="#">
            <div className="h-auto lg:h-[65vh] pt-24 lg:pt-36 px-5 lg:container lg:mx-auto flex-none lg:flex lg:justify-between lg:items-end lg:flex-row-reverse">
                <div className="">
                    <img className="w-[350px] lg:w-[550px]" src="https://i.ibb.co/pw13101/young-bearded-man-with-striped-shirt-removebg-preview-2.png" alt="" />
                </div>
                <div className="w-auto lg:w-7/12">
                    <h3 className='text-xl lg:text-5xl text-[#15E0B7] font-semibold'>Hi, <br /> I am Abdur Rahim</h3>
                    <div className='flex gap-2 items-center'>
                        <span className='font-semibold text-[#F67280] text-sm lg:text-5xl'>AS A</span>
                        <TypeAnimation
                            className='font-semibold text-[#15E0B7] text-sm lg:text-5xl'
                            sequence={[
                                'WEB DEVELOPER!',
                                500,
                                'REACT DEVELOPER!',
                                500,
                                'MAN STACK WEB DEVELOPER!',
                                500,
                                'CONTENT CREATOR!',
                                500,
                                'FONT END WEB DEVELOPER!',
                                500,
                            ]}
                            speed={10}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="">
                        <p className='font-light text-xl'>I am MERN Stack web developer. <br />Web Design & Development is my passion, I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-4">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-55"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            </span>
                            <p className="text-[#15E0B7] text-xl font-semibold">Contact me</p>
                            <div className="flex justify-center items-center w-5 h-5 rounded-full ring ring-[#15E0B7] ring-offset-2">
                                <Link><FaRavelry /></Link>
                            </div>
                        </div>
                        <div className="flex gap-4 text-[27px] my-2">
                            <Link to='https://www.linkedin.com/in/abdurrahim99100/'><FaLinkedin /></Link>
                            <Link to='https://github.com/abdurrahim99100'><FaGithubSquare /></Link>
                            <Link to=''><FaTwitterSquare /></Link>
                            <Link to='https://www.facebook.com/abdurrahimm99100'><FaFacebookSquare /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Marquee>
                    <div className="flex gap-7 my-4">
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/bBCmxYS/html-5-1.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/kSmRbpy/css.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/ss6wbTz/icons8-javascript-480.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/0G071Bp/icons8-express-js-500.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/VQX7ZxF/4691413-netlify-icon.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/rb6k99Z/vercel-brand-icon-211876.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/WGLcfsv/firebase.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/FzwKk11/github.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/xH0WHKR/figma.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/kM2YzRW/daisy-ui.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/MGr3ty7/bootstrap-1.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/KVrQd1m/physics.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/j6gS06K/tailwind-css.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/X8pzydm/node-js-1.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/0s1F6wN/mongodb.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/2ZRZLS5/icons8-npm-480.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/cD2px50/development.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/SRQF3sn/icons8-rest-api-100.png" alt="" />
                        </div>
                        <div className="border-2 border-[#15E0B7] rounded p-2 mr-7">
                            <img className="w-[60px] bg-[#ffffff] h-[60px] rounded" src="https://i.ibb.co/b2yKGC1/icons8-jwt-480.png" alt="" />
                        </div>
                    </div>
                </Marquee>
            </div>
            
        </div>
    );
};

export default Banner;