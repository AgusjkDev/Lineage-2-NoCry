import Image from "next/image";

import { Subtitle } from ".";
import { importantDates } from "data";

export default function ImportantDates() {
    return (
        <article className="flex flex-col items-center gap-6 pb-2 lg:pb-4 xl:gap-8">
            <Subtitle>
                Fechas que marcarán importantes etapas para el servidor. ¡Acompáñanos en cada una de
                ellas para juntos crear una gran comunidad!
            </Subtitle>

            <div className="mx-auto flex w-[87.5%] flex-col gap-8 lg:w-[92.5%] lg:flex-row xl:gap-12 2xl:w-[87.5%]">
                {importantDates.map(({ background, legend, date }) => (
                    <div
                        key={background}
                        className="dropshadow hover:dropshadow-opacity-15 relative mx-auto flex w-full max-w-sm items-end rounded-sm sm:max-w-md"
                    >
                        <div className="rounded-sm-b absolute flex w-full justify-between bg-black/70 p-4 font-primary text-xl">
                            <p className="text-white">{legend}</p>
                            <p className="text-primary">{date}</p>
                        </div>

                        <Image
                            alt={legend}
                            src={`/assets/important-dates/${background}.png`}
                            className="w-full rounded-sm"
                            width={450}
                            height={300}
                            quality={100}
                        />
                    </div>
                ))}
            </div>
        </article>
    );
}
