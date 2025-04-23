export interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdAt: string;
  usage?: number;
  limit?: number;
}

// Declare the global variable
declare global {
  var _apiKeys: ApiKey[];
}

// Initialize the global store if it doesn't exist
if (!global._apiKeys) {
  global._apiKeys = [];
}

// Export a reference to the global store
export const apiKeys = global._apiKeys;
