import { NextApiRequest, NextApiResponse } from "next";
import { isWebUri } from "valid-url";
import { generateUrl, prisma } from "@/lib";

type DataUrl = {
  url: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method !== "POST") {
    return res.status(400).json({
      message: "Hola! Solo se pueden utilizar requisiciones POST.",
    });
  }

  const { url }: DataUrl = req.body;
  const host = req.headers.host;
  const { shortCode, curtUrl } = generateUrl(host!);

  if (!isWebUri(url)) {
    return res.status(400).json({
      statusCode: 400,
      error: {
        message: "Url inválida",
      },
      data: null,
    });
  }

  const result = await prisma.$transaction(async (tx) => {
    const originalUrl = await tx.url.findFirst({
      where: {
        originalUrl: url,
      },
    });

    if (originalUrl) return originalUrl;

    const newLink = await tx.url.create({
      data: {
        originalUrl: url,
        shortUrl: curtUrl,
        urlCode: shortCode,
      },
    });

    return newLink;
  });

  return res.status(200).json({
    statusCode: 200,
    error: null,
    data: {
      originalUrl: result.originalUrl,
      shortUrl: result.shortUrl,
      code: `LCurt.${result.urlCode}`,
    },
  });
}
