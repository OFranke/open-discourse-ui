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
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          /> */}

          <style
            dangerouslySetInnerHTML={{
              __html: `
                    background: '#F7FAFC'
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
                        font-family: 'Source Code Pro';
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
