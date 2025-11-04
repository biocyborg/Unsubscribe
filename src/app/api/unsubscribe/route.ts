// app/api/unsubscribe/route.ts
import { NextResponse } from "next/server";

interface RequestBody {
  email: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();

  if (!body.email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  console.log("Unsubscribe request:", body.email);

  return NextResponse.json({ success: true });
}
