import { URL } from "@/types/global.types";

export type Article = {
  title: string;
  url: URL;
  image: string;
};

export type ArticlePosts = {
  news: Article[];
};
