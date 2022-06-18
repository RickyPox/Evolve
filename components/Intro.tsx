export default function Intro() {
return (
<div className=" z-10 grid grid-cols-6 gap-5 relative pt-[250px] mx-[100px]">
    <div className="grid col-span-4 col-start-2 items-center justify-center justify-items-center">
    <h1 className="  text-[90px] text-center font-[NeueMachina-Regular]">
        WE WORK
        <br></br>
        <span className="font-[NeueMachina-UltraBold]">
        FOR THE PROJECTS.
        </span>
    </h1>
    <p className="font-[elza]">
        We make your idea become{" "}
        <span className="font-[elza] font-bold italic">TRUE</span>
    </p>
    <div className="mt-[140px]">
        <a
        href="#"
        className="px-[40px] py-[25px] font-[elza] font-bold text-[20px] uppercase bg-gradient-to-tr from-white to-[#EEEEEE]/0 shadow-[0px_3px_5px_rgba(0,0,0,0.5)]"
        >
        PRESS TO EVOLVE
        </a>
    </div>
        <div className="flex justify-start w-full">
            <a href="#">
            <img src="DownArrow.png" className="z-0"></img>
            </a>
        </div>
    </div>
</div>
);
}
