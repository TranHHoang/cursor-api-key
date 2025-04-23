import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email?: string | null;
      name?: string | null;
      image?: string | null;
    };
  }
}

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  created_at: string;
  usage: number;
  rate_limit: number;
}

export type ApiKeyCreate = Omit<ApiKey, "id" | "created_at">;

export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  created_at: string;
  last_login: string;
}
