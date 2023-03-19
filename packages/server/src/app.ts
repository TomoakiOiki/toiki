import express from "express";
import { json } from "body-parser";
import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import { NotionArticleSummary } from "./types/article";
import { fetchBlocksAndConvertToMarkdown } from "./utils/convert";

dotenv.config({ path: "../.env" });
const app = express();

export const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

app.use(json());

const port = process.env.PORT || 8888;

app.get("/article/:id", async (req, res) => {
  try {
    const markdown = await fetchBlocksAndConvertToMarkdown({ pageId: req.params.id });
    res.status(200).json(markdown);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/articles", async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID || "",
    });

    // notionの型定義微妙すぎるので諦めてany
    const data: NotionArticleSummary[] = response.results.map((page: any) => {
      return {
        id: page.id,
        properties: {
          isPublished: page.properties.status.status.name === "published" ? true : false,
          tags: page.properties.Tags.multi_select.map((tag: any) => tag.name),
          title: page.properties.Name?.title[0]?.plain_text || "",
        },
        createdAt: page.created_time,
        updatedAt: page.last_edited_time,
      };
    });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export { app };
