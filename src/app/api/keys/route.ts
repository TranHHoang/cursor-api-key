import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/lib/supabase";
import type { ApiKey } from "@/lib/types";

export async function GET() {
  const { data: apiKeys, error } = await supabase
    .from("api_keys")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(apiKeys);
}

export async function POST(request: Request) {
  const { name, rate_limit = 1000 } = await request.json();

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json(
      { error: "Name is required and must be a non-empty string" },
      { status: 400 }
    );
  }

  if (rate_limit && (typeof rate_limit !== "number" || rate_limit < 0)) {
    return NextResponse.json(
      { error: "Rate limit must be a positive number" },
      { status: 400 }
    );
  }

  const newKey: Omit<ApiKey, "id" | "created_at"> = {
    name: name.trim(),
    key: `sk-${uuidv4()}`,
    usage: 0,
    rate_limit,
  };

  const { data, error } = await supabase
    .from("api_keys")
    .insert([newKey])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
