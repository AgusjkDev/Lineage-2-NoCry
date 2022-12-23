import Image from "next/image";

import { Subtitle, Feature } from ".";
import { features } from "data";

export default function Hero() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 md:gap-10 lg:gap-12 xl:gap-12">
            <Image
                alt="Logo"
                src="/assets/logo.png"
                className="mt-12 w-2/3 sm:w-1/2 md:mt-20 lg:w-2/5 xl:w-1/3"
                width={350}
                height={0}
                quality={100}
                priority
            />

            <Image
                alt="Hero Divider"
                src="/assets/hero-divider.svg"
                className="w-2/3 sm:w-1/2 lg:w-2/5 xl:w-1/3"
                width={350}
                height={0}
                priority
            />

            <div className="dropshadow dropshadow-opacity-50 text-shadow px-2 text-center font-secondary text-3xl uppercase tracking-wider md:text-4xl 2xl:text-5xl odd:[&>p]:text-primary even:[&>p]:text-white">
                <p>x3 Classic+</p>
                <p>Mists of Rune</p>
                <p>01/01/23, 20:00 GMT-3</p>
            </div>

            <Subtitle>
                ¡Únete a éste nuevo mundo lleno de emocionantes aventuras y escribe tu propia
                leyenda!
            </Subtitle>

            <div className="flex flex-wrap justify-center gap-y-4 md:w-full md:flex-nowrap md:justify-evenly md:gap-y-0 lg:w-[87.5%] xl:w-4/5">
                {features.map(({ legend, icon }) => (
                    <Feature key={icon} legend={legend} icon={icon} />
                ))}
            </div>
        </main>
    );
}
