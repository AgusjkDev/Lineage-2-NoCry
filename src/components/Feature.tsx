import Image from "next/image";

export default function Feature({ legend, icon }: FeatureProps) {
    return (
        <div className="flex w-1/3 flex-col gap-1 md:w-auto">
            <div className="relative grid place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
                    <path
                        className="fill-primary"
                        fillRule="evenodd"
                        d="M63.579 12.9l.674-5.18-5.18.674a36.008 36.008 0 00-46.209 0L7.685 7.72l.673 5.18a36.008 36.008 0 000 46.209l-.674 5.18 5.18-.674a36.009 36.009 0 0046.209 0l5.179.674-.673-5.18a36.008 36.008 0 000-46.209zm-51.284-.57a33.48 33.48 0 1047.348 0 33.48 33.48 0 00-47.348-.005z"
                    ></path>
                </svg>

                <Image
                    alt={legend}
                    src={`/assets/features/${icon}.png`}
                    className="absolute"
                    width={56}
                    height={56}
                    quality={100}
                    priority
                />
            </div>

            <p className="mx-auto max-w-[96px] text-center font-primary text-white">{legend}</p>
        </div>
    );
}
