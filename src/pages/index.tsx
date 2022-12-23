import { Header, Section, Hero } from "components";

export default function Index() {
    return (
        <>
            <Header />

            <Section fullscreen linesPattern backgroundVideo="/assets/bg-hero.webm">
                <Hero />
            </Section>

            <Section
                fullscreen
                backgroundImage="/assets/bg-sparks.png"
                backgroundColor="#000000"
                title="Fechas Importantes"
            >
                <p className="text-center font-primary text-white">En construccion...</p>
            </Section>

            <Section
                fullscreen
                linesPattern
                backgroundImage="/assets/bg-slider.png"
                title="Aspectos Generales"
            >
                <p className="text-center font-primary text-white">En construccion...</p>
            </Section>

            <Section
                fullscreen
                linesPattern
                backgroundImage="/assets/bg-schedule.png"
                title="Cronograma Global"
            >
                <p className="text-center font-primary text-white">En construccion...</p>
            </Section>

            <Section
                fullscreen
                linesPattern
                backgroundImage="/assets/bg-bosses.png"
                title="Raid Bosses"
            >
                <p className="text-center font-primary text-white">En construccion...</p>
            </Section>
        </>
    );
}
