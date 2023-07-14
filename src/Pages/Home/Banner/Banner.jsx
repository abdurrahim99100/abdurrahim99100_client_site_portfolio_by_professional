import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare, FaFacebookSquare, FaRavelry } from 'react-icons/fa';
import { Link } from "react-router-dom";



const Banner = () => {
    return (
        <div className="h-[100vh] flex items-center" id="#">
            <div className="flex gap-20 items-end p-10 max-w-screen-2xl mx-auto pt-36">
            <div>
                <h3 className='text-5xl text-[#15E0B7] font-semibold'>Hi, <br /> I am Abdur Rahim</h3>
                <div className='flex gap-2 items-center'>
                    <h3 className='text-4xl font-semibold text-[#F67280]'> AS A</h3>
                    <TypeAnimation
                        className='text-5xl font-semibold text-[#15E0B7]'
                        sequence={[
                            'WEB DEVELOPER!',
                            500,
                            'REACT DEVELOPER!',
                            900,
                            'MAN STACK WEB DEVELOPER!',
                            900,
                            'CONTENT CREATOR!',
                            900,
                            'FONT END WEB DEVELOPER!',
                            900,
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                </div>
                <div className="">
                    <p className='w-10/12 font-light text-xl inline'>I am a MERN Stack web developer. <br />Web Design & Development is my passion, I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
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
            <div className="">
                <img className="w-[1000px]" src="https://i.ibb.co/pw13101/young-bearded-man-with-striped-shirt-removebg-preview-2.png" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;