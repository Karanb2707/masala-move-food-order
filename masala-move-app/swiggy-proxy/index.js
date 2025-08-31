import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

// Proxy all requests starting with /api/swiggy
app.use("/api/swiggy", async (req, res) => {
  const targetUrl = "https://www.swiggy.com" + req.url.replace("/api/swiggy", "");
  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0", // Swiggy sometimes blocks requests without headers
      }
    });
    const data = await response.text(); // sometimes not pure JSON
    res.send(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy failed", details: err.message });
  }
});

app.listen(5000, () => {
  console.log("✅ Proxy running at http://localhost:5000");
});
