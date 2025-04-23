"use client";

import { Layout } from "@/components/layout";
import { Shield } from "lucide-react";

export default function ProtectedPage() {
  return (
    <Layout>
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20">
          <Shield className="h-12 w-12 text-green-600 dark:text-green-400" />
          <h1 className="text-2xl font-bold text-green-800 dark:text-green-200">
            Protected Route
          </h1>
          <p className="text-green-700 dark:text-green-300">
            This page is only accessible with a valid API key. Your API key has
            been successfully validated!
          </p>
        </div>
      </div>
    </Layout>
  );
}
