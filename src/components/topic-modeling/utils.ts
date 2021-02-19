import { TopicData } from ".";
import queryString from "query-string";

const getRandomData = () => {
  const arr = Array.from({ length: 71 }, (v, k) => {
    return {
      x: k + 1950,
      y: Math.random() * (0.02 - 0.001) + 0.001,
    };
  });
  return arr;
};

export const mockFetchData = async (id: string): Promise<TopicData> => {
  return new Promise((resolve, _reject) => {
    setTimeout(
      () => resolve({ id, data: getRandomData() }),
      Math.random() * (3000 - 1000) + 1000
    );
  });
};

interface GenerateImageResponse {
  fileName: string;
}

interface ScreenshotApiParams {
  urlPath: string;
  selector: string;
  queryObject: any;
}

const generateImage = async ({
  urlPath,
  selector,
  queryObject,
}: ScreenshotApiParams): Promise<string> => {
  console.log("\x1b[33m%s\x1b[0m", "%c >> ", urlPath, selector, queryObject);
  if (!process.env.HOST_URL) {
    throw new Error("environment variable HOST_URL not found.");
  }

  const canonicalUrl = new URL(urlPath, process.env.HOST_URL).href;
  const canonicalUrlWithoutTrailingSlash = canonicalUrl.replace(/\/$/, "");

  const urlEncodedFiltersParam = queryString.stringify({
    filters: queryObject?.filters,
  });
  const screenshotUrl = `${canonicalUrlWithoutTrailingSlash}?${urlEncodedFiltersParam}`;

  const urlEncodedFetchParams = queryString.stringify({
    selector,
    url: screenshotUrl,
  });
  const response = await fetch(
    `https://api.opendiscourse.de:5300/screenshot?${urlEncodedFetchParams}`
  );

  const result: GenerateImageResponse = await response.json();
  return `https://fra1.digitaloceanspaces.com/opendiscourse/${result.fileName}`;
};
export const generateTwitterShareLink = async ({
  urlPath,
  selector,
  queryObject,
}: ScreenshotApiParams) => {
  const baseUrl = "https://twitter.com/intent/tweet";

  const shareImageUrl = await generateImage({
    urlPath,
    selector,
    queryObject,
  });

  const url = `https://open-discourse-ui-git-implement-topic-modelling.ofranke.vercel.app/themensuche?imgUrl=${shareImageUrl}`;
  const text = "test";
  const via = "OpenDiscourseDE";
  const hashtags = ["opendiscourse"];

  const shareLink = queryString.stringify({ url, text, via, hashtags });
  return `${baseUrl}?${shareLink}`;
};

export const generateFacebookShareLink = async ({
  urlPath,
  selector,
  queryObject,
}: ScreenshotApiParams) => {
  const baseUrl = "https://www.facebook.com/sharer/sharer.php";

  const shareImageUrl = await generateImage({
    urlPath,
    selector,
    queryObject,
  });

  const url = `https://open-discourse-ui-git-implement-topic-modelling.ofranke.vercel.app/themensuche?imgUrl=${shareImageUrl}`;
  const text = "test";

  const shareLink = queryString.stringify({ u: url, quote: text });
  return `${baseUrl}?${shareLink}`;
};

export const generateLinkedInShareLink = async ({
  urlPath,
  selector,
  queryObject,
}: ScreenshotApiParams) => {
  const baseUrl = "https://www.linkedin.com/sharing/share-offsite/";

  const shareImageUrl = await generateImage({
    urlPath,
    selector,
    queryObject,
  });

  const url = `https://open-discourse-ui-git-implement-topic-modelling.ofranke.vercel.app/themensuche?imgUrl=${shareImageUrl}`;

  const shareLink = queryString.stringify({ url: url });

  return `${baseUrl}?${shareLink}`;
};
