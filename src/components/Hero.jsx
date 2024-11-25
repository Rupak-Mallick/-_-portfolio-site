import heroimage from "../assets/Hero/1732371729510.png"
import { TypeAnimation } from "react-type-animation"

export const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1280px]  mx-auto py-8 ">
        <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
            
              <img src={heroimage} alt="hero image" />
            
        </div>
        <div className="col-span-2 px-5   ">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
                <span className="primary-color">
                   I'm a
                </span> <br/>
                <TypeAnimation
                sequence={[
                  "Frontend Dev",
                  1000,
                  "Consultant",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
            </h1>
            <p className="text-white sm:text-lg my-6 lg:text-xl">
              My name is Rupak Mallick and I've 6 months experience of Web Development.
            </p>
            <div className="my-8">
              <a className="px-6 py-3 w-full rounded-xl mr-4 text-white 
              bg-gradient-to-br from-orange-500 to-pink-500 " href="/">Download CV</a>
              
              <a className="px-6 py-3 w-full rounded-xl mr-4 text-white border border-gray-500
              hover:bg-gradient-to-br from-orange-500 to-pink-500 " href="#contact" >Contact</a>
            </div>
        </div>
    </div>
  )
}
