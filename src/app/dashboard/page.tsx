"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ApiKeyItem } from "@/components/ui/api-key-item";
import { UsageHeader } from "@/components/ui/usage-header";
import { Modal } from "@/components/ui/modal";
import { CreateApiKeyForm } from "@/components/ui/create-api-key-form";
import { EditApiKeyForm } from "@/components/ui/edit-api-key-form";
import { useToast } from "@/components/ui/toast";
import { ToastContainer } from "@/components/ui/toast-container";
import { Layout } from "@/components/layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface ApiKeyResponse {
  id: string;
  name: string;
  key: string;
  createdAt: string;
  usage: number;
  limit: number;
}

interface ApiKey {
  id: string;
  name: string;
  apiKey: string;
  createdAt: string;
  usage: number;
  limit: number;
}

export default function DashboardPage() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingKey, setEditingKey] = useState<ApiKey | null>(null);
  const { toasts, addToast, removeToast } = useToast();

  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  useEffect(() => {
    fetchApiKeys();
  }, []);

  const fetchApiKeys = async () => {
    try {
      setError(null);
      const response = await fetch("/api/keys");
      if (!response.ok) throw new Error("Failed to fetch API keys");
      const data = (await response.json()) as ApiKeyResponse[];
      setApiKeys(
        data.map((key) => ({
          ...key,
          apiKey: key.key,
          usage: key.usage || 0,
          limit: key.limit || 1000,
        }))
      );
    } catch (error) {
      setError("Failed to load API keys. Please try again later.");
      console.error("Error fetching API keys:", error);
      addToast("Failed to load API keys", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateKey = async ({
    name,
    limit,
  }: {
    name: string;
    limit: number;
  }) => {
    try {
      setIsCreating(true);
      setError(null);
      const response = await fetch("/api/keys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          limit,
        }),
      });

      if (!response.ok) throw new Error("Failed to create API key");

      const newKey = await response.json();
      setApiKeys([
        ...apiKeys,
        { ...newKey, apiKey: newKey.key, usage: 0, limit },
      ]);
      setShowCreateModal(false);
      addToast("API key created successfully", "success");
    } catch (error) {
      setError("Failed to create API key. Please try again.");
      console.error("Error creating API key:", error);
      addToast("Failed to create API key", "error");
    } finally {
      setIsCreating(false);
    }
  };

  const handleEditKey = async ({
    id,
    name,
    limit,
  }: {
    id: string;
    name: string;
    limit: number;
  }) => {
    try {
      setIsEditing(true);
      setError(null);
      const response = await fetch(`/api/keys/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          limit,
        }),
      });

      if (!response.ok) throw new Error("Failed to update API key");

      setApiKeys(
        apiKeys.map((key) => (key.id === id ? { ...key, name, limit } : key))
      );
      setEditingKey(null);
      addToast("API key updated successfully", "success");
    } catch (error) {
      setError("Failed to update API key. Please try again.");
      console.error("Error updating API key:", error);
      addToast("Failed to update API key", "error");
    } finally {
      setIsEditing(false);
    }
  };

  const handleDeleteKey = async (id: string) => {
    try {
      setError(null);
      const response = await fetch(`/api/keys/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete API key");

      setApiKeys(apiKeys.filter((key) => key.id !== id));
      addToast("API key deleted successfully", "success");
    } catch (error) {
      setError("Failed to delete API key. Please try again.");
      console.error("Error deleting API key:", error);
      addToast("Failed to delete API key", "error");
    }
  };

  const totalUsage = apiKeys.reduce((sum, key) => sum + key.usage, 0);

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl">
        <UsageHeader
          plan="Researcher"
          usedRequests={totalUsage}
          totalRequests={1000}
        />

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  API Keys
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  The key is used to authenticate your requests to the Research
                  API.
                </p>
              </div>
              <Button
                onClick={() => setShowCreateModal(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto"
              >
                + Create New Key
              </Button>
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800 text-red-700 dark:text-red-400">
              {error}
            </div>
          )}

          <div className="p-4 sm:p-6 overflow-x-auto">
            {isLoading ? (
              <div className="flex justify-center items-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
              </div>
            ) : apiKeys.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  No API keys found
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Create your first API key to get started
                </p>
              </div>
            ) : (
              <div className="min-w-full">
                <div className="hidden sm:flex text-sm font-medium text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-2">
                  <div className="w-1/4">NAME</div>
                  <div className="w-24 text-center">USAGE</div>
                  <div className="flex-1">KEY</div>
                  <div className="w-32 text-right">OPTIONS</div>
                </div>
                <div className="space-y-4 sm:space-y-0">
                  {apiKeys.map((apiKey) => (
                    <ApiKeyItem
                      key={apiKey.id}
                      id={apiKey.id}
                      name={apiKey.name}
                      apiKey={apiKey.apiKey}
                      usage={apiKey.usage}
                      onDelete={handleDeleteKey}
                      onEdit={() => setEditingKey(apiKey)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <Modal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          title="Create a new API key"
        >
          <CreateApiKeyForm
            onSubmit={handleCreateKey}
            onCancel={() => setShowCreateModal(false)}
            isLoading={isCreating}
          />
        </Modal>

        <Modal
          isOpen={!!editingKey}
          onClose={() => setEditingKey(null)}
          title="Edit API key"
        >
          {editingKey && (
            <EditApiKeyForm
              id={editingKey.id}
              initialName={editingKey.name}
              initialLimit={editingKey.limit}
              onSubmit={handleEditKey}
              onCancel={() => setEditingKey(null)}
              isLoading={isEditing}
            />
          )}
        </Modal>

        <ToastContainer toasts={toasts} removeToast={removeToast} />
      </div>
    </Layout>
  );
}
