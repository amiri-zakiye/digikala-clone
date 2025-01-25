import { URL } from "@/types/global.types";

export type Product = {
  id: number;
  title_fa: string;
  url: URL;
  images: {
    main: {
      url: string[];
    };
    list?: ProductGallery;
  };
  default_variant: ProductVariants;
  data_layer: {
    brand: string;
    item_category2: string;
    item_category3: string;
    item_category4: string;
    item_category5: string;
    dimension9: number;
  };
  rating: {
    count: number;
  };
  review: {
    attributes: ProductAttributes;
  };
  category: {
    return_reason_alert: string;
  };
};

export type ProductVariants = {
  rate: number;
  price: ProductPricing;
  shipment_methods: {
    has_lead_time: boolean;
    providers: ProductShipmentMethod[];
  };
  seller: ProductSeller;
};

export type ProductGalleryItem = {
  url: string[];
};

export type ProductGallery = ProductGalleryItem[];

export type ProductAttributes = [
  {
    title: string;
    values: string[];
  }
];

export type ProductSeller = {
  title: string;
  grade: {
    label: string;
    color: string;
  };
};
export type ProductPricing = {
  selling_price: number;
  rrp_price: number;
  discount_percent: number;
  timer: number;
};

export type ProductShipmentMethod = {
  title: string;
  type: "jet" | "digikala";
};
