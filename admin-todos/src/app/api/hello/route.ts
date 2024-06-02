import {NextResponse} from "next/server";

export async function GET(_: Request) {
  return NextResponse.json({
    hello: "world"
  });
}

export async function POST(_: Request) {
  return NextResponse.json({
    hello: "world",
    method: "POST"
  });
}