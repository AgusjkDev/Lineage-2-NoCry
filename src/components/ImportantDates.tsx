import Image from "next/image";

import { importantDates } from "data";

export default function ImportantDates() {
    return (
        <article className="flex w-full flex-col items-center justify-center gap-6 py-8 lg:gap-10 lg:py-12 xl:gap-12">
            <h2 className="dropshadow dropshadow-opacity-50 text-shadow text-center font-secondary text-3xl font-bold uppercase tracking-wider text-amber-200">
                Fechas Importantes
            </h2>

            <div className="mx-auto flex w-[87.5%] flex-col items-center gap-8 lg:w-[95%] lg:flex-row lg:gap-12 xl:w-[87.5%] xl:gap-16">
                {importantDates.map(({ background, legend, date }) => (
                    <div key={background} className="dropshadow hover:dropshadow-opacity-15 relative flex w-full max-w-xl items-end">
                        <Image
                            alt={legend}
                            src={`/assets/important-dates/${background}.png`}
                            className="w-full rounded"
                            width={576}
                            height={288}
                            quality={100}
                        />

                        <div className="absolute z-[1] flex w-full justify-between rounded bg-black/60 p-3">
                            <p className="font-primary text-xl text-white">{legend}</p>
                            <p className="font-primary text-xl tracking-wider text-amber-200">
                                {date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="dropshadow dropshadow-opacity-50 w-[92.5%] max-w-md text-center font-primary text-white lg:max-w-xl">
                Fechas que marcarán importantes etapas para el servidor. ¡Acompáñanos en cada una de
                ellas para juntos crear una gran comunidad!
            </p>
        </article>
    );
}
