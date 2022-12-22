import type { AppProps } from "next/app";
import localFont from "@next/font/local";

import "../styles/globals.css";

const primaryFont = localFont({
    src: "../fonts/Euclid-Circular-A.ttf",
});

const secondaryFont = localFont({
    src: "../fonts/Administer-AT.otf",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>
                {`
                    :root {
                        --font-primary: ${primaryFont.style.fontFamily};
                        --font-secondary: ${secondaryFont.style.fontFamily};
                    }
                `}
            </style>

            <Component {...pageProps} />
        </>
    );
}
