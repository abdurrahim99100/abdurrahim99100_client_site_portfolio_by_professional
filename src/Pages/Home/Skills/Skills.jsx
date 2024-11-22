import { useState, useEffect } from "react";
import "./skills.css";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Fetch skills data
  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  // Calculate paginated data
  const paginatedData = skills.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Total pages for pagination
  const totalPages = Math.ceil(skills.length / itemsPerPage);

  return (
    <div className="px-5 sm:px-0 mt-14 lg:pt-[150px]" id="skill">
      <div className="container mx-auto flex flex-col">
        {/* Section Title */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1900"
          className="text-center font-bold uppercase text-4xl"
        >
          <h3>My Skills</h3>
        </div>

        <div className="flex flex-col gap-x-24 md:flex-row md:justify-between mt-3 sm:mt-10">
          {/* Skills Details Section */}
          <div className="text-[18px] w-full md:w-6/12">
            <span className="uppercase text-lg font-bold">Skills Details</span>
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
              solutions.
            </p>
          </div>

          {/* Skills Display Section */}
          <div className="flex flex-col justify-between w-full md:w-6/12">
            <div className="grid md:grid-cols-1 sm:gap-x-5 gap-y-3">
              {paginatedData.map((skill, index) => (
                <div
                  key={index}
                  className="skillContainer flex items-center gap-3"
                >
                  <img
                    className="skillImage w-[50px] h-[50px] rounded-full shadow-lg"
                    src={skill.picture}
                    alt={skill.name}
                  />
                  <p className="skillValue text-lg font-medium text-gray-700">
                    {skill.name} <span className="text-blue-500">{skill.value}%</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <ul className="flex justify-center gap-2 mt-5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 border rounded ${currentPage === page
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                      }`}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Marquee */}
      <Marquee className="mt-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="mr-[40px] lg:mr-[100px] flex flex-col items-center"
          >
            <img
              className="w-[55px] md:w-[85px] p-2 bg-[#5cadd928] border-2 border-[#88909727] rounded-full shadow-md"
              src={skill.picture}
              alt={skill.name}
            />
            <p className="text-[8px] md:text-sm text-center uppercase font-light sg:font-mono text-blue-400">
              {skill.name}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
