import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // simulate server processing
  await new Promise((r) => setTimeout(r, 500));

  return NextResponse.json({
    orderId: `ord_${Date.now()}`,
    status: "created",
    received: body
  });
}
