import { nanoid } from "nanoid";
import { createUrl, findUrlByCode } from "../models/urlModel.js";

export const generateShortUrl = async (userId, originalUrl) => {
  const shortCode = nanoid(8);
  return await createUrl(userId, originalUrl, shortCode);
};

export const getOriginalUrl = async (code) => {
  return await findUrlByCode(code);
};
