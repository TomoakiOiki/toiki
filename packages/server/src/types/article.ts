export type NotionArticleSummary = {
  id: string;
  properties: {
    isPublished: boolean;
    tags: string[];
    title: string;
  };
  createdAt: string;
  updatedAt: string;
};
