import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const memoDirectory = join(process.cwd(), 'memo');

export const getMemos = () => {
  return fs.readdirSync(memoDirectory);
};

export const getMemoByFile = (filename: string, fields: string[] = []) => {
  const filenameWithoutExt = filename.replace(/\.md$/, '');
  const fullPath = join(memoDirectory, `${filenameWithoutExt}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: {
    [key: string]: string;
  } = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = filenameWithoutExt;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllMemo = (fields: string[] = []) => {
  const memos = getMemos();
  const memo = memos
    .map((file) => getMemoByFile(file, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return memo;
};
