"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { Line, LineChart, ResponsiveContainer } from "recharts"

const teamData = [
  {
    rank: 1,
    name: "1团 (主攻团)",
    score: 92.4,
    change: +3.2,
    winRate: 78,
    style: "主攻",
    trend: [65, 72, 68, 75, 82, 85, 88, 92],
  },
  {
    rank: 2,
    name: "2团 (推进团)",
    score: 89.7,
    change: +1.8,
    winRate: 72,
    style: "推进",
    trend: [60, 65, 70, 68, 75, 80, 85, 89],
  },
  {
    rank: 3,
    name: "防守团",
    score: 87.2,
    change: -0.5,
    winRate: 68,
    style: "防守",
    trend: [70, 75, 72, 78, 82, 85, 88, 87],
  },
  {
    rank: 4,
    name: "机动团",
    score: 84.5,
    change: +2.1,
    winRate: 65,
    style: "机动",
    trend: [55, 60, 58, 65, 70, 75, 80, 84],
  },
  {
    rank: 5,
    name: "替补团",
    score: 78.3,
    change: -1.2,
    winRate: 58,
    style: "替补",
    trend: [60, 62, 58, 65, 70, 72, 80, 78],
  },
]

function MiniChart({ data, isPositive }: { data: number[]; isPositive: boolean }) {
  const chartData = data.map((value, index) => ({ value, index }))
  
  return (
    <div className="w-20 h-8">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={isPositive ? "oklch(0.65 0.18 145)" : "oklch(0.6 0.2 25)"}
            strokeWidth={1.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function TeamPerformance() {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <h3 className="text-base font-semibold text-foreground mb-4">各团表现趋势</h3>
      
      <div className="grid grid-cols-5 gap-4">
        {teamData.map((team) => (
          <div 
            key={team.rank}
            className="rounded-lg border border-border bg-secondary/20 p-4 hover:border-primary/50 transition-colors"
          >
            {/* Rank & Name */}
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-lg font-bold ${
                team.rank === 1 ? "text-primary" : 
                team.rank === 2 ? "text-muted-foreground" : 
                "text-muted-foreground/60"
              }`}>
                #{team.rank}
              </span>
              <span className="text-sm font-medium text-foreground truncate">{team.name}</span>
            </div>

            {/* Score */}
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-2xl font-bold text-foreground">{team.score}</span>
              <div className={`flex items-center gap-0.5 text-xs ${
                team.change >= 0 ? "text-green-500" : "text-red-500"
              }`}>
                {team.change >= 0 ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span>{team.change >= 0 ? "+" : ""}{team.change}</span>
              </div>
            </div>

            {/* Mini Chart */}
            <div className="mb-3">
              <MiniChart data={team.trend} isPositive={team.change >= 0} />
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="text-xs text-muted-foreground">胜率</span>
                <span className="text-sm font-semibold text-foreground">{team.winRate}%</span>
              </div>
              <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                team.style === "主攻" ? "bg-primary/20 text-primary" :
                team.style === "推进" ? "bg-blue-500/20 text-blue-400" :
                team.style === "防守" ? "bg-green-500/20 text-green-400" :
                team.style === "机动" ? "bg-yellow-500/20 text-yellow-400" :
                "bg-secondary text-muted-foreground"
              }`}>
                {team.style}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
