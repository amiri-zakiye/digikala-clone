import { NextResponse } from "next/server";
import megaMenu from "../../../../data/megaMenu";

export async function GET() {
  return NextResponse.json(megaMenu.data[0].data.data);
}
