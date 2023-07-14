import './project.css';
import project1 from '../../../assets/project-photos/career-hub.png';
const Project = () => {
    return (
        <div id="project">
            <div className="h-[100vh] flex flex-col justify-center items-center">
                <div className="flex flex-col gap-2 items-center font-semibold text-4xl">
                    <h3>Project</h3>
                    <progress className="progress bg-[#15E0B7] w-36 h-[5px]"></progress>
                </div>
                <div>
                    <div className='box-container'>
                        <div className='cover'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;