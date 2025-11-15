import React from "react";

export default function HeroSection() {
    return (
        <>
            <div className="overflow-hidden">
                <div
                    className="relative h-[50vh] md:h-screen w-full flex justify-center items-center"
                    style={{
                        background:
                            "linear-gradient(#111220, #282A57 50%, #162D3D)",
                    }}
                >
                    {/* Mountains */}
                    <img
                        className="absolute -bottom-10 w-full z-30"
                        src="/parallax/mountain3.svg"
                    />
                    <img
                        className="absolute -bottom-5 w-full z-20"
                        src="/parallax/mountain-2.svg"
                    />
                    <img
                        className="absolute bottom-0 w-full z-10"
                        src="/parallax/mountain-1.svg"
                    />

                    {/* Sun */}
                    {/* <img
                        className="absolute top-[70%] left-1/2 w-[40%] -translate-x-1/2 -translate-y-1/2"
                        src="/parallax/sun.svg"
                    /> */}

                    {/* Clouds */}
                    <img
                        className="absolute left-0 top-30 md:top-0 w-[30%] md:w-[13%]"
                        src="/parallax/clouds-left.svg"
                    />
                    <img
                        className="absolute right-0 top-30 md:top-0 w-[30%] md:w-[13%]"
                        src="/parallax/clouds-right.svg"
                    />
                    <img
                        className="absolute bottom-0 w-full"
                        src="/parallax/cloud-bottom.svg"
                    />

                    {/* Stars */}
                    <img
                        className="absolute top-0 left-0 w-full"
                        src="/parallax/stars.svg"
                    />

                    {/* Title Block */}
                    <div className="relative z-30 md:-translate-y-30">
                        {/* Top border */}
                        <div className="h-2 md:h-4 flex flex-col gap-1">
                            <div className="h-0.5 md:h-1.5 background-red"></div>
                            <div className="h-0.5 md:h-1 background-red md:mt-1.5"></div>
                        </div>

                        {/* Title text */}
                        <div className="relative">
                            <h1 className="font-bold text-4xl md:text-7xl lg:text-[7rem] xl:text-[8rem] tracking-wider text-transparent bg-clip-text background-red relative stranger-things">
                                HACKINVERSE
                            </h1>
                        </div>

                        {/* Bottom border */}
                        <div className="h-2 md:h-4 flex flex-col gap-1">
                            <div className="h-0.5 md:h-1 background-red md:mb-1.5"></div>
                            <div className="h-0.5 md:h-1.5 background-red"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
