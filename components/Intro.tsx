export default function Intro() {
return (
<div className="z-10 grid grid-cols-6 gap-5 relative pt-[130px] md:mx-[100px] mx-[50px]">
    <div className="grid col-span-6 lg:col-span-4 col-start-1 lg:col-start-2 items-center justify-center justify-items-center">
    <h1 className=" text-[30px] lg:text-[90px] text-center font-[NeueMachina-Regular]">
        WE WORK
        <br></br>
        <span className="font-[NeueMachina-UltraBold]">
        FOR THE PROJECTS.
        </span>
    </h1>
    <p className="font-[elza] text-[10px] lg:text-[20px] ">
        We make your idea become{" "}
        <span className="font-[elza] font-bold italic">TRUE</span>
    </p>
    <div className=" mt-[60px] lg:mt-[140px]">
        <a
        href="#"
        className=" px-[8px] lg:px-[40px] py-[20px] lg:py-[25px] font-[elza] font-bold text-[14px] lg:text-[20px] uppercase bg-gradient-to-tr from-white to-[#EEEEEE]/0 shadow-[0px_3px_5px_rgba(0,0,0,0.5)]"
        >
        PRESS TO EVOLVE
        </a>
    </div>
        <div className="flex justify-start w-full mt-[120px] lg:mt-0">
            <a href="#">
            <img src="DownArrow.png" className="z-0 w-[45px] lg:w-[100px] dark:hidden downArrow"></img>
            <img src="DownArrowWhite.png" className="z-0 w-[45px] lg:w-[100px] hidden dark:block downArrow"></img>
            </a>
        </div>
    </div>
</div>
);
}
