import Image from "next/image";

import { Feature } from ".";
import { features } from "data";

export default function Hero() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-black/20 pt-20 md:gap-12">
            <Image
                alt="Logo"
                src="/assets/logo.png"
                width={350}
                height={0}
                quality={100}
                priority
                className="w-4/5 md:w-2/5 lg:w-1/3"
            />

            <Image
                alt="Hero Divider"
                src="/assets/hero-divider.svg"
                width={350}
                height={0}
                quality={100}
                priority
                className="w-3/4 md:w-1/4"
            />

            <div className="text-shadow flex flex-col items-center gap-3 text-center font-secondary text-3xl uppercase tracking-wider odd:[&>p]:text-amber-200 even:[&>p]:text-white">
                <p>x3 Classic+</p>
                <p>Mists of Rune</p>
                <p>01/01/23, 20:00 GMT-3</p>
            </div>

            <div className="dropshadow dropshadow-opacity-50 text-shadow flex flex-col items-center text-center font-primary text-lg tracking-wide text-white">
                <p>¡Entra en un nuevo mundo lleno de emocionantes aventuras!</p>
                <p>¡Únete y escribe tu propia leyenda!</p>
            </div>

            <div className="mt-4 flex w-full flex-wrap justify-center gap-y-6 md:w-[90%] md:flex-nowrap lg:w-3/4">
                {features.map(({ legend, icon }) => (
                    <Feature key={icon} legend={legend} icon={icon} />
                ))}
            </div>
        </main>
    );
}
