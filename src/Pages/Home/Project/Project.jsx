import { useEffect, useState } from "react";
import "./project.css";
const Project = () => {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    fetch('project.json')
    .then(res => res.json())
    .then(data => setProject(data))
  }, []);

  console.log(projects);

  return (
    <div className=" sm:pt-[150px] px-5" id="project">
      <div
        data-aos="zoom-in"
        data-aos-duration="1800"
        className="uppercase text-center"
      >
        <h3 className="font-bold text-4xl">my Project</h3>
        <p className="font-medium text-blue-400">See, know and tell</p>
      </div>
      <div className="mt-[100px] sm:flex gap-5 justify-between">
        {}
      </div>
    </div>
  );
};

export default Project;
