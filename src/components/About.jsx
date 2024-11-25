import about from "../assets/About/about.jpg";

export const About = () => {
  return (
    <div className="max-w-[1280px] text-white mx-auto my-12"> 

        <div className="md:grid md:grid-cols-2 sm:py-16">

            <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start md:py-0">

                <div className="my-auto mx-6">
                    <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
                    <p className="text-base lg:text-lg">I’m a developer experienced in building websites for small and medium-sized businesses. Whether you’re trying to win work, list your services, or create a new online store, I can help.<br/>
                        *Knows HTML5  & Tailwind CSS, JAVASCRIPT and React.js.<br/>
                        *Full project management from start to finish.<br/>
                        *Regular communication is important to me, so let’s keep in touch.<br/>
                    </p>
                </div>

            </div>

            <div><img className="mx-auto rounded-3xl py-8 md:py-0 " src={about} alt="" width={300} height={300} /></div>

        </div>

    </div>
  )
}
