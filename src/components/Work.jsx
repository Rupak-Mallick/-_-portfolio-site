import photo1 from "../assets/work/project cinehub.jpg";
import photo2 from "../assets/work/project portfolio.jpg";
import photo3 from "../assets/work/project redux.jpg";
import photo4 from "../assets/work/project cinehub details.jpg"
import photo5 from "../assets/work/project R.tech.jpg";
import photo6 from "../assets/work/project eBookStore.jpg"



export const Work = () => {
  return (
    <div className="max-w-[1280px] mx-auto p-5">
        <div className="pb-8">
            <p className="text-4xl mb-3 font-bold primary-color">Work</p>
            <p className="text-gray-400">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            <div className="transform transition-transform duration-300 ">
                <img src={photo1} alt="" />
                <div className="opacity-0 group-hover:opacity-90 bg-gray-400 absolute inset-0 flex flex-col justify-center
                items-center ">
                    <span className="text-2xl font-bold text-white tracking-wider">Project</span>
                    <div className="pt-8 text-center">
                        <a href="">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="transform transition-transform duration-300 ">
                <img src={photo6} alt="" />
                <div className="opacity-0 group-hover:opacity-90 bg-gray-400 absolute inset-0 flex flex-col justify-center
                items-center ">
                    <span className="text-2xl font-bold text-white tracking-wider">Project</span>
                    <div className="pt-8 text-center">
                        <a href="">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="transform transition-transform duration-300 ">
                <img src={photo3} alt="" />
                <div className="opacity-0 group-hover:opacity-90 bg-gray-400 absolute inset-0 flex flex-col justify-center
                items-center ">
                    <span className="text-2xl font-bold text-white tracking-wider">Project</span>
                    <div className="pt-8 text-center">
                        <a href="">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="transform transition-transform duration-300 ">
                <img src={photo5} alt="" />
                <div className="opacity-0 group-hover:opacity-90 bg-gray-400 absolute inset-0 flex flex-col justify-center
                items-center ">
                    <span className="text-2xl font-bold text-white tracking-wider">Project</span>
                    <div className="pt-8 text-center">
                        <a href="">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="transform transition-transform duration-300 ">
                <img src={photo4} alt="" />
                <div className="opacity-0 group-hover:opacity-90 bg-gray-400 absolute inset-0 flex flex-col justify-center
                items-center ">
                    <span className="text-2xl font-bold text-white tracking-wider">Project</span>
                    <div className="pt-8 text-center">
                        <a href="">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="transform transition-transform duration-300 ">
                <img src={photo2} alt="" />
                <div className="opacity-0 group-hover:opacity-90 bg-gray-400 absolute inset-0 flex flex-col justify-center
                items-center ">
                    <span className="text-2xl font-bold text-white tracking-wider">Project</span>
                    <div className="pt-8 text-center">
                        <a href="">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
  )
}
