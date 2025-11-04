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

  // 保存退订信息到 Netlify Forms
  // Netlify Runtime Forms 会自动收集所有 POST 到 /api/** 的请求
  // 你也可以把数据存到第三方，例如 FaunaDB, Supabase 等
  console.log("Unsubscribe request:", body.email);

  return NextResponse.json({ success: true });
}
