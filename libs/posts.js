import fs from "fs";
import html from "remark-html";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";

const POSTS_DIR = path.join(process.cwd(), "posts");

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(POSTS_DIR);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

export const getPostData = async (id) => {
  const fullPath = path.join(POSTS_DIR, `${id}.md`);
  const content = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(content);
  return {
    id,
    content,
    ...matterResult.data,
  };
};
