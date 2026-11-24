import mongoose from "mongoose";
const newsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Announcements", "Press Releases", "Activities", "Public Notices"],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);
const News = mongoose.model("News", newsSchema);
export default News;
