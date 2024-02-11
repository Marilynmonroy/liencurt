//nanoid: https://github.com/ai/nanoid?tab=readme-ov-file#custom-alphabet-or-size

import { customAlphabet } from "nanoid";

export default (path: string) => {
  const nanoid = customAlphabet("1234567890abcdef", 7);
  const shortCode = nanoid();

  return {
    shortCode,
    curtUrl: `http://${path}/api/${shortCode}`,
  };
};
