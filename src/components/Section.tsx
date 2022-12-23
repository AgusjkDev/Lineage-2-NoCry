export default function Section({
    fullscreen,
    linesPattern,
    backgroundVideo,
    backgroundImage,
    backgroundColor,
    title,
    children,
}: SectionProps) {
    return (
        <section
            className={`${fullscreen ? "min-h-screen " : ""}${
                backgroundVideo || linesPattern ? "relative " : ""
            }${(backgroundImage || backgroundColor) && linesPattern ? "-z-[1] " : ""}${
                !backgroundVideo ? "py-8 " : ""
            }border-b-2 border-primary`}
            style={{
                ...(backgroundImage && {
                    background: `${
                        backgroundColor ? backgroundColor : ""
                    } url(${backgroundImage}) center/cover no-repeat`,
                }),
                ...(backgroundColor && !backgroundImage && { background: backgroundColor }),
            }}
        >
            {title && (
                <h2 className="dropshadow dropshadow-opacity-50 text-shadow px-4 pb-4 text-center font-secondary text-3xl font-bold uppercase tracking-wider text-primary">
                    {title}
                </h2>
            )}

            {children}

            {backgroundVideo && (
                <video
                    autoPlay
                    loop
                    muted
                    src={backgroundVideo}
                    className={`absolute inset-0 -z-[3] h-full w-full object-cover`}
                />
            )}

            {linesPattern && (
                <div
                    className={`absolute inset-0 -z-[2] h-full bg-[url(/assets/lines-pattern.png)] opacity-50`}
                />
            )}
        </section>
    );
}
