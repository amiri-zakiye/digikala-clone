import { Product } from "@/features/product/types";

export const toFarsiNumber = (num : string | number) => {
    if(!num) return ""
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/\d/g, (digit) => farsiDigits[Number(digit)]);
};

export const getMaxTimer = (products: Product[]) => {
    products.map(item => console.log(item.default_variant.price.timer))
    console.log(Math.max(...products.map(product => product.default_variant.price.timer)))
    return Math.max(...products.map(product => product.default_variant.price.timer)) || 0;
};

export function replace(str: string, valuesToReplace: string[], replacement: string) {
    const regex = new RegExp(valuesToReplace.join("|"), "g");
    return str.replace(regex, replacement);
}

export const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms);
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    return { hours, minutes, seconds };
};
