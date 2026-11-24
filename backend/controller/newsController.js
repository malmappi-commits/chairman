import News from "../models/news.js";
export async function createNews(req, res) {
  const info = req.body;
  try {
    const CreatedInfo = await News.create(info);
    return res.status(201).json({ CreatedInfo });
  } catch (error) {
    return res.status(500).json({ message: "could not create post" });
  }
}

export async function getNews(req, res) {
  try {
    const retrevedInfo = await News.find();
    return res.status(200).json({ retrevedInfo });
  } catch (error) {
    return res.status(500).json({ message: "could not get post" });
  }
}
