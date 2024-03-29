export default function Team(){
    return(
    <div className="z-10 grid grid-cols-6 gap-5 relative py-[300px] md:mx-[100px] mx-[50px]">
        <div className="grid lg:col-span-2 lg:col-start-2 col-span-6 col-start-1">
            <h1 className="lg:text-[70px] text-[30px] text-left font-[NeueMachina-UltraBold] uppercase">
                Our Team
            </h1>
            <p className="font-[elza] lg:text-[16px] text-[10px]">
                Contact us on our socials or fill the form below
            </p>
            <div className="flex space-x-10 mt-[20px]">
                <img src="/TwitterLogo.svg"></img>
                <img src="/DiscordLogo.svg"></img>
                <img src="/EmailLogo.svg"></img>
            </div>
        </div>
        
        {/* Team CHANGE METHOD */}

            <div className="flex flex-col items-center row-start-4 col-start-2 col-span-2 lg:col-span-1 lg:col-start-2">
                <img src="/TeamPlaceHolder.png"></img>
                <h2 className="font-[elza] text-[25px] font-bold">Name</h2>
                <div className="flex space-x-5">
                    <img src="/TwitterLogo.svg" className="w-[15px]"></img>
                    <img src="/InstagramLogo.svg" className="w-[15px]"></img>
                    <img src="/WebLogo.svg" className="w-[15px]"></img>
                </div>
            </div>
            
            <div className="flex flex-col items-center row-start-4 col-start-4 col-span-2 lg:col-span-1 lg:col-start-3">
                <img src="/TeamPlaceHolder.png"></img>
                <h2 className="font-[elza] text-[25px] font-bold">Name</h2>
                <div className="flex space-x-5">
                    <img src="/TwitterLogo.svg" className="w-[15px]"></img>
                    <img src="/InstagramLogo.svg" className="w-[15px]"></img>
                    <img src="/WebLogo.svg" className="w-[15px]"></img>
                </div>
            </div>

            <div className="flex flex-col items-center row-start-5 col-start-2 col-span-2 lg:row-start-4 lg:col-start-4 lg:col-span-1">
                <img src="/TeamPlaceHolder.png"></img>
                <h2 className="font-[elza] text-[25px] font-bold">Name</h2>
                <div className="flex space-x-5">
                    <img src="/TwitterLogo.svg" className="w-[15px]"></img>
                    <img src="/InstagramLogo.svg" className="w-[15px]"></img>
                    <img src="/WebLogo.svg" className="w-[15px]"></img>
                </div>
            </div>

            <div className="flex flex-col items-center row-start-5 col-start-4 col-span-2 lg:row-start-4 lg:col-start-5 lg:col-span-1">
                <img src="/TeamPlaceHolder.png"></img>
                <h2 className="font-[elza] text-[25px] font-bold">Name</h2>
                <div className="flex space-x-5">
                    <img src="/TwitterLogo.svg" className="w-[15px]"></img>
                    <img src="/InstagramLogo.svg" className="w-[15px]"></img>
                    <img src="/WebLogo.svg" className="w-[15px]"></img>
                </div>
            </div>

    </div>
    )
}