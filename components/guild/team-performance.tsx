"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { Line, LineChart, ResponsiveContainer } from "recharts"

const teamData = [
  {
    rank: 1,
    name: "1团",
    score: 2732,
    change: +144,
    winRate: "72.7%",
    record: "8胜3负",
    style: "稳健运营",
    trend: [2400, 2450, 2520, 2580, 2620, 2680, 2732],
  },
  {
    rank: 2,
    name: "2团",
    score: 2284,
    change: -114,
    winRate: "63.6%",
    record: "7胜3负",
    style: "中期压制",
    trend: [2450, 2480, 2420, 2380, 2350, 2320, 2284],
  },
  {
    rank: 3,
    name: "3团",
    score: 2411,
    change: +58,
    winRate: "65.7%",
    record: "6胜3负",
    style: "多点爆发",
    trend: [2300, 2320, 2350, 2380, 2390, 2400, 2411],
  },
  {
    rank: 4,
    name: "4团",
    score: 2126,
    change: +82,
    winRate: "56.6%",
    record: "5胜4负",
    style: "均衡推进",
    trend: [2000, 2020, 2050, 2080, 2100, 2110, 2126],
  },
  {
    rank: 5,
    name: "5团",
    score: 1985,
    change: +74,
    winRate: "50.0%",
    record: "4胜4负",
    style: "保守运营",
    trend: [1880, 1900, 1920, 1940, 1960, 1970, 1985],
  },
]

function MiniChart({ data, isPositive }: { data: number[]; isPositive: boolean }) {
  const chartData = data.map((value, index) => ({ value, index }))
  
  return (
    <div className="h-8 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={isPositive ? "oklch(0.65 0.18 145)" : "oklch(0.6 0.2 25)"}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function TeamPerformance() {
  return (
    <div className="rounded-lg border border-border bg-card p-4 h-full flex flex-col min-h-0 min-w-0">
      <h3 className="text-[15px] font-semibold text-foreground mb-3 shrink-0">各团表现趋势</h3>
      
      <div className="flex-1 grid grid-cols-5 gap-3 min-h-0 min-w-0">
        {teamData.map((team) => (
          <div 
            key={team.rank}
            className="rounded-lg border border-border bg-secondary/20 p-3 hover:border-primary/50 transition-colors flex flex-col min-w-0"
          >
            {/* Rank & Name */}
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-sm font-bold ${
                team.rank === 1 ? "text-primary" : "text-muted-foreground/60"
              }`}>
                #{team.rank}
              </span>
              <span className="text-sm font-medium text-foreground">{team.name}</span>
            </div>

            {/* Score & Change */}
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-xl font-bold text-foreground">{team.score}</span>
              <div className={`flex items-center gap-0.5 text-xs ${
                team.change >= 0 ? "text-green-500" : "text-red-500"
              }`}>
                {team.change >= 0 ? (
                  <TrendingUp className="h-3.5 w-3.5" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5" />
                )}
                <span>{team.change >= 0 ? "+" : ""}{team.change}</span>
              </div>
            </div>

            {/* Mini Chart */}
            <div className="mb-2">
              <MiniChart data={team.trend} isPositive={team.change >= 0} />
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-muted-foreground">胜率</span>
              <span className="text-sm font-semibold text-foreground">{team.winRate}</span>
            </div>
            <div className="text-xs text-muted-foreground/70 mb-2">{team.record}</div>

            {/* Style Tag */}
            <span className="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary self-start mt-auto">
              {team.style}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
