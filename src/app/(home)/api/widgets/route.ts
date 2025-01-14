import { NextResponse } from "next/server";
import widgets from "../../../../../data/widgets"

export async function GET(_request: Request) {
    return NextResponse.json(widgets);
}

   