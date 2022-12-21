import { Header, BackgroundVideo } from "components";

export default function Index() {
    return (
        <>
            <Header />

            <section className="relative">
                <BackgroundVideo src="/assets/background-video.webm" />

                <main className="flex min-h-screen items-center justify-center">
                    <h1 className="text-center text-4xl font-black text-white">Lineage2 Web</h1>
                </main>
            </section>
        </>
    );
}
