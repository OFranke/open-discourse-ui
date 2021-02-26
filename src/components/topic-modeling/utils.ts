import { TopicData } from ".";
import queryString from "query-string";
import {
  BaseGroupFilter,
  BasePersonFilter,
  GroupFilter,
  PersonFilter,
} from "./index";

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

  const urlEncodedFiltersParam = queryString.stringify({
    filters: queryObject?.filters,
  });

  const url = `https://open-discourse-ui-git-implement-topic-modelling.ofranke.vercel.app/themensuche?imgUrl=${shareImageUrl}&${urlEncodedFiltersParam}`;
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

  const urlEncodedFiltersParam = queryString.stringify({
    filters: queryObject?.filters,
  });

  const url = `https://open-discourse-ui-git-implement-topic-modelling.ofranke.vercel.app/themensuche?imgUrl=${shareImageUrl}&${urlEncodedFiltersParam}`;
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

  const urlEncodedFiltersParam = queryString.stringify({
    filters: queryObject?.filters,
  });

  const url = `https://open-discourse-ui-git-implement-topic-modelling.ofranke.vercel.app/themensuche?imgUrl=${shareImageUrl}&${urlEncodedFiltersParam}`;

  const shareLink = queryString.stringify({ url: url });

  return `${baseUrl}?${shareLink}`;
};

export const getCleanedBaseFilterValues = (
  filter: GroupFilter | PersonFilter | any
): BaseGroupFilter | BasePersonFilter | undefined => {
  if (filter && filter.type == "group") {
    const keys: Array<keyof BaseGroupFilter> = [
      "abbreviation",
      "ageCat",
      "electionPlace",
      "gender",
      "topic",
      "job",
    ];

    keys.forEach((key) => {
      if (!(key in filter)) {
        console.log(`Missing Filter parameter: '${key}'`);
        return;
      }
    });
    const returnFilter: BaseGroupFilter = {
      abbreviation: filter.abbreviation,
      ageCat: filter.ageCat,
      electionPlace: filter.electionPlace,
      gender: filter.gender,
      job: filter.job,
      topic: filter.topic,
    };
    return returnFilter;
  }

  if (filter && filter.type == "person") {
    const keys: Array<keyof BasePersonFilter> = ["topic", "politicianIdQuery"];
    keys.forEach((key) => {
      if (!(key in filter)) {
        console.log(`Missing Filter parameter: '${key}'`);
        return;
      }
    });
    const returnFilter: BasePersonFilter = {
      topic: filter.topic,
      politicianIdQuery: filter.politicianIdQuery,
    };
    return returnFilter;
  }
  console.log("Invalid Filter parameters");
};

export const getCleanedFilterValuesFromUrlParams = (
  queryParams: any
): Array<GroupFilter | PersonFilter> | [] => {
  const returnFilters: Array<GroupFilter | PersonFilter> = [];
  if (queryParams?.filters) {
    try {
      const queryParamsFilterArray = JSON.parse(queryParams.filters);

      console.log(
        "\x1b[33m%s\x1b[0m",
        "%c >> queryParamsFilterArray",
        queryParamsFilterArray
      );
      console.log(
        "\x1b[33m%s\x1b[0m",
        "%c >> typeof queryParamsFilterArray",
        typeof queryParamsFilterArray
      );
      if (queryParamsFilterArray && queryParamsFilterArray?.length) {
        queryParamsFilterArray.map((filter: any) => {
          if (filter?.type == "group") {
            const keys: Array<keyof GroupFilter> = [
              "filterId",
              "color",
              "type",
              "abbreviation",
              "ageCat",
              "electionPlace",
              "gender",
              "topic",
              "job",
            ];
            keys.forEach((key) => {
              if (!(key in filter)) {
                console.log(`Missing Filter parameter: '${key}'`);
                return;
              }
            });
            const returnFilter: GroupFilter = {
              filterId: filter.filterId,
              color: filter.color,
              type: filter.type,
              abbreviation: filter.abbreviation,
              ageCat: filter.ageCat,
              electionPlace: filter.electionPlace,
              gender: filter.gender,
              job: filter.job,
              topic: filter.topic,
            };
            returnFilters.push(returnFilter);
          }
          if (filter && filter.type == "person") {
            const keys: Array<keyof PersonFilter> = [
              "filterId",
              "color",
              "type",
              "topic",
              "politicianIdQuery",
            ];
            keys.forEach((key) => {
              if (!(key in filter)) {
                console.log(`Missing Filter parameter: '${key}'`);
                return;
              }
            });
            const returnFilter: PersonFilter = {
              filterId: filter.filterId,
              color: filter.color,
              type: filter.type,
              topic: filter.topic,
              politicianIdQuery: filter.politicianIdQuery,
            };
            returnFilters.push(returnFilter);
          }
          console.log("Invalid Filter parameters");
        });
      }
    } catch (e) {
      console.log("Unexpected error when parsing URL parameters", e.message);
    }
  }
  return returnFilters;
};
