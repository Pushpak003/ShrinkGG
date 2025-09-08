import validator from "validator";

export const validateUrl = (req, res, next) => {
  const { url } = req.body;
  if (!url || !validator.isURL(url)) {
    return res.status(400).json({ error: "Invalid URL" });
  }
  next();
};
