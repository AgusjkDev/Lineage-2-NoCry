import { Header, BackgroundVideo, Hero } from "components";

export default function Index() {
    return (
        <>
            <Header />

            <section className="relative">
                <BackgroundVideo src="/assets/background-video.webm" />

                <Hero />
            </section>
        </>
    );
}
