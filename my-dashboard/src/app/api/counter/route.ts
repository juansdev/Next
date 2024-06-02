import {NextResponse} from "next/server";
import {ICounterResponse} from "@/app/api/counter/interfaces";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request): Promise<NextResponse<ICounterResponse>> {
  return NextResponse.json({
    count: 100
  });
}

export async function POST(request: Request): Promise<NextResponse<ICounterResponse>> {
  return NextResponse.json({
    count: 100
  });
}