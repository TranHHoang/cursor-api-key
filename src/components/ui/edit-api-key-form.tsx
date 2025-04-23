import { useState, useEffect } from "react";
import { Button } from "./button";

interface EditApiKeyFormProps {
  id: string;
  initialName: string;
  initialLimit: number;
  onSubmit: (data: {
    id: string;
    name: string;
    limit: number;
  }) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
}

export function EditApiKeyForm({
  id,
  initialName,
  initialLimit,
  onSubmit,
  onCancel,
  isLoading,
}: EditApiKeyFormProps) {
  const [name, setName] = useState(initialName);
  const [limit, setLimit] = useState(String(initialLimit));

  useEffect(() => {
    setName(initialName);
    setLimit(String(initialLimit));
  }, [initialName, initialLimit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({
      id,
      name: name.trim(),
      limit: parseInt(limit, 10),
    });
  };

  const hasChanges =
    name.trim() !== initialName || parseInt(limit, 10) !== initialLimit;

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Update the name and limit for this API key.
      </p>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="keyName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Key Name — A unique name to identify this key
          </label>
          <input
            type="text"
            id="keyName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Key Name"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
            disabled={isLoading}
            required
          />
        </div>

        <div>
          <label
            htmlFor="limit"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Limit monthly usage*
          </label>
          <input
            type="number"
            id="limit"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            min="0"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
            disabled={isLoading}
            required
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            *If the combined usage of all your keys exceeds your plan&apos;s
            limit, all requests will be rejected.
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <Button
          type="button"
          onClick={onCancel}
          className="text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600"
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50"
          disabled={isLoading || !name.trim() || !hasChanges}
        >
          Save Changes
        </Button>
      </div>
    </form>
  );
}
