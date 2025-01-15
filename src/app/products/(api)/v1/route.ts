import { NextResponse } from "next/server";
import data  from "../../../../../data/products"
import { ShopResponse } from "../../_components/types";

export async function GET() {
    const response = {...data} as ShopResponse
    return NextResponse.json(response);
}
