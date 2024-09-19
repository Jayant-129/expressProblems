import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return NextResponse.json({ message: "Hello from the API!" });
}

export function POST(req: NextRequest) {
  return NextResponse.json({ message: "Hello from the API!" });
}

export function PUT(req: NextRequest) {
  return NextResponse.json({ message: "Hello from the API!" });
}

export function DELETE(req: NextRequest) {
  return NextResponse.json({ message: "Hello from the API!" });
}