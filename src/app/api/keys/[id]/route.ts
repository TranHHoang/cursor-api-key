import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import type { ApiKey } from "@/lib/types";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // Check if the key exists first
  const { data: existingKey, error: fetchError } = await supabase
    .from("api_keys")
    .select("id")
    .eq("id", id)
    .single();

  if (fetchError || !existingKey) {
    return NextResponse.json({ error: "API key not found" }, { status: 404 });
  }

  const { error } = await supabase.from("api_keys").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { name, rate_limit } = await request.json();

  if (
    name !== undefined &&
    (typeof name !== "string" || name.trim().length === 0)
  ) {
    return NextResponse.json(
      { error: "Name must be a non-empty string" },
      { status: 400 }
    );
  }

  if (
    rate_limit !== undefined &&
    (typeof rate_limit !== "number" || rate_limit < 0)
  ) {
    return NextResponse.json(
      { error: "Rate limit must be a positive number" },
      { status: 400 }
    );
  }

  const updates: Partial<Pick<ApiKey, "name" | "rate_limit">> = {};
  if (name !== undefined) updates.name = name.trim();
  if (rate_limit !== undefined) updates.rate_limit = rate_limit;

  const { data, error } = await supabase
    .from("api_keys")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
