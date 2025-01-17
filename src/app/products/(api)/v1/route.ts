import { NextResponse } from "next/server";
import data  from "../../../../../data/products"
import { ShopResponse } from "../../_components/filtersSidebar/types";

export async function GET() {
    const response = {...data} as ShopResponse
    return NextResponse.json(response);
}
