import { Link, Outlet } from "react-router-dom";
import '../Pages/Shared/NavBar/navBar.css';

const BlogLayout = () => {

    const navItems =
        <>
            <li className="visited-link">
                <Link to='/'>home</Link>
            </li>
        </>

    return (
        <div>
            <div className="uppercase bg-slate-700">
                <ul className="flex gap-2 justify-end py-4 text-white container mx-auto">
                    {navItems}
                </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default BlogLayout;