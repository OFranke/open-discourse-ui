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
const generateImage = async (): Promise<string> => {
  //   const response = await fetch(
  //     "https://api.opendiscourse.de:5300/screenshot?url=https://blabla&selector=#div-id"
  //   );
  //   const result: GenerateImageResponse = await response.json();
  //     return result.fileName;
  return "https://fra1.digitaloceanspaces.com/opendiscourse/ad1dd050-6c72-4c43-998e-f193cd9c2712.jpg";
  //   return new Promise((resolve, _reject) => {
  //     setTimeout(
  //       () =>
  //         resolve(
  //           "https://opendiscourse.de/images/statistics/wer_kommt_zu_wort.png"
  //         ),
  //       1000
  //     );
  //   });
};
export const generateTwitterShareLink = async () => {
  const baseUrl = "https://twitter.com/intent/tweet";

  const shareImageUrl = await generateImage();
  console.log("\x1b[33m%s\x1b[0m", "%c >> shareImageUrl", shareImageUrl);

  const url = `https://open-discourse-ui-git-implement-topic-modelling.ofranke.vercel.app/themensuche?imgUrl=${shareImageUrl}`;
  const text = "test";
  const via = "OpenDiscourseDE";
  const hashtags = ["opendiscourse", "bla"];

  const shareLink = queryString.stringify({ url, text, via, hashtags });
  return `${baseUrl}?${shareLink}`;
};

export const generateFacebookShareLink = async () => {
  const baseUrl = "https://www.facebook.com/sharer/sharer.php";

  const shareImageUrl = await generateImage();
  console.log(
    "\x1b[33m%s\x1b[0m",
    "%c >> facenook shareImageUrl",
    shareImageUrl
  );

  const url = `https://open-discourse-ui-git-implement-topic-modelling.ofranke.vercel.app/themensuche?imgUrl=${shareImageUrl}`;
  const text = "test";

  const shareLink = queryString.stringify({ u: url, quote: text });
  return `${baseUrl}?${shareLink}`;
};

export const generateLinkedInShareLink = async () => {
  const baseUrl = "https://www.linkedin.com/sharing/share-offsite/";

  const shareImageUrl = await generateImage();
  console.log(
    "\x1b[33m%s\x1b[0m",
    "%c >> linkedin shareImageUrl",
    shareImageUrl
  );

  const url = `https://open-discourse-ui-git-implement-topic-modelling.ofranke.vercel.app/themensuche?imgUrl=${shareImageUrl}`;

  const shareLink = queryString.stringify({ url: url });
  console.log(
    "\x1b[33m%s\x1b[0m",
    "%c >> linkedinUrl",
    `${baseUrl}?${shareLink}`
  );
  return `${baseUrl}?${shareLink}`;
};
