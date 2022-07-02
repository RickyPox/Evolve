export default function WhoWeAre() {
return (
<div className="z-10 grid grid-cols-6 gap-5 relative pt-[330px] md:mx-[100px] mx-[50px]">
    <div className="grid col-span-6 lg:col-span-3 lg:col-start-2 md:col-span-4 col-start-1 md:col-start-1 ">
        <h1 className="text-[30px] lg:text-[70px] text-left font-[NeueMachina-UltraBold] uppercase">
            Who we are <br></br> What We Do
        </h1>
        <p className="mt-[40px] font-[elza] text-[10px] lg:text-[16px]">
            As the Solana ecosystem continues to mature and individual project
            lifecycles,{" "}
            <span className="font-[elza] font-bold">
            the expectations of market participants have evolved as well.
            </span>
        </p>{" "}
        <br></br>
        <p className="font-[elza] text-[10px] lg:text-[16px]">
            Having the right partners and a diverse team will allow us to tackle
            imense use cases.
        </p>{" "}
        <br></br>
        <p className="font-[elza] text-[10px] lg:text-[16px]">
            By using our network and resources{" "}
            <span className="font-[elza] font-bold">
            we can capitalise on every step of this process and maximise
            efficiency and profitability while providing not only to our direct
            client but also to the provider of the resources.
            </span>
        </p>{" "}
        <br></br>
        <p className="font-[elza] text-[10px] lg:text-[16px] font-bold">
            Basically we place oursleves right in the middle of the ecosystem to
            provide a powerful tool that works as and accelerator.
        </p>
        <div className="lg:mt-[140px] mt-[75px]">
            <a
            href="#"
            className=" px-[15px] lg:px-[40px] py-[10px] lg:py-[25px] font-[elza]  font-bold lg:text-[20px] text-[14px] bg-gradient-to-tr from-white to-[#EEEEEE]/0 shadow-[0px_3px_5px_rgba(0,0,0,0.5)] dark:from-[#1d1d1d]"
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
