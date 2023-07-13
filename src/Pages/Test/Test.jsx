import { useRef } from "react";
import { Link } from "react-router-dom";


const Test = () => {

    const ref = useRef(null);

    const handle = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <header>
                <nav>
                    <ul className="flex gap-4 justify-center">
                        <li>
                            <Link onClick={handle}>Home</Link>
                        </li>
                        <li>
                            <Link onClick={handle}>About</Link>
                        </li>
                        <li>
                            <Link onClick={handle}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="page1 h-[100vh]">
                    <h2>This is page one</h2>
                </div>
                <div className="page2 h-[100vh]">
                    <h2>This is page Two</h2>
                </div>
                <div ref={ref} className="page3 h-[100vh]">
                    <h2>This is page Three</h2>
                </div>
            </main>
        </div>
    );
};

export default Test;