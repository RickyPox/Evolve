export default function Team(){
    return(
    <div className="z-10 grid grid-cols-6 gap-5 relative py-[330px] mx-[100px]">
        <div className="grid col-span-2 col-start-2">
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
        <div className="flex justify-center row-start-4 col-start-2 col-span-4">
            <div className="flex flex-col items-center">
                <img src="/TeamPlaceHolder.png"></img>
                <h2 className="font-[elza] text-[25px] font-bold">Name</h2>
                <div className="flex space-x-5">
                    <img src="/TwitterLogo.svg" className="w-[15px]"></img>
                    <img src="/InstagramLogo.svg" className="w-[15px]"></img>
                    <img src="/WebLogo.svg" className="w-[15px]"></img>
                </div>
            </div>
            
            <div className="flex flex-col items-center">
                <img src="/TeamPlaceHolder.png"></img>
                <h2 className="font-[elza] text-[25px] font-bold">Name</h2>
                <div className="flex space-x-5">
                    <img src="/TwitterLogo.svg" className="w-[15px]"></img>
                    <img src="/InstagramLogo.svg" className="w-[15px]"></img>
                    <img src="/WebLogo.svg" className="w-[15px]"></img>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <img src="/TeamPlaceHolder.png"></img>
                <h2 className="font-[elza] text-[25px] font-bold">Name</h2>
                <div className="flex space-x-5">
                    <img src="/TwitterLogo.svg" className="w-[15px]"></img>
                    <img src="/InstagramLogo.svg" className="w-[15px]"></img>
                    <img src="/WebLogo.svg" className="w-[15px]"></img>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <img src="/TeamPlaceHolder.png"></img>
                <h2 className="font-[elza] text-[25px] font-bold">Name</h2>
                <div className="flex space-x-5">
                    <img src="/TwitterLogo.svg" className="w-[15px]"></img>
                    <img src="/InstagramLogo.svg" className="w-[15px]"></img>
                    <img src="/WebLogo.svg" className="w-[15px]"></img>
                </div>
            </div>
        </div>
    </div>
    )
}