import FullSlider from "./_components/fullSlider";
import { URL } from "@/types.const";

export type FullSliderData = {
    title: string;
    image: string;
    url: URL;
};

export type Widget =
    // | { name: "best_selling_products_ordered", data: ProductsOrderedType }
    | { name: "banners_home_web_zone_slider_new_v2" ,data: FullSliderData[] }
    // | { name: "magazine_posts", data: MagazinePosts }
    // | { name: "deep_links", data: DeepLink[] }
    // | { name: "incredible_offer_products_cart", data: IncredibleOffer }


export type ApiResponse = {
    widgets: Widget[]
}

export const widgetTypeMap: Record<Widget["name"], React.FC<any>> = {
    // best_selling_products_ordered: ProductsOrdered,
    banners_home_web_zone_slider_new_v2: FullSlider,
    // magazine_posts: MagazinePosts,
    // deep_links: DeepLinks,
    // incredible_offer_products_cart: IncredibleProducts,
};