export default function BackgroundVideo({ src }: BackgroundVideoProps) {
    return (
        <>
            <video autoPlay loop muted src={src} className="bg-video" />

            <div className="lines-pattern" />
        </>
    );
}
