export interface ApiKey {
  id: string;
  name: string;
  key: string;
  created_at: string;
  usage: number;
  rate_limit: number;
}

export type ApiKeyCreate = Omit<ApiKey, "id" | "created_at">;
