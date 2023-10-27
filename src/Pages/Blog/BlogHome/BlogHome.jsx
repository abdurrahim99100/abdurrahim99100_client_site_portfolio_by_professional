import { Helmet } from "react-helmet";
import CssHeader from "../Css/CssHeader";


const BlogHome = () => {
    return (
        <div className="container mx-auto pt-36">
            <Helmet>
                <title>Blog | Portfolio-by-rahim</title>
            </Helmet>
            <div className=" text-black uppercase">
                <h3 className="text-5xl font-semibold text-center">welcome to my Blog</h3>
            </div>
            <div>
                <CssHeader></CssHeader>
            </div>
        </div>
    );
};

export default BlogHome;