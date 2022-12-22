import { useRouter } from "next/router";
import Link from "next/link";

import { anchors } from "data";

export default function Navigation() {
    const { pathname } = useRouter();

    return (
        <nav className="overflow-y-overlay flex max-h-[calc(100vh-79px)] flex-col items-center gap-4 pb-3 md:flex-row md:gap-8 md:p-0">
            {anchors.map(({ children, href }, idx) => {
                const isLastAnchor = anchors.length - 1 === idx;

                return (
                    <Link
                        key={href}
                        href={href}
                        className={`text-center font-primary hover:underline ${
                            pathname === href ? "text-amber-200" : "text-white"
                        } ${isLastAnchor ? "" : "after:anchor-separator relative"}`}
                    >
                        {children}
                    </Link>
                );
            })}
        </nav>
    );
}
