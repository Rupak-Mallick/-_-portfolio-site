import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";


export const Header = () => {

    const[ toggle, setToggle ] = useState(false);

  return (
    <div className="">
        <header className="bg-black border-b  text-gray-400 h-[100px] mx-auto max-w-[1280px] flex items-center justify-between">
            <div className="text-xl font-bold ml-7 flex gap-2  primary-color ">
                <h1>RUPAK</h1> 
                <p className="hidden sm:flex    ">MALLICK</p>
            </div>
            <ul className="hidden md:flex mr-5">
                <li className="p-5">About</li>
                <li className="p-5">Work</li>
                <li className="p-5">Contact</li>
            </ul>

            <div onClick={()=> setToggle(!toggle)  } className="block md:hidden p-4 mr-4">
                {toggle ? <IoMdClose size={30} />  : <IoMdMenu size={30} /> }
            </div>
            <div className={toggle? `fixed h-full left-0 top-0 w-[60%] bg-slate-950 md:hidden ease-in-out duration-500` : `fixed left-[-100%]`}>
                <div className="text-3xl font-semibold m-4 mt-5 primary-color">RUPAK MALLICK</div>
                <ul className="p-5 text-2xl ">
                    <li className="p-2">About</li>
                    <li className="p-2">Work</li>
                    <li className="p-2">Contact</li>
                </ul>
            </div>

        </header>
    </div>
  )
}
