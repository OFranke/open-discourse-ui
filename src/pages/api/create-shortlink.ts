import type { NextApiRequest, NextApiResponse } from "next";
import queryString from "query-string";
import * as path from "path";
export interface CreateShortlinkApiResponse {
  shortUrl: string;
  longUrl: string;
  shortCode: string;
}

export type CreateShortlinkApiError = {
  message: string;
};

interface ScreenshotApiParams {
  urlPath: string;
  selector: string;
  queryObject: any;
}

interface GenerateImageResponse {
  fileName: string;
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

export default async (
  req: NextApiRequest,
  res: NextApiResponse<CreateShortlinkApiResponse | CreateShortlinkApiError>
) => {
  const { urlPath, selector, queryObject } = JSON.parse(req.body);
  if (!urlPath || !selector || !queryObject) {
    throw new Error("Undefined urlPath, selector, queryObject");
  }
  if (!process.env.SHLINK_API_KEY) {
    throw new Error("Env variable SHLINK_API_KEY is missing.");
  }

  const urlEncodedFiltersParam = queryString.stringify({
    filters: queryObject?.filters,
  });

  const shareImageUrl = await generateImage({
    urlPath,
    selector,
    queryObject,
  });

  const url = new URL(
    `diskursanalyse?imgUrl=${shareImageUrl}&${urlEncodedFiltersParam}`,
    process.env.HOST_URL
  ).href;

  const shareUrlResponse: CreateShortlinkApiResponse = await fetch(
    "https://api.opendiscourse.de/rest/v2/short-urls",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.SHLINK_API_KEY,
      },
      body: JSON.stringify({
        longUrl: url,
      }),
    }
  )
    .then((shareResponse) => shareResponse.json())
    .catch((err) => {
      console.log(err);
      // @TODO: find way for typescript to scream if you add shortUrl property
      res.status(500).json({ message: "Could not create shortlink." });
    });

  const shortUrl = new URL(
    path.join("l", shareUrlResponse.shortCode),
    process.env.HOST_URL
  ).href;

  return res.status(200).json({ ...shareUrlResponse, shortUrl });
};
