import './project.css';
const Project = () => {
    return (
        <div className='container mx-auto' id="project">
            <div className="lg:h-[100vh] flex flex-col justify-center items-center">
                <div data-aos="zoom-in"
                    data-aos-duration="1800"
                    className="flex flex-col gap-2 items-center font-semibold text-4xl">
                    <h3>Project</h3>
                    <progress className="progress bg-[#15E0B7] w-36 h-[5px]"></progress>
                </div>
                <div className='mt-5 flex-none lg:flex gap-5 justify-between'>
                    <div data-aos="zoom-in-down"
                        data-aos-duration="1800"
                        className='bg-[#23223b] p-5 rounded'>
                        <div className='w-[340px] border-2 border-[#72968f] p-2 rounded'>
                            <div className='box-container rounded flex justify-center'>
                                <span className='text-[#15E0B7] uppercase font-bold mt-6'>Please hover enjoy Live preview</span>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='flex gap-1 justify-start items-center'>
                                <span>Live Link : </span>
                                <a className='p-2 bg-gray-500 px-1 py-0 rounded' href="http://www.google.com">https://dance-club-bd.web.app</a>
                            </div>
                            <div className='flex justify-start items-center my-1'>
                                <span className='mr-2'>Code Link :</span>
                                <a className='mr-2 bg-[#15E0B7] px-2 rounded text-black' href="https://github.com/abdurrahim99100/creative_design_hub_client">Client Side</a>
                                <a className='bg-[#15E0B7] px-2 rounded text-black' href="https://github.com/abdurrahim99100/creative_design_hub_server">Server Side</a>
                            </div>
                            <p className='w-[340px] text-sm font-light'>Description : Welcome to visitor, This is an educations project. I Finish this project on 03/06/2023. The technology I used in my project HTML5, CSS, TailwindCSS, javascript, Node.Js, Express.Js, JWT, MongoDb. The features that are in my project, three types of users can enter here, 1 normal user, 2 instructors, 3 admins. Normal user can enroll in any class, instructor can post any class, admin can control the total issue.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-down"
                        data-aos-duration="1800"
                        className='bg-[#23223b] p-5 rounded'>
                        <div className='w-[340px] border-2 border-[#72968f] p-2 rounded'>
                            <div className='box-container2 rounded flex justify-center'>
                                <span className='text-[#15E0B7] uppercase font-bold mt-6'>Please hover enjoy Live preview</span>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='flex gap-1 justify-start items-center'>
                                <span>Live Link : </span>
                                <a className='p-2 bg-gray-500 px-1 py-0 rounded' href="https://toy-car-5ee84.web.app/">https://toy-car-5ee84.web.app</a>
                            </div>
                            <div className='flex justify-start items-center my-1'>
                                <span className='mr-2'>Code Link :</span>
                                <a className='mr-2 bg-[#15E0B7] px-2 rounded text-black' href="https://github.com/abdurrahim99100/toy_cars_client">Client Side</a>
                                <a className='bg-[#15E0B7] px-2 rounded text-black' href="https://github.com/abdurrahim99100/toy_cars_server">Server Side</a>
                            </div>
                            <p className='w-[340px] text-sm font-light'>Description : Hi, This is an Toy project. I Finish this project on 19/05/2023. The technology I used in my project HTML5, CSS, TailwindCSS, javascript, Node.Js, Express.Js, MongoDb. Here besides login logout a user can add a toy, delete it if he wants, edit it again.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-down"
                        data-aos-duration="1800"
                        className='bg-[#23223b] p-5 rounded'>
                        <div className='w-[340px] border-2 border-[#72968f] p-2 rounded'>
                            <div className='box-container3 rounded flex justify-center'>
                                <span className='text-[#15E0B7] uppercase font-bold mt-6'>Please hover enjoy Live preview</span>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='flex gap-1 justify-start items-center'>
                                <span>Live Link : </span>
                                <a className='p-2 bg-gray-500 px-1 py-0 rounded' href="https://classy-strudel-6b963e.netlify.app">https://classy-strudel.netlify</a>
                            </div>
                            <div className='flex justify-start items-center my-1'>
                                <span className='mr-2'>Code Link :</span>
                                <a className='mr-2 bg-[#15E0B7] px-2 rounded text-black' href="https://github.com/abdurrahim99100/career_hub">Client Side</a>
                                <a className='bg-[#15E0B7] px-2 rounded text-black' href="#">Server Side</a>
                            </div>
                            <p className='w-[340px] text-sm font-light'>Description : It is a job posting website, usually new jobs can be seen here daily. I finish this project on 11/06/2023 A user can apply to a job and cancel it. The technology I used in my project HTML5, CSS, TailwindCSS, javascript. Various categories of jobs are provided here, they are onsite, remote, full time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;