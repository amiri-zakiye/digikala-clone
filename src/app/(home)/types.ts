import TrendingArticles from "./components/articles";
import { ArticlePosts } from "./components/articles/types";
import BestSellersWidget from "./components/bestSellers";
import { BestSellers } from "./components/bestSellers/types";
import FullSliderWidget from "./components/fullSlider";
import { FullSlider } from "./components/fullSlider/types";
import IncredibleOfferWidget from "./components/incredibleOffer";
import { IncredibleOffer } from "./components/incredibleOffer/types";

export type Widget =
  | { name: "best_selling_products_ordered"; data: BestSellers }
  | { name: "banners_home_web_zone_slider_new_v2"; data: FullSlider[] }
  | { name: "magazine_posts"; data: ArticlePosts }
  | { name: "incredible_offer_products_cart"; data: IncredibleOffer };

export type ApiResponse = {
  data: {
    widgets: Widget[];
  };
};

export const widgetTypeMap: {
  [K in Widget["name"]]: React.FC<{
    data: Extract<Widget, { name: K }>["data"];
  }>;
} = {
  best_selling_products_ordered: BestSellersWidget,
  banners_home_web_zone_slider_new_v2: FullSliderWidget,
  magazine_posts: TrendingArticles,
  incredible_offer_products_cart: IncredibleOfferWidget,
};
