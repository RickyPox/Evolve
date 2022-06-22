export default function Services(){
    return(
        <div className=" mt-[250px] md:mx-[100px] mx-[50px] z-10 relative">
                <h1 className="text-[30px] lg:text-[70px] text-right font-[NeueMachina-UltraBold] uppercase">
                Our <br></br>Services
                </h1>
                {/* Bigger Screens */}
                <div className="hidden lg:grid grid-cols-18 gap-10 mt-[40px]">
                {/* 1st Row */}
                        <div className="flex flex-col justify-around items-center w-full h-[135px] col-span-2 col-start-5 bg-gradient-to-tr from-white to-[#ABFFB8]/0 shadow-[0px_3px_5px_rgba(0,0,0,0.5)] rounded-[5px] cursor-pointer">
                                <img src="/WebLogo.svg" className="w-[30px]"></img>
                                <p className="font-[elza] font-medium text-[16px] text-center w-[150px]">Web3 Strategy</p>
                        </div>

                        <div className="flex flex-col justify-around items-center w-full h-[135px] col-span-2 col-start-7 bg-gradient-to-tr from-white to-[#ABFFB8]/0 shadow-[0px_3px_5px_rgba(0,0,0,0.5)] rounded-[5px] cursor-pointer">
                                <img src="/StrategicLogo.svg" className="w-[30px]"></img>
                                <p className="font-[elza] font-medium text-[16px] text-center w-[150px]">Strategic Partnerships/ Marketing</p>
                        </div>
                        {/* 2nd Row */}
                        <div className="flex flex-col justify-around items-center w-full h-[135px] col-span-2 col-start-5 row-start-2 bg-gradient-to-tr from-white to-[#ABFFB8]/0 shadow-[0px_3px_5px_rgba(0,0,0,0.5)] rounded-[5px] cursor-pointer">
                                <img src="/SupportLogo.svg" className="w-[30px]"></img>
                                <p className="font-[elza] font-medium text-[16px] text-center w-[150px]">Web3 Development Support </p>
                        </div>

                        <div className="flex flex-col justify-around items-center w-full h-[135px] col-span-2 col-start-7 row-start-2 bg-gradient-to-tr from-white to-[#ABFFB8]/0 shadow-[0px_3px_5px_rgba(0,0,0,0.5)] rounded-[5px] cursor-pointer">
                                <img src="/EventsLogo.svg" className="w-[30px]"></img>
                                <p className="font-[elza] font-medium text-[16px] text-center w-[150px]">Events </p>
                        </div>
                        {/* 3rd Row */}
                        <div className="flex flex-col justify-around items-center w-full h-[135px] col-span-2 col-start-5 row-start-3 bg-gradient-to-tr from-white to-[#ABFFB8]/0 shadow-[0px_3px_5px_rgba(0,0,0,0.5)] rounded-[5px] cursor-pointer">
                                <img src="/PartnershipLogo.svg" className="w-[30px]"></img>
                                <p className="font-[elza] font-medium text-[16px] text-center w-[150px]">Raising and Tech Partnerships</p>
                        </div>
                        {/* InfoBox */}
                        <div className="flex flex-col justify-around items-center w-full col-span-9 row-span-3 col-start-10 bg-gradient-to-tr from-white to-[#ABFFB8]/0 shadow-[0px_3px_5px_rgba(0,0,0,0.5)] rounded-[5px] cursor-pointer">
                                <p className="font-[elza] font-medium text-[16px] text-center w-[150px]">Info</p>
                        </div>
                </div>
                
                {/* Smaller Screens */}
                <div className="lg:hidden grid grid-cols-6 gap-10 mt-[40px]">
                        {/* 1st Row */}
                        <div className="flex flex-col justify-around items-center w-full h-[135px] col-span-2 col-start-2 bg-gradient-to-tr from-white to-[#ABFFB8]/0 shadow-[0px_3px_5px_rgba(0,0,0,0.5)] rounded-[5px] cursor-pointer">
                                <img src="/WebLogo.svg" className="w-[30px]"></img>
                                <p className="font-[elza] font-medium text-[16px] text-center w-[150px]">Web3 Strategy</p>
                        </div>

                        <div className="flex flex-col justify-around items-center w-full h-[135px] col-span-2 col-start-4 bg-gradient-to-tr from-white to-[#ABFFB8]/0 shadow-[0px_3px_5px_rgba(0,0,0,0.5)] rounded-[5px] cursor-pointer">
                                <img src="/StrategicLogo.svg" className="w-[30px]"></img>
                                <p className="font-[elza] font-medium text-[16px] text-center w-[150px]">Strategic Partnerships/ Marketing</p>
                        </div>
                        {/* 2nd Row */}
                        <div className="flex flex-col justify-around items-center w-full h-[135px] col-span-2 col-start-2 row-start-2 bg-gradient-to-tr from-white to-[#ABFFB8]/0 shadow-[0px_3px_5px_rgba(0,0,0,0.5)] rounded-[5px] cursor-pointer">
                                <img src="/SupportLogo.svg" className="w-[30px]"></img>
                                <p className="font-[elza] font-medium text-[16px] text-center w-[150px]">Web3 Development Support </p>
                        </div>

                        <div className="flex flex-col justify-around items-center w-full h-[135px] col-span-2 col-start-4 row-start-2 bg-gradient-to-tr from-white to-[#ABFFB8]/0 shadow-[0px_3px_5px_rgba(0,0,0,0.5)] rounded-[5px] cursor-pointer">
                                <img src="/EventsLogo.svg" className="w-[30px]"></img>
                                <p className="font-[elza] font-medium text-[16px] text-center w-[150px]">Events </p>
                        </div>
                        {/* 3rd Row */}
                        <div className="flex flex-col justify-around items-center w-full h-[135px] col-span-2 col-start-2 row-start-3 bg-gradient-to-tr from-white to-[#ABFFB8]/0 shadow-[0px_3px_5px_rgba(0,0,0,0.5)] rounded-[5px] cursor-pointer">
                                <img src="/PartnershipLogo.svg" className="w-[30px]"></img>
                                <p className="font-[elza] font-medium text-[16px] text-center w-[150px]">Raising and Tech Partnerships</p>
                        </div>
                </div>
        </div>
    )
}