import { NextPageContext } from "next";
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="de">
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          /> */}
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          /> */}
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,700&display=swap"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,700&display=swap"
            media="print"

            onLoad={function () {
              this.onload = null;
              this.removeAttribute("media");
            }}
          />

          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,700&display=swap"
            />
          </noscript> */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
                    @font-face {
                        font-family: 'Source Code Pro';
                        font-weight: regular;
                        font-display: auto;
                        font-style: normal;
                        src: url('/fonts/SourceCodePro-Regular.ttf');
                    }
                    @font-face {
                        font-family: 'Source Code Pro';
                        font-weight: bold;
                        font-display: auto;
                        font-style: normal;
                        src: url('/fonts/SourceCodePro-Bold.ttf');
                    }
                    @font-face {
                        font-family: 'Source Code Pro';
                        font-weight: regular;
                        font-display: auto;
                        font-style: italic;
                        src: url('/fonts/SourceCodePro-Italic.ttf');
                    }
                    @font-face {
                        font-family: 'Source Code Pro';
                        font-weight: bold;
                        font-display: auto;
                        font-style: italic;
                        src: url('/fonts/SourceCodePro-BoldItalic.ttf');
                    }

                    @font-face {
                        font-family: 'Source Sans Pro';
                        font-weight: regular;
                        font-display: auto;
                        font-style: normal;
                        src: url('/fonts/SourceSansPro-Regular.ttf');
                    }
                    @font-face {
                        font-family: 'Source Sans Pro';
                        font-weight: bold;
                        font-display: auto;
                        font-style: normal;
                        src: url('/fonts/SourceSansPro-Bold.ttf');
                    }
                    @font-face {
                        font-family: 'Source Sans Pro';
                        font-weight: regular;
                        font-display: auto;
                        font-style: italic;
                        src: url('/fonts/SourceSansPro-Italic.ttf');
                    }
                    @font-face {
                        font-family: 'Source Sans Pro';
                        font-weight: 600;
                        font-display: auto;
                        font-style: semibold;
                        src: url('/fonts/SourceSansPro-SemiBold.ttf');
                    }
                    @font-face {
                        font-family: 'Source Sans Pro';
                        font-weight: bold;
                        font-display: auto;
                        font-style: italic;
                        src: url('/fonts/SourceSansPro-BoldItalic.ttf');
                    }
                    background: '#F7FAFC'
                    body {
                        font-family: 'Source Code Pro';
                    }
                    `,
            }}
          />
          {/*
          <style
            dangerouslySetInnerHTML={{
              __html: `
                    background: '#F7FAFC'
                    body {
                        font-family: 'Source Code Pro';
                    }
                    `,
            }}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
