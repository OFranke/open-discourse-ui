import queryString from "query-string";
import { ApiFilterParty, ApiFilterPerson, TopicDataEntry } from "./types";
import { TopicData, FormFilterParams, FilterParams } from "./types";
import { partyFilterOptions, politicianFilterOptions } from "./filters";

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

export const getApiCallParamsFromUrlParams = (
  filter: FilterParams
): ApiFilterPerson | ApiFilterParty | undefined => {
  if (!filter.topics || !filter.actor) {
    console.log("No filter topic/actor specified.");
    return undefined;
  }

  const actorIsParty = partyFilterOptions.find(
    (partyFilter) => partyFilter.key == filter.actor
  );
  if (actorIsParty) {
    const apiFilters: ApiFilterParty = {
      topics: filter.topics,
      party: filter.actor,
      ...(filter.job && { job: filter.job }),
      ...(filter.gender && { gender: filter.gender }),
      ...(filter.state && { state: filter.state }),
      ...(filter.age && { age: filter.age }),
    };
    return apiFilters;
  }

  const actorIsPolitician = politicianFilterOptions.find(
    (politicianFilter) => politicianFilter.key == filter.actor
  );
  if (actorIsPolitician) {
    const apiFilters: ApiFilterPerson = {
      topics: filter.topics,
      politicians: filter.actor,
    };
    return apiFilters;
  }

  return undefined;
};

export const getCleanedFilterValuesFromUrlParams = (
  queryParams: any
): Array<FilterParams> | [] => {
  const returnFilters: Array<FilterParams> = [];
  if (queryParams?.filters) {
    try {
      const queryParamsFilterArray = JSON.parse(queryParams.filters);

      if (queryParamsFilterArray && queryParamsFilterArray?.length) {
        queryParamsFilterArray.map((filter: FilterParams) => {
          const keys: Array<keyof FilterParams> = [
            "filterId",
            "color",
            "actor",
            "age",
            "state",
            "gender",
            "topics",
            "job",
          ];
          keys.forEach((key) => {
            if (!(key in filter)) {
              console.log(`Missing Filter parameter: '${key}'`);
              return;
            }
          });
          const returnFilter: FilterParams = {
            filterId: filter.filterId,
            color: filter.color,
            actor: filter.actor,
            age: filter.age,
            state: filter.state,
            gender: filter.gender,
            job: filter.job,
            topics: filter.topics,
          };
          returnFilters.push(returnFilter);
          return;
        });
      }
    } catch (e) {
      console.log("Unexpected error when parsing URL parameters", e.message);
    }
  }
  return returnFilters;
};

const getAverage = (...args: number[]) => {
  let sum = 0;
  args.map((arg) => (sum += arg));
  return sum / args.length;
};
export const smoothTopicResultData = (
  data: TopicDataEntry[]
): TopicDataEntry[] => {
  const averageData = data.reduce(
    (
      accumulator: TopicDataEntry[],
      currentValue: TopicDataEntry,
      currentIndex,
      initialValue
    ) => {
      // if first or last item, dont calculate average
      if (currentIndex == 0 || currentIndex == initialValue.length - 1) {
        return [
          ...accumulator,
          {
            ...currentValue,
            annotation: { headline: "1 blöde FDP" },
          },
        ];
        // return [...accumulator, currentValue];
      }

      // get average of item before, currentItem and item after
      const averageY = getAverage(
        initialValue[currentIndex - 1].y,
        initialValue[currentIndex].y,
        initialValue[currentIndex + 1].y
      );
      return [
        ...accumulator,
        {
          x: currentValue.x,
          y: averageY,
        },
      ];
    },
    []
  );
  return averageData;
};
