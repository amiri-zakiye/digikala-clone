import { NextResponse } from "next/server";
import widgets from "../../../../data/widgets"

export async function GET(request: Request) {

    return NextResponse.json(widgets);
}

   