import { useState } from "react";
import Image from "next/image";

import { Subtitle } from ".";
import { sliders } from "data";

type SliderArrowProps = {
    facing: "lt" | "br";
    onClick: Function;
};

function SliderArrow({ facing, onClick }: SliderArrowProps) {
    return (
        <button
            onClick={() => onClick()}
            className="z-[1] bg-blue-400 [&>svg>path]:fill-white hover:[&>svg>path]:fill-primary"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="60" viewBox="0 0 30 60">
                <path d="M25.356,39.6l-9.6-9.6,9.6-9.6L22.967,30ZM11.637,30,26.321,45.67l3.67,14.34L5.991,36l-6-6,30-30.01-3.67,14.34Z"></path>
            </svg>
        </button>
    );
}

export default function Slider() {
    const [current, setCurrent] = useState(0);

    const handleArrow = (facing: "lt" | "br") => {
        console.log("handling:", facing);
    };

    return (
        <article className="flex min-h-screen flex-col items-center justify-center">
            {/* <Subtitle>
                Aspectos importantes a destacar de la jugabilidad del servidor, para que estés bien
                informado.
            </Subtitle> */}

            <div className="flex w-[92.5%] flex-col items-center">
                <SliderArrow facing="lt" onClick={() => handleArrow("lt")} />

                {/* <div className="bg-red-400">
                    {sliders.map(({ background, title, texts }, index) => (
                        <div
                            key={index}
                            className={`relative ${current !== index ? "hidden opacity-0" : ""}`}
                        >
                            <div className="absolute flex h-full w-full flex-col items-center gap-4 pt-8">
                                <h3 className="text-shadow font-primary text-3xl text-white">
                                    {title}
                                </h3>

                                <div className="text-shadow flex flex-col items-center gap-1 font-primary text-lg text-white">
                                    {texts.map((text, i) => (
                                        <p key={i} className="">
                                            {text}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <Image
                                alt={title}
                                src={`/assets/sliders/${background}.webp`}
                                width={600}
                                height={400}
                                priority
                            />
                        </div>
                    ))}
                </div> */}

                <SliderArrow facing="br" onClick={() => handleArrow("br")} />
            </div>
        </article>
    );
}
