import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  Bot,
  FileText,
  PlayCircle,
  Receipt,
  FileCode2,
  ChevronLeft,
  Settings,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      title: "Overview",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Research Assistant",
      href: "/assistant",
      icon: Bot,
    },
    {
      title: "Research Reports",
      href: "/reports",
      icon: FileText,
    },
    {
      title: "API Playground",
      href: "/playground",
      icon: PlayCircle,
    },
    {
      title: "Invoices",
      href: "/invoices",
      icon: Receipt,
    },
    {
      title: "Documentation",
      href: "/docs",
      icon: FileCode2,
      isExternal: true,
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 h-screen transition-all duration-300",
        isCollapsed ? "w-[60px]" : "w-[240px]",
        className
      )}
    >
      <div className="flex items-center gap-2 p-4 border-b border-gray-200 dark:border-gray-800">
        {!isCollapsed && (
          <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Tavily AI
          </span>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="ml-auto p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft
            className={cn(
              "h-5 w-5 text-gray-500 transition-transform",
              isCollapsed && "rotate-180"
            )}
          />
        </button>
      </div>

      <nav className="flex-1 p-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
              pathname === item.href &&
                "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
              isCollapsed && "justify-center"
            )}
          >
            <item.icon className="h-5 w-5" />
            {!isCollapsed && (
              <span className="text-sm font-medium">{item.title}</span>
            )}
          </Link>
        ))}
      </nav>

      <div className="p-2 border-t border-gray-200 dark:border-gray-800">
        <Link
          href="/settings"
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
            pathname === "/settings" &&
              "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
            isCollapsed && "justify-center"
          )}
        >
          <Settings className="h-5 w-5" />
          {!isCollapsed && (
            <span className="text-sm font-medium">Settings</span>
          )}
        </Link>
      </div>
    </div>
  );
}
