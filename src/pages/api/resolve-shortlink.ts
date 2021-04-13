import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  fetch("", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.SHLINK_API_KEY || "",
    },
    body: JSON.stringify({
      shortCode: "",
      shortUrl: "",
      longUrl: "",
    }),
  });
  res.status(200).json({ name: "John Doe" });
};
