import { URL } from "@/types";

export type Magazine = {
    title: string,
    url: URL,
    image: string,
}

export type MagazinePosts = {
    news : Magazine[]
}