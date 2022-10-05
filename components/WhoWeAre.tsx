export default function WhoWeAre() {
return (
<div className="z-10 grid grid-cols-6 gap-5 relative pt-[330px] md:mx-[100px] mx-[50px]">
    <div className="grid col-span-6 lg:col-span-2 lg:col-start-2 md:col-span-4 col-start-1 md:col-start-1 ">
        <h1 className="text-[30px] lg:text-[70px] text-left uppercase font-[NeueMachina-Regular]">
            Who <span className="font-[NeueMachina-UltraBold]">we are</span> 
            <br></br> What <span className="font-[NeueMachina-UltraBold]">We Do </span>
        </h1>
        <p className="mt-[40px] font-[elza] text-[10px] lg:text-[16px]">
            As the Solana ecosystem continues to mature and individual project
            lifecycles, {" "}
            <span className="font-[elza] font-bold">
            the expectations of market participants have evolved 
            </span>
            {" "} as well.
        </p>{" "}
        <br></br>
        <p className="font-[elza] text-[10px] lg:text-[16px]">
            Having the right partners and a diverse team will allow us to tackle imense use cases.
        </p>{" "}
        <br></br>
        <p className="font-[elza] text-[10px] lg:text-[16px]">
            By using our network and resources{" "}
            <span className="font-[elza] font-bold">
            we can capitalise on every step of this process and maximise efficiency 
            and profitability while providing not only to our direct client but also 
            to the provider of the resources.
            </span>
        </p>{" "}
        <br></br>
        <p className="font-[elza] text-[10px] lg:text-[16px] font-bold">
            Basically we place oursleves right in the middle of the ecosystem to 
            provide a powerful tool that works as and accelerator.
        </p>
        <div className="lg:mt-[140px] mt-[75px] flex dark:hidden">
            <a
            href="#"
            className="bgs px-[15px] lg:px-[40px] py-[10px] lg:py-[25px] font-[elza] font-bold lg:text-[20px] text-[14px] shadow-[0px_3px_5px_rgba(0,0,0,0.5)]"
            >
            Check Full Pitchdeck
            </a>
        </div>
        <div className="lg:mt-[140px] mt-[75px] dark:flex hidden">
            <a
            href="#"
            className="bgs_dark px-[15px] lg:px-[40px] py-[10px] lg:py-[25px] font-[elza] font-bold lg:text-[20px] text-[14px] shadow-[0px_3px_5px_rgba(0,0,0,0.5)]"
            >
            Check Full Pitchdeck
            </a>
        </div>
    </div>
    {/* <div className="flex col-span-2 col-start-5 items-end">
        <img src="/TrippinApeImg.png" className="-mb-[25px]"></img>
    </div> */}
</div>
);
}
