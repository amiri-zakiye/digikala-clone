import { NextResponse } from "next/server";
import widgets from "../../../../../data/widgets";

export async function GET() {
  return NextResponse.json(widgets);
}
