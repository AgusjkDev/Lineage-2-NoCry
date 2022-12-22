import { Header, BackgroundVideo, Hero, ImportantDates } from "components";

export default function Index() {
    return (
        <>
            <Header />

            <section>
                <BackgroundVideo src="/assets/background-video.webm" />

                <Hero />
            </section>

            <section id="importantDates">
                <ImportantDates />
            </section>
        </>
    );
}
