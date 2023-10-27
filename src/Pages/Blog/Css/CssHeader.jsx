import { Link } from "react-router-dom";
import css from '../../../assets/blog-photo/css-banner.jpg';

const CssHeader = () => {
    return (
        <div className="my-20">
            <div className="bg-slate-800 w-[400px] p-10 rounded-lg">
                <Link to='/cssDetails' className="">
                    <img className='' src={css} alt="" />
                    <span className="uppercase font-semibold text-xl text-orange-500">CSS</span>
                </Link>
                <div className="mt-10 text-white">
                    <p>সিএসএস কি ? এর ইতিহাস ও বর্তমান অবস্থা। (সিএসএস পর্ব ০১)</p>
                    <p>এই ব্লগ পড়ে আমরা যা জানতে পারব -১। CSS কেনো প্রয়োজন।২। CSS কারা মেন্টেন করে।৩। বর্তমানে CSS এর অবস্থা।সহজ ভাষায় বলতে হলে একটা ওয়েবসাইট ডিজাইন......</p>
                </div>
            </div>
        </div>
    );
};

export default CssHeader;