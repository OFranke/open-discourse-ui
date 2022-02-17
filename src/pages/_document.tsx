import Document, {
  DocumentContext,
  Html,
  Main,
  NextScript,
  Head,
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
                      body {
                          font-family: 'Source Code Pro, sans-serif';
                      }
                    `,
            }}
          />
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
