import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Navigation } from "components";

export default function Header() {
    const [showNavigation, setShowNavigation] = useState(false);

    const altText = `${showNavigation ? "Ocultar" : "Mostrar"} Navegación`;

    return (
        <header
            className={`fixed z-[1] flex w-full flex-col bg-black/75 transition-[max-height] duration-300 ${
                showNavigation ? "max-h-screen" : "max-h-[79px]"
            }`}
        >
            <div className="flex justify-around py-5">
                <Link href="/">
                    <Image
                        alt="Logo"
                        src="/assets/logo.png"
                        className="dropshadow hover:dropshadow-opacity-50"
                        width={156}
                        height={39}
                        quality={100}
                        priority
                    />
                </Link>

                <button
                    aria-label={altText}
                    onClick={() => setShowNavigation(!showNavigation)}
                    className="dropshadow hover:dropshadow-opacity-100 md:hidden"
                >
                    <Image
                        alt={altText}
                        src="/assets/menu.svg"
                        width={32}
                        height={32}
                        quality={100}
                        priority
                    />
                </button>

                <div className="hidden md:flex">
                    <Navigation />
                </div>
            </div>

            <div
                className={`md:hidden ${
                    showNavigation ? "opacity-100 transition-opacity duration-700" : "opacity-0"
                }`}
            >
                {showNavigation && <Navigation />}
            </div>
        </header>
    );
}
