import { generateShortUrl, getOriginalUrl } from "../services/urlService.js";

export const shortenUrl = async (req, res) => {
  try {
    const { url } = req.body;
    const newUrl = await generateShortUrl(req.user.id, url);
    res.json({ shortUrl: `${process.env.BASE_URL}/${newUrl.short_code}` });
  } catch (err) {
    res.status(500).json({ error: "Shortening failed" });
  }
};

export const redirectUrl = async (req, res) => {
  try {
    const code = req.params.code;
    const url = await getOriginalUrl(code);
    if (!url) return res.status(404).json({ error: "Not found" });
    res.redirect(url.original_url);
  } catch (err) {
    res.status(500).json({ error: "Redirect failed" });
  }
};
