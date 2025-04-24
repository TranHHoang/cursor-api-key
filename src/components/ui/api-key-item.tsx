import { useState } from "react";
import { Button } from "./button";
import { Copy, Check, Eye, Edit, Trash } from "lucide-react";
import { cn } from "@/lib/utils";

interface ApiKeyItemProps {
  id: string;
  name: string;
  apiKey: string;
  usage: number;
  onDelete: (id: string) => void;
  onEdit: () => void;
}

export function ApiKeyItem({
  id,
  name,
  apiKey,
  usage,
  onDelete,
  onEdit,
}: ApiKeyItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(apiKey);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-100 dark:border-gray-800 text-sm gap-4 sm:gap-0">
      <div className="flex items-center justify-between sm:w-1/4">
        <span className="text-gray-900 dark:text-gray-100 font-medium">
          {name}
        </span>
        <div className="flex sm:hidden gap-2">
          <Button
            variant="link"
            onClick={onEdit}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 p-1"
            aria-label="Edit API key"
          >
            <Edit className="w-4 h-4" />
          </Button>
          <Button
            variant="link"
            onClick={() => onDelete(id)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 p-1"
            aria-label="Delete API key"
          >
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="sm:w-24 text-left sm:text-center">
        <span className="text-gray-600 dark:text-gray-400 sm:hidden mr-2">
          Usage:
        </span>
        <span className="text-gray-600 dark:text-gray-400">{usage}</span>
      </div>

      <div className="flex-1 font-mono">
        <div className="flex items-center gap-2 overflow-x-auto">
          <span className="text-gray-600 dark:text-gray-400 truncate">
            {isVisible ? apiKey : apiKey.replace(/./g, "*")}
          </span>
          <div className="flex-shrink-0 flex gap-2">
            <Button
              onClick={() => setIsVisible(!isVisible)}
              className={cn(
                "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 p-1",
                isVisible && "text-blue-600 dark:text-blue-400"
              )}
              variant="link"
              aria-label={isVisible ? "Hide API key" : "Show API key"}
            >
              <Eye className="w-4 h-4" />
            </Button>
            <div className="relative">
              <Button
                onClick={copyToClipboard}
                className={cn(
                  "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 p-1",
                  isCopied && "text-green-600 dark:text-green-400"
                )}
                variant="link"
                aria-label="Copy API key to clipboard"
              >
                {isCopied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
              {isCopied && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded shadow-sm">
                  Copied!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex sm:w-32 sm:justify-end gap-2">
        <Button
          variant="link"
          onClick={onEdit}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 p-1"
          aria-label="Edit API key"
        >
          <Edit className="w-4 h-4" />
        </Button>
        <Button
          variant="link"
          onClick={() => onDelete(id)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 p-1"
          aria-label="Delete API key"
        >
          <Trash className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
