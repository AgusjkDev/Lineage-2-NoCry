export default function Subtitle({ children }: SubtitleProps) {
    return (
        <p className="dropshadow dropshadow-opacity-50 max-w-md px-2 text-center font-primary text-lg text-white md:max-w-lg md:text-xl 2xl:max-w-2xl 2xl:text-2xl">
            {children}
        </p>
    );
}
