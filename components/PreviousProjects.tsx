export default function PreviousProjects(){
    return(
        <div className="z-10 grid grid-cols-6 gap-5 relative pt-[330px] mx-[100px]">
            <div className="grid col-span-3 col-start-2">
                <h1 className="text-[70px] text-left font-[NeueMachina-UltraBold] uppercase">
                TEAM PREVIOUS PROJECTS
                </h1>
            </div>
            <div className="grid col-span-2 col-start-2 row-start-2">
                <p className="mt-[40px] font-[elza] text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
            </div> 
            <div className="grid col-span-1 col-start-5 bg-gradient-to-tr from-white to-[#ABFFB8]/0 shadow-[0px_3px_5px_rgba(0,0,0,0.5)] h-[450px] absolute top-[330px]">
                    IMAGE PLACEHOLDER SWITCH ON MOUSE HOVER
            </div>
            {/* Projects Date/Name */}
                <div className="grid col-span-2 col-start-4 row-start-3 mt-[110px] py-[15px] border-b-2 border-black ">
                    <p className="font-[elza] text-[22px]">
                        Date xx.xx.xx - <span className=" font-semibold ">Project 1</span>
                    </p>
                </div>
                <div className="grid col-span-2 col-start-4 row-start-4 py-[15px] border-b-2 border-black ">
                    <p className="font-[elza] text-[22px]">
                        Date xx.xx.xx - <span className=" font-semibold ">Project 1</span>
                    </p>
                </div>
                <div className="grid col-span-2 col-start-4 row-start-5 py-[15px] border-b-2 border-black ">
                    <p className="font-[elza] text-[22px]">
                        Date xx.xx.xx - <span className=" font-semibold ">Project 1</span>
                    </p>
                </div>
                <div className="grid col-span-2 col-start-4 row-start-6 py-[15px] border-b-2 border-black ">
                    <p className="font-[elza] text-[22px]">
                        Date xx.xx.xx - <span className=" font-semibold ">Project 1</span>
                    </p>
                </div>
        </div>
    )
}