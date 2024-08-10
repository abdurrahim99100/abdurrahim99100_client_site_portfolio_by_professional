import { useState, useEffect } from "react";
import "./skills.css";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const itemsPerPage = 10;
  let currentPage = 1;

  // FETCH DATA;
  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);


  useEffect(() => {
    renderPagination();
  }, [skills]); // Run the pagination logic whenever skills data changes

  // pagination code;
  const displayData = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = skills.slice(startIndex, endIndex);

    const dataContainer = document.getElementById("dataContainer");
    if (dataContainer) {
      dataContainer.innerHTML = ""; // Clear existing data

      paginatedData.forEach((item) => {
        const listItem = document.createElement("div");
        listItem.innerHTML = `
        <div class="skillContainer">
        <img class="skillImage" src=${item.picture} alt="" />
        <p class="skillValue">${item.name} ${item.value}%</p>
        </div>
        `;
        dataContainer.appendChild(listItem);
      });
    }
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(skills.length / itemsPerPage);
    const paginationContainer = document.getElementById("pagination");
    if (paginationContainer) {
      paginationContainer.innerHTML = ""; // Clear existing pagination

      for (let i = 1; i <= totalPages; i++) {
        const listItem = document.createElement("li");
        const link = document.createElement("button");
        link.href = "#";
        link.textContent = i;
        if (i === currentPage) {
          link.classList.add("active");
        }
        listItem.appendChild(link);
        paginationContainer.appendChild(listItem);

        link.addEventListener("click", () => {
          currentPage = i;
          displayData(currentPage);
          updateActiveLink();
        });

        displayData(currentPage);
      }

      const updateActiveLink = () => {
        const paginationLinks = document.querySelectorAll(
          ".pagination li button"
        );
        paginationLinks.forEach((link) => {
          link.classList.remove("active");
          if (parseInt(link.textContent) === currentPage) {
            link.classList.add("active");
          }
        });
      };
    }
  };

  return (
    <div className="px-5 sm:px-0 mt-14 lg:pt-[150px]" id="skill">
      <div className="container mx-auto flex flex-col">
        <div
          data-aos="zoom-in"
          data-aos-duration="1900"
          className="text-center font-bold uppercase text-4xl"
        >
          <h3>my skills</h3>
        </div>
        <div className="sm:flex sm:gap-x-5 justify-between mt-3 sm:mt-10">
          <div className="text-[18px] sm:w-[50%] h-[460px] overflow-y-scroll scrollbar">
            <span className="uppercase text-lg font-bold">skills details</span>
            <p>
              With proficiency in HTML, CSS, and JavaScript, as well as
              frameworks like React and Next.js, I bring a comprehensive skill
              set to web development projects. Leveraging Bootstrap and Tailwind
              for responsive designs, I ensure optimal user experiences across
              devices. My expertise extends to backend development using
              Node.js, Express.js, MongoDB, and Firebase for robust server-side
              operations and database management.
            </p>
            <br />
            <p>
              In the realm of design, I employ Figma for intuitive UI/UX
              creation, ensuring seamless interaction flows. With version
              control through GitHub, I maintain organized and collaborative
              development processes. My grasp of authentication mechanisms,
              including JWT, enhances security measures within applications.
            </p>
            <br />
            <p>
              Deploying applications seamlessly is a priority, utilizing
              platforms like Netlify for frontend hosting and Express.js for
              backend deployment. This holistic approach streamlines the
              development lifecycle, from conceptualization to deployment.
            </p>
            <br />
            <p>
              Overall, I bring a versatile skill set and a commitment to
              excellence in web development, combining frontend aesthetics with
              backend functionality to deliver dynamic and efficient digital
              solutions
            </p>
          </div>
          <div className="flex flex-col justify-between w-[100%] sm:w-[390px] lg:w-[478px]">
            <ul
              className="grid sm:grid-cols-2 sm:gap-x-10 gap-y-3 sm:gap-y-0 h-[85%] my-5"
              id="dataContainer"
            ></ul>
            {/* PAGINATION BUTTON */}
            <ul
              className="flex justify-center gap-2 paginationButton"
              id="pagination"
            ></ul>
          </div>
        </div>
      </div>
      {/* marquise */}
      <Marquee className="mt-10">
        {skills.map((skill, index) => (
          <div key={index} value={skill} className="mr-[40px] lg:mr-[100px] ">
            <img
              className="w-[55px] md:w-[85px] p-2 bg-[#5cadd928] border-2 border-[#88909727] rounded shadow-[0_10px_20px_rgba(135,_206,_235,_0.7)]"
              src={skill.picture}
              alt=""
            />
            <p className="text-[8px] md:text-sm text-center uppercase font-light sg:font-mono text-blue-400">{skill.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
