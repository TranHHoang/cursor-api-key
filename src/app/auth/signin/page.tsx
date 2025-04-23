"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm space-y-4 rounded-lg border p-6 shadow-lg">
        <h2 className="text-center text-2xl font-bold">Sign In</h2>
        <div className="space-y-2">
          <Button
            className="w-full bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2"
            onClick={() => signIn("google")}
          >
            <Image
              src="https://authjs.dev/img/providers/google.svg"
              alt="Google logo"
              width={20}
              height={20}
            />
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
