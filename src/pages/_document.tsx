import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="es">
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="Lineage 2 NoCry es un servidor interlude sub acumulativa base +3 con un gran potencial. ¡Únete a éste nuevo mundo lleno de emocionantes aventuras y escribe tu propia leyenda!"
                />
                <meta
                    name="keywords"
                    content="Lineage, Lingeage 2, Interlude, Sub Acumulativa, Base +3, Latinoamérica, Sudamérica, Argentina, Bolivia, Brasil, Colombia, Costa Rica, Cuba, Chile, República Dominicana, Ecuador, El Salvador, Guatemala, Honduras, México, Nicaragua, Panamá, Paraguay, Perú, Uruguay, Venezuela"
                />
                <meta name="author" content="Agustín Arnoldi" />
                <meta name="copyright" content="Lineage2NoCry" />
                <meta name="robots" content="index follow" />
                <link rel="icon" href="/favicon.png" type="image/png" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
