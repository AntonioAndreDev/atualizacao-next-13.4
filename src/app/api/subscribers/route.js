import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Olá mundo!" });
}

export async function POST() {
  return NextResponse.json({ message: "Olá mundo!" });
}
