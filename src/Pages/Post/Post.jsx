import { useState } from "react";
import { useEffect } from "react";

const Post = () => {

    const [posts, setPosts] = useState();

    const url = "https://abdurrahimportfolioserver.up.railway.app/contacts"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="pt-20 w-[500px] mx-auto">
            {
                posts?.map((post, index) =>
                    <div key={index}
                        className="my-10 p-5 bg-cyan-50 text-black rounded-md shadow-lg shadow-cyan-500/50">
                        <div>
                            <span className="block bg-gray-950 text-orange-600 font-semibold w-[40px] h-[40px] rounded-sm p-2 text-center">0{index + 1}</span>
                            <h3>Name: {post.name}</h3>
                            <p>Email: {post.email}</p>
                            <p>Subject: {post.subject}</p>
                            <p>Messages: {post.message}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Post;