import { useState } from "react";
import { Button } from "./button";

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

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(apiKey);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex items-center py-4 border-b border-gray-100 dark:border-gray-800 text-sm">
      <div className="w-1/4">
        <span className="text-gray-900 dark:text-gray-100 font-medium">
          {name}
        </span>
      </div>
      <div className="w-24 text-center">
        <span className="text-gray-600 dark:text-gray-400">{usage}</span>
      </div>
      <div className="flex-1 font-mono">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-gray-400">
            {isVisible ? apiKey : apiKey.replace(/./g, "*")}
          </span>
          <Button
            onClick={() => setIsVisible(!isVisible)}
            className={`text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 ${
              isVisible ? "text-blue-600 dark:text-blue-400" : ""
            }`}
            variant="link"
          >
            <EyeIcon className="w-4 h-4" />
          </Button>
          <Button
            onClick={copyToClipboard}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            variant="link"
          >
            <CopyIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="w-32 flex justify-end gap-2">
        <Button
          variant="link"
          onClick={onEdit}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <EditIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="link"
          onClick={() => onDelete(id)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <TrashIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

// Icons components
function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function CopyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
    </svg>
  );
}

function EditIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );
}
