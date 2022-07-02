import { useEffect, useState } from "react";


export default function Services(){

        useEffect(() => {
                const evolveTechCircle = document.getElementById("evolveTechCircle");
                const fillCircle = () =>{
                        const evolveTechCircleDimensions = evolveTechCircle?.getBoundingClientRect();
                        var evolveTechCircleTop = evolveTechCircleDimensions.top;
                        if(evolveTechCircleTop <= 200 ){
                                evolveTechCircle.style.backgroundColor = "black";
                        }
                        else{
                                evolveTechCircle.style.backgroundColor = "white";
                        }
                }
                window.addEventListener("scroll", fillCircle)
        });

return(
        <div className=" mt-[250px] md:mx-[100px] mx-[50px] z-10 relative">
                <h1 className="text-[30px] lg:text-[70px] text-right font-[NeueMachina-UltraBold] uppercase">
                        Our <br></br>Services
                </h1>
                <div className=" grid grid-cols-6 gap-5">
                        <div className=" grid col-span-6 gap-5 col-start-1 lg:col-start-2 lg:col-span-3 border-l-2 border-black dark:border-white">

                                {/* EVOLVE GROWTH */}
                                <div className="flex pb-[100px]">
                                        <div className="flex flex-col justify-items-start items-center w-[20px] -ml-[11px] ">
                                                <div className="w-[20px] h-[20px] rounded-full bg-black dark:bg-white"/>
                                        </div>
                                        <div>
                                        <h2 className="text-[22px] text-left font-[NeueMachina-UltraBold] uppercase font-bold ml-[10px] -mt-[7px]">EVOLVE GROWTH</h2>
                                                
                                                {/* WEB 3 Strategy */}
                                                <div className="flex ml-[55px] mt-[30px] space-x-5">
                                                        <img src="WebLogo.svg"/>
                                                        <h3 className="font-[Elza] font-bold text-[24px]">WEB 3 Strategy</h3>
                                                </div>
                                                <div className="font-[Elza] text-[16px] ml-[125px] mt-[10px]">
                                                        <p>Art Design / Collection Strategy ( art, mint size, mint price, 1/1 creation )</p>
                                                        <p>Outline of needs</p>
                                                        <p>Processes Guidance</p>
                                                        <p>Launch Strategy</p>
                                                        <p>Tech Support</p>
                                                </div>

                                                {/* WEB 3 Development Support */}
                                                <div className="flex ml-[55px] mt-[30px] space-x-5">
                                                        <img src="SupportLogo.svg"/>
                                                        <h3 className="font-[Elza] font-bold text-[24px]">WEB 3 Development Support</h3>
                                                </div>
                                                <div className="font-[Elza] text-[16px] ml-[125px] mt-[10px]">
                                                        <p>Launch partnerships</p>
                                                        <p>Protocol Setup</p>
                                                        <p>Marketplace Setup assistance</p>
                                                        <p>Integration with Web3 protocols</p>
                                                        <p>Membership Protocol</p>
                                                        <p>Development Hiring and Advisory</p>
                                                </div>

                                                {/* Strategic Partnerships / Marketing */}
                                                <div className="flex ml-[55px] mt-[30px] space-x-5">
                                                        <img src="PartnershipLogo.svg"/>
                                                        <h3 className="font-[Elza] font-bold text-[24px]">Strategic Partnerships / Marketing</h3>
                                                </div>
                                                <div className="font-[Elza] text-[16px] ml-[125px] mt-[10px]">
                                                        <p>Strategic introductions to ecosystem projects</p>
                                                        <p>Strategic introductions to community and thought leader</p>
                                                        <p>Influencer Partnerships</p>
                                                        <p>Spaces and ecosystem podcasts setup</p>
                                                        <p>Community Management, Discord Moderator, and Social Media Management Hiring</p>
                                                        <p>Discord Moderator Education and Onboarding Services</p>
                                                </div>

                                                {/*Events*/}
                                                <div className="flex ml-[55px] mt-[30px] space-x-5">
                                                        <img src="EventsLogo.svg"/>
                                                        <h3 className="font-[Elza] font-bold text-[24px]">Events</h3>
                                                </div>
                                                <div className="font-[Elza] text-[16px] ml-[125px] mt-[10px]">
                                                        <p>Location Scouting</p>
                                                        <p>Celebrity Partnerships</p>
                                                        <p>Brand/Project Partnerships</p>
                                                </div>

                                                {/*Raising and Tech Partnerships*/}
                                                <div className="flex ml-[55px] mt-[30px] space-x-5">
                                                        <img src="StrategicLogo.svg"/>
                                                        <h3 className="font-[Elza] font-bold text-[24px]">Raising and Tech Partnerships</h3>
                                                </div>
                                                <div className="font-[Elza] text-[16px] ml-[125px] mt-[10px]">
                                                        <p>Introductions to Web3 Venture Capitalists, Firms, and Funds</p>
                                                        <p>Introductions to Tech Leaders</p>
                                                        <p>Introduction and Partnership with Solana</p>
                                                </div>
                                        </div>
                                </div>

                                {/* EVOLVE TECH */}
                                <div className="flex pb-[100px]">
                                        <div className="flex flex-col justify-items-start items-center w-[20px] -ml-[11px] ">
                                                <div id="evolveTechCircle" className="w-[20px] h-[20px] rounded-full border-black dark:border-white border-2 z-20 bg-white dark:bg-[#1d1d1d] transition ease-in-out duration-500"/>
                                        </div>
                                        <div>
                                        <h2 className="text-[22px] text-left font-[NeueMachina-UltraBold] uppercase font-bold ml-[10px] -mt-[7px]">EVOLVE TECH</h2>
                                                
                                                {/* Strategic Partnerships / Marketing */}
                                                <div className="flex ml-[55px] mt-[30px] space-x-5">
                                                        <img src="WebLogo.svg"/>
                                                        <h3 className="font-[Elza] font-bold text-[24px]">Strategic Partnerships / Marketing</h3>
                                                </div>
                                                <div className="font-[Elza] text-[16px] ml-[125px] mt-[10px]">
                                                        <p>Strategic introductions to ecosystem projects</p>
                                                        <p>Strategic introductions to community and thought leader</p>
                                                        <p>Influencer Partnerships</p>
                                                        <p>Spaces and ecosystem podcasts setup</p>
                                                        <p>Community Management, Discord Moderator, and Social Media Management Hiring</p>
                                                        <p>Discord Moderator Education and Onboarding Services</p>
                                                </div>

                                                {/* WEB 3 Development Support */}
                                                <div className="flex ml-[55px] mt-[30px] space-x-5">
                                                        <img src="SupportLogo.svg"/>
                                                        <h3 className="font-[Elza] font-bold text-[24px]">WEB 3 Development Support</h3>
                                                </div>
                                                <div className="font-[Elza] text-[16px] ml-[125px] mt-[10px]">
                                                        <p>Launch partnerships</p>
                                                        <p>Protocol Setup</p>
                                                        <p>Marketplace Setup assistance</p>
                                                        <p>Integration with Web3 protocols</p>
                                                        <p>Membership Protocol</p>
                                                        <p>Development Hiring and Advisory</p>
                                                </div>

                                                
                                        </div>
                                        
                                </div>
                                
                        </div>
                </div>
        </div>
    )
}