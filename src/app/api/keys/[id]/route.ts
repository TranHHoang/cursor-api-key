import { NextResponse } from "next/server";
import { apiKeys } from "@/lib/store";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const index = apiKeys.findIndex((key) => key.id === id);
  if (index === -1) {
    return NextResponse.json({ error: "API key not found" }, { status: 404 });
  }

  apiKeys.splice(index, 1);

  return NextResponse.json({ success: true });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { name, limit } = await request.json();

  const index = apiKeys.findIndex((key) => key.id === id);
  if (index === -1) {
    return NextResponse.json({ error: "API key not found" }, { status: 404 });
  }

  // Update only provided fields
  if (name !== undefined) {
    apiKeys[index].name = name;
  }
  if (limit !== undefined) {
    apiKeys[index].limit = limit;
  }

  return NextResponse.json(apiKeys[index]);
}
