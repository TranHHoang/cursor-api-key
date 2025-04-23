import { Button } from "./button";

interface UsageHeaderProps {
  plan: string;
  usedRequests: number;
  totalRequests: number;
}

export function UsageHeader({
  plan,
  usedRequests,
  totalRequests,
}: UsageHeaderProps) {
  const usagePercentage = (usedRequests / totalRequests) * 100;

  return (
    <div className="bg-gradient-to-br from-purple-600 via-purple-400 to-blue-400 rounded-xl p-6 text-white mb-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="text-sm mb-2 opacity-90">CURRENT PLAN</div>
          <h2 className="text-3xl font-semibold">{plan}</h2>
        </div>
        <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
          Manage Plan
        </Button>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm">API Limit</div>
          <div className="text-sm">
            {usedRequests}/{totalRequests} Requests
          </div>
        </div>
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{ width: `${usagePercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
