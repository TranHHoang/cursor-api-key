"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { ToastContainer } from "@/components/ui/toast-container";
import Cookies from "js-cookie";

export default function PlaygroundPage() {
  const [apiKey, setApiKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toasts, addToast, removeToast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/protected", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ apiKey }),
      });

      if (!response.ok) {
        throw new Error("Invalid API key");
      }

      // Store validation state in cookie and redirect
      Cookies.set("validApiKey", "true", {
        expires: 1, // Expires in 1 day
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      });

      addToast("API key validated successfully!", "success");
      setApiKey("");
      router.push("/protected");
    } catch (error: unknown) {
      console.error("API key validation failed:", error);
      addToast("Invalid API key", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">API Playground</h1>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="apiKey"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Enter your API key
              </label>
              <input
                id="apiKey"
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700"
                placeholder="sk_test_..."
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
            >
              {isLoading ? "Validating..." : "Validate API Key"}
            </Button>
          </form>
        </div>
        <ToastContainer toasts={toasts} removeToast={removeToast} />
      </div>
    </Layout>
  );
}
