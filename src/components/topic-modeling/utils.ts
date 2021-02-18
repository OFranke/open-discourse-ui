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

const generateImage = (): Promise<any> => {
  return new Promise((resolve, _reject) => {
    setTimeout(
      () =>
        resolve(
          "https://opendiscourse.de/images/statistics/wer_kommt_zu_wort.png"
        ),
      1000
    );
  });
};
export const generateTwitterShareLink = async () => {
  const baseUrl = "https://twitter.com/intent/tweet";

  const shareImageUrl = await generateImage();

  const url = `https://open-discourse-ui-git-implement-topic-modelling.ofranke.vercel.app/ssr?${shareImageUrl}`;
  const text = "test";
  const via = "OpenDiscourseDE";
  const hashtags = ["opendiscourse", "bla"];

  const shareLink = queryString.stringify({ url, text, via, hashtags });
  return `${baseUrl}?${shareLink}`;
};
