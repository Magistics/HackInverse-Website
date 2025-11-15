import React from "react";
import MainTitle from "./Common/MainTitle";

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
                        <MainTitle />
                    </div>
                </div>
            </div>
        </>
    );
}
