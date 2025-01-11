import { Magazine } from "@/features/magazine/types";
import FullSliderWidget from "./_components/fullSlider";
import { URL } from "@/types";
import TrendingMagazine from "@/features/magazine/_components/trendingMagazineWidget/trendingMagazine";
import BestSellingProductsOrderedWidget from "@/features/product/_components/bestSellingWidget/bestSellingProductsOrdered";
import { BestSellingProductsOrdered } from "@/features/product/types";

export type FullSlider = {
    title: string;
    image: string;  
    url: URL;
};

export type Widget =
    | { name: "best_selling_products_ordered", data: BestSellingProductsOrdered }
    | { name: "banners_home_web_zone_slider_new_v2" ,data: FullSlider[] }
    | { name: "magazine_posts", data: Magazine[] }
    // | { name: "deep_links", data: DeepLink[] }
    // | { name: "incredible_offer_products_cart", data: IncredibleOffer }


export type ApiResponse = {
    widgets: Widget[]
}

export const widgetTypeMap: Record<Widget["name"], React.FC<any>> = {
    best_selling_products_ordered: BestSellingProductsOrderedWidget,
    banners_home_web_zone_slider_new_v2: FullSliderWidget,
    magazine_posts: TrendingMagazine,
    // deep_links: DeepLinks,
    // incredible_offer_products_cart: IncredibleProducts,
};