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
        className="bg-white/10 hover:bg-white/20 text-foreground border border-gray-300 flex items-center gap-2"
      >
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          width={20}
          height={20}
        />
        Sign in with Google
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-lg border border-gray-300">
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
          <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
            <span className="text-sm font-medium text-white">
              {session.user?.name?.charAt(0) || "U"}
            </span>
          </div>
        )}
        <span className="text-sm font-medium text-foreground">
          {session.user?.name}
        </span>
      </div>
      <Button
        onClick={() => signOut()}
        variant="link"
        className="text-foreground/80 hover:text-foreground flex items-center gap-2"
      >
        <LogOut className="h-4 w-4" />
        Sign Out
      </Button>
    </div>
  );
}
