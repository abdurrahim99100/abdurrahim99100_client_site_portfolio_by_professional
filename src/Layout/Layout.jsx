import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import AboutMe from "../Pages/Home/AboutMe/AboutMe";
import Banner from "../Pages/Home/Banner/Banner";
import Skills from "../Pages/Home/Skills/Skills";
import Project from "../Pages/Home/Project/Project";
import Contact from "../Pages/Home/Contact/Contact";


const Layout = () => {
    return (
        <div className="text-white bg-[#18172b]">
            <NavBar></NavBar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Project></Project>
            {/* <Contact></Contact> */}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Layout;