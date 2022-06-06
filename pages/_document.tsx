import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                <title>Erfad | إرفاد</title>
                    <link href="https://fonts.googleapis.com/css2?family=Harmattan:wght@400;700&display=swap" rel="stylesheet"/>
                    <meta name="theme-color" content="#97E473"></meta>
                    <meta name="description" content="A non-profit environmental organization led by a group of young environmentalists, attempting to improve
                            public awareness of environmental issues and work on thoughtful plans to make a change in real-life."></meta>
                    <meta name="og:description" content="A non-profit environmental organization led by a group of young environmentalists, attempting to improve
                                        public awareness of environmental issues and work on thoughtful plans to make a change in real-life."></meta>
                    <meta property="og:image" content="/banner.png" />
    <link rel="icon" type="image/png" href="/haze_green.png" />
    <meta name="keywords" content="Erfad, ارفاد, إرفاد"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
