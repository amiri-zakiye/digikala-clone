
import { NextResponse } from "next/server";
import megaMenu from "../../../../data/megaMenu"

export async function GET(request: Request) {
    return NextResponse.json(megaMenu.data);
}