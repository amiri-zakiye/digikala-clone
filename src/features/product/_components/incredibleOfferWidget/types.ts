import { Product } from "../../types"

export type IncredibleOffer = {
    title: string,
    see_more_url: URL,
    products_count: number,
    products : Product[]
}