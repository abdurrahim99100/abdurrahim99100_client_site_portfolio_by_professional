import { Link } from "react-router-dom";
import './navBar.css';

const NavBar = () => {
    const user = null;

    const navItems =
        <>
            <li className="visited-link">
                <a className="" href="#">home</a>
            </li>
            <li className="visited-link">
                <a href="#about">about</a>
            </li>
            <li className="visited-link">
                <a href="#skill">skill</a>
            </li>
            <li className="visited-link">
                <a href="#services">services</a>
            </li>
            <li className="visited-link">
                <a href="#project">project</a>
            </li>
            <li className="visited-link">
                <a href="#contact">contact</a>
            </li>
            <li className="visited-link">
                <Link to='blog'>blog</Link>
            </li>
            {
                user ?
                    <>
                        <li className="visited-link">
                            <a href="#logout">Logout</a>
                        </li>
                    </> :
                    <>
                        <li className="visited-link">
                            <a href="#login">login</a>
                        </li>
                    </>
            }
        </>

    return (
        <div className="bg-[#23223b] navbar fixed justify-between text-white px-10">
            <div className="navbar-start w-full">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black uppercase rounded-box w-52 -ml-5">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <div>
                    <Link to='/' className="flex items-center gap-2">
                        <img className="w-[30px] h-[30px] rounded-full" src="https://i.ibb.co/b5yCbcB/IMG20231016110251.jpg" alt="" />
                        <span className="text-xl font-semibold">Abdur Rahm</span>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex justify-between uppercase font-semibold">
                    {
                        navItems
                    }
                </ul>
            </div>
        </div>
    );
};

export default NavBar;