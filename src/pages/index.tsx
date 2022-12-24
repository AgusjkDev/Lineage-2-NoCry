import { Header, Section, Hero, ImportantDates } from "components";

export default function Index() {
    return (
        <>
            <Header />

            <Section fullscreen backgroundVideo="/assets/bg-hero.webm">
                <Hero />
            </Section>

            <Section
                backgroundImage="/assets/bg-sparks.png"
                backgroundColor="#000000"
                title="Fechas Importantes"
            >
                <ImportantDates />
            </Section>

            <Section fullscreen backgroundImage="/assets/bg-slider.webp" title="Aspectos Generales">
                <p className="text-center font-primary text-white">En construccion...</p>
            </Section>

            <Section
                fullscreen
                backgroundColor="linear-gradient(180deg, rgba(24,20,20,1) 0%, rgba(60,60,69,1) 50%, rgba(24,20,20,1) 100%)"
                title="Cronograma Global"
            >
                <p className="text-center font-primary text-white">En construccion...</p>
            </Section>

            <Section fullscreen backgroundImage="/assets/bg-bosses.webp" title="Raid Bosses">
                <p className="text-center font-primary text-white">En construccion...</p>
            </Section>
        </>
    );
}
