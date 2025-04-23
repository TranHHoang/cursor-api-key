import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { apiKeys, ApiKey } from "@/lib/store";

export async function GET() {
  return NextResponse.json(apiKeys);
}

export async function POST(request: Request) {
  const { name } = await request.json();

  const newKey: ApiKey = {
    id: uuidv4(),
    name,
    key: `sk-${uuidv4()}`,
    createdAt: new Date().toISOString(),
    usage: 0,
    limit: 1000,
  };

  apiKeys.push(newKey);

  return NextResponse.json(newKey);
}
