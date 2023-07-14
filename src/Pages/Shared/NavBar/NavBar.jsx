
const NavBar = () => {
    const user = null;

    const navItems =
        <>
            <li>
                <a href="#">home</a>
            </li>
            <li>
                <a href="#about">about</a>
            </li>
            <li>
                <a href="#skill">skill</a>
            </li>
            <li>
                <a href="#blog">blog</a>
            </li>
            <li>
                <a href="#services">services</a>
            </li>
            <li>
                <a href="#project">project</a>
            </li>
            <li>
                <a href="#contact">contact</a>
            </li>
            {
                user ?
                    <>
                        <li>
                            <a href="#logout">login</a>
                        </li>
                    </> :
                    <>
                        <li>
                            <a href="#login">login</a>
                        </li>
                    </>
            }
        </>

    return (
        <div className="bg-[#23223b] navbar fixed justify-between text-white px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <div>
                    <img src="" alt="" />
                    <a className="text-xl font-semibold" href="#">Abdur Rahim</a>
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