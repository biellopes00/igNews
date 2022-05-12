import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document{
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Open+Sans:ital,wght@0,400;0,700;1,400&family=Poppins:wght@400;600&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"></link>
                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}