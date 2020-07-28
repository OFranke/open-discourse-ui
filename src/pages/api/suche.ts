import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<any> {
  try {
    console.log("\x1b[33m%s\x1b[0m", ">> data data data");
    const {
      query: { nameQuery, contentQuery, positionQuery, fromDate, toDate },
    } = req;
    console.log("\x1b[33m%s\x1b[0m", ">> query", req.query);
    console.log(
      "\x1b[33m%s\x1b[0m",
      ">> nameQuery, contentQuery, positionQuery, fromDate, toDate",
      nameQuery,
      contentQuery,
      positionQuery,
      fromDate,
      toDate
    );
    const result = await fetch("https://od-graphql.herokuapp.com/graphql", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: `{"operationName":"Search","variables":{"first":50,"contentQuery":"${
        contentQuery || ""
      }","positionQuery":"${positionQuery || ""}","nameQuery":"${
        nameQuery || ""
      }"${fromDate ? `,"fromDate":"${fromDate}"` : ""}${
        toDate ? `,"toDate":"${toDate}"` : ""
      }},"query":"query Search($nameQuery: String, $contentQuery: String, $positionQuery: String, $fromDate: Date, $toDate: Date, $first: Int!) {\\n  ftSearchSpeeches(first: $first, nameQuery: $nameQuery, contentQuery: $contentQuery, positionQuery: $positionQuery, fromDate: $fromDate, toDate: $toDate) {\\n    rank\\n    id\\n    firstName\\n    lastName\\n    position\\n    date\\n    documentUrl\\n    speechContent\\n    __typename\\n  }\\n}\\n"}`,

      //   body: `{"operationName":"Search","variables":{"nameQuery":"${nameQuery}","contentQuery":"${contentQuery}","positionQuery":"${positionQuery}",${
      //     fromDate ? `"fromDate":"${fromDate}",` : ""
      //   }${
      //     toDate ? `"toDate":"${toDate}",` : ""
      //   }"first":1},"query":"query Search($nameQuery: String, $contentQuery: String, $positionQuery: String, $fromDate: Date, $toDate: Date, $first: Int!) {\\n  ftSearchSpeeches(first: $first, nameQuery: $nameQuery, contentQuery: $contentQuery, positionQuery: $positionQuery, fromDate: $fromDate, toDate: $toDate) {\\n    rank\\n    id\\n    firstName\\n    lastName\\n    position\\n    date\\n    documentUrl\\n    speechContent\\n    __typename\\n  }\\n}\\n"}`,
    });
    console.log("\x1b[33m%s\x1b[0m", ">> resiuklt", result.status);
    const searchResult = await result.json();
    console.log("\x1b[33m%s\x1b[0m", ">> searchResult", searchResult);
    return res.status(200).json(searchResult);
    // c searchResult;
  } catch (error) {
    console.log("\x1b[33m%s\x1b[0m", ">> error", error);
    return res.status(error.status || 500).end("Unknown error.");
  }
  // res.status(200).json({ name: "John Doe" });
}

// fetch("https://od-graphql.herokuapp.com/graphql", {
//   headers: {
//     accept: "*/*",
//     "accept-language": "de,en;q=0.9,fr-CH;q=0.8,fr;q=0.7",
//     "cache-control": "no-cache",
//     "content-type": "application/json",
//     pragma: "no-cache",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "cross-site",
//   },
//   referrer:
//     "https://opendiscourse.webflow.io/suche?contentQuery=wirtschaft&fromDate=1971-01-27&nameQuery=",
//   referrerPolicy: "no-referrer-when-downgrade",
//   body:
//     '{"operationName":"Search","variables":{"first":50,"contentQuery":"wirtschaft","nameQuery":"","fromDate":"1971-01-27"},"query":"query Search($nameQuery: String, $contentQuery: String, $positionQuery: String, $fromDate: Date, $toDate: Date, $first: Int!) {\\n  ftSearchSpeeches(first: $first, nameQuery: $nameQuery, contentQuery: $contentQuery, positionQuery: $positionQuery, fromDate: $fromDate, toDate: $toDate) {\\n    rank\\n    id\\n    firstName\\n    lastName\\n    position\\n    date\\n    documentUrl\\n    speechContent\\n    __typename\\n  }\\n}\\n"}',
//   method: "POST",
//   mode: "cors",
//   credentials: "omit",
// });
