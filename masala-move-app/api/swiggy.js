export default async function handler(req, res) {
  try {
    const targetUrl = "https://www.swiggy.com" + req.url.replace("/api/swiggy", "");

    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const text = await response.text();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: "Proxy failed", details: err.message });
  }
}
