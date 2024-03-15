import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  console.log(projects);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="pt-[150px] px-5" id="project">
      <div className="uppercase text-center">
        <h3 className="text-4xl font-bold">my project</h3>
        <span className="font-mono text-blue-400 text-lg">
          Watch, learn and comment
        </span>
      </div>
      <div className="sm:flex gap-5">
        <div className="sm:w-[50%]">
          <h3 className="text-center uppercase font-bold text-blue-400">
            my resent project
          </h3>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img src={project.picture} alt="" />
                  <div className="h-[200px] overflow-y-scroll scrollbar">
                    <div className="uppercase font-semibold my-2">
                      <span className="mr-1">code:</span>
                      <a
                        className="bg-gray-300 px-[7px] py-[5px] rounded mr-2"
                        href={project.live_link}
                      >
                        Live
                      </a>
                      <a
                        className="bg-gray-300 px-[7px] py-[5px] rounded mr-2"
                        href={project.client_side_code_link}
                      >
                        client
                      </a>
                      <a
                        className="bg-gray-300 px-[7px] py-[5px] rounded mr-2"
                        href={project.server_side_code_link}
                      >
                        server
                      </a>
                    </div>
                    <p className="text-left font-normal text-md">
                      <span className="text-blue-400">Description:</span>{" "}
                      {project.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" w-[50%] flex justify-center items-center">
          <h3 className="uppercase text-4xl mt-20">development mood</h3>
        </div>
      </div>
    </div>
  );
};

export default Project;
