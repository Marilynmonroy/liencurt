import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@/lib/prisma";

type DataUrl = {
  url: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method !== "POST") {
    return res.status(400).json({
      message: "Hola! Solo se pueden utilizar requisiciones POST.",
    });
  }

  const { url }: DataUrl = req.body;
}
