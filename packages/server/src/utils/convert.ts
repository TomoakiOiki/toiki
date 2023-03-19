import { notion } from "../app";

function processBlock(block: any): string {
  console.log(block);
  switch (block.type) {
    case "paragraph":
      return block.paragraph.rich_text.map((text: any) => text.plain_text).join("");
    case "heading_1":
      return `# ${block.heading_1.rich_text.map((text: any) => text.plain_text).join("")}`;
    case "heading_2":
      return `## ${block.heading_2.rich_text.map((text: any) => text.plain_text).join("")}`;
    case "heading_3":
      return `### ${block.heading_3.rich_text.map((text: any) => text.plain_text).join("")}`;
    case "bulleted_list_item":
      return `* ${block.bulleted_list_item.rich_text.map((text: any) => text.plain_text).join("")}`;
    case "numbered_list_item":
      return `1. ${block.numbered_list_item.rich_text.map((text: any) => text.plain_text).join("")}`;
    case "to_do":
      return `- [${block.to_do.checked ? "x" : " "}] ${block.to_do.rich_text.map((text: any) => text.plain_text).join("")}`;
    default:
      return "";
  }
}

export async function fetchBlocksAndConvertToMarkdown({ pageId }: { pageId: string }): Promise<string> {
  let blocks: any[] = [];
  let cursor: string | undefined;
  let markdown = "";

  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });

    blocks = blocks.concat(response.results);
    cursor = response.next_cursor || undefined;
  } while (cursor);

  blocks.forEach((block, idx) => {
    markdown += processBlock(block);
    if (idx !== blocks.length - 1) {
      markdown += "\n";
    }
  });

  return markdown;
}
