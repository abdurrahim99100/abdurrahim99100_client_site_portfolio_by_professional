import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutMe />
            <Skills />
            <Project />
            <Contact />
        </div>
    );
};

export default Home;