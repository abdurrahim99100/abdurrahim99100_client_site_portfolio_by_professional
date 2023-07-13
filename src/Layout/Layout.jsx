import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import AboutMe from "../Pages/Home/AboutMe/AboutMe";
import Banner from "../Pages/Home/Banner/Banner";


const Layout = () => {
    return (
        <div className="text-white bg-[#18172b]">
            <NavBar></NavBar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Footer></Footer>
        </div>
    );
};

export default Layout;