import express from "express";
import serverlessExpress from "aws-serverless-express";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

const app = express();
app.use(express.json());

app.get("/fetchNotionData", async (req, res) => {
  // Notion APIを叩いてデータを取得する処理を実装
  res.json({ message: "Data fetched from Notion API" });
});

const server = serverlessExpress.createServer(app);

export async function handler(event: APIGatewayProxyEvent, context: Context) {
  return serverlessExpress.proxy(server, event, context);
}
