import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method !== "GET") {
    return res.status(400).json({
      message: "Hola! Solo se pueden utilizar requisiciones GET.",
    });
  }

  const { code } = req.query;

  if (typeof code == "string") {
    const result = await prisma.$transaction(async (tx) => {
      const url = await tx.url.findUnique({
        where: {
          urlCode: code,
        },
      });

      if (!url) return null;

      return url;
    });

    if (!result) {
      return res.status(400).json({
        statusCode: 400,
        error: {
          message: "Url corto inválido!",
        },
        data: null,
      });
    }

    return res.redirect(result.originalUrl);
  }
}
