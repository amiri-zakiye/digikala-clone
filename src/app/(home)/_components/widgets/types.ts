import BestSellingProductsOrderedWidget from "@/features/product/_components/bestSellingWidget/bestSellingProductsOrdered";

import { BestSellingProductsOrdered } from "@/features/product/_components/bestSellingWidget/types";
import { FullSlider } from "../fullSlider/types";
import { IncredibleOffer } from "@/features/product/_components/incredibleOfferWidget/types";
import { Magazine } from "@/features/magazine/types";
import FullSliderWidget from "../fullSlider";
import TrendingMagazine from "@/features/magazine/_components/trendingMagazineWidget/trendingMagazine";
import IncredibleOfferWidget from "@/features/product/_components/incredibleOfferWidget/incredibleOfferWidget";

export type Widget =
    | { name: "best_selling_products_ordered", data: BestSellingProductsOrdered }
    | { name: "banners_home_web_zone_slider_new_v2" ,data: FullSlider[] }
    | { name: "magazine_posts", data: Magazine[] }
    | { name: "incredible_offer_products_cart", data: IncredibleOffer }


export type ApiResponse = {
    widgets: Widget[]
}

export const widgetTypeMap: Record<Widget["name"], React.FC<any>> = {
    best_selling_products_ordered: BestSellingProductsOrderedWidget,
    banners_home_web_zone_slider_new_v2: FullSliderWidget,
    magazine_posts: TrendingMagazine,
    incredible_offer_products_cart: IncredibleOfferWidget,
};