import { Outlet } from "react-router-dom";


const BlogLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default BlogLayout;