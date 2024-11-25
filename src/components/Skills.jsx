import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import tailwind from "../assets/skills/tailwind.png";
import javascript from "../assets/skills/javascript.png";
import react from "../assets/skills/react.png";


export const Skills = () => {
  return (
    <div className="border  border-gray-300 bg-black text-gray-400 items-center md:h-[150px] max-w-[1280px] 
    mx-auto grid grid-cols-6
    place-content-center ">


        <div className="col-span-1">
            <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4">
                My <br/> Tech <br/> Stack
            </h2>
        </div>

        <div className="col-span-1">
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={html} alt="" />
                <p className="mt-3 text-xs md:text-base ">HTML</p>
            </div>
        </div>
        <div className="col-span-1">
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={css} alt="" />
                <p className="mt-3 text-xs md:text-base ">CSS</p>
            </div>
        </div>
        <div className="col-span-1">
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={tailwind} alt="" />
                <p className="mt-3 text-xs md:text-base">TAILWIND</p>
            </div>
        </div>
        <div className="col-span-1">
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={javascript} alt="" />
                <p className="mt-3 text-xs md:text-base">JAVASCRIPT</p>
            </div>
        </div>
        <div className="col-span-1"> 
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={react} alt="" />
                <p className="mt-3 text-xs md:text-base">REACT</p>
            </div>

        </div>
    </div>
  )
}
