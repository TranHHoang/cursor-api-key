import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { apiKey } = await request.json();

    // Fetch the API key from your database to validate it
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/keys`);

    if (!response.ok) {
      throw new Error("Failed to fetch API keys");
    }

    const keys = await response.json();
    const isValidKey = keys.some((key: { key: string }) => key.key === apiKey);

    if (!isValidKey) {
      return NextResponse.json({ error: "Invalid API key" }, { status: 401 });
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("API key validation failed:", error);
    return NextResponse.json(
      { error: "Failed to validate API key" },
      { status: 500 }
    );
  }
}
