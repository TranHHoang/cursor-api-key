"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./button";
import Image from "next/image";
import { LogOut } from "lucide-react";

export function AuthButton() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Button
        onClick={() => signIn("google")}
        className="bg-black hover:bg-black/90 text-white border-none shadow-sm flex items-center gap-2 transition-colors"
        size="lg"
      >
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          width={20}
          height={20}
          className="bg-white rounded-full p-0.5"
        />
        Sign in with Google
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-4 bg-gradient-to-r from-primary/10 to-primary-foreground/10 px-4 py-2 rounded-lg border border-primary/20">
      <div className="flex items-center gap-2">
        {session.user?.image ? (
          <Image
            src={session.user.image}
            alt={session.user.name || "User avatar"}
            width={32}
            height={32}
            className="rounded-full"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary-foreground flex items-center justify-center">
            <span className="text-sm font-medium text-primary-foreground">
              {session.user?.name?.charAt(0) || "U"}
            </span>
          </div>
        )}
        <span className="text-sm font-medium">{session.user?.name}</span>
      </div>
      <Button
        onClick={() => signOut()}
        variant="ghost"
        size="sm"
        className="text-primary hover:text-primary/80 hover:bg-primary/10 flex items-center gap-2"
      >
        <LogOut className="h-4 w-4" />
        Sign Out
      </Button>
    </div>
  );
}
