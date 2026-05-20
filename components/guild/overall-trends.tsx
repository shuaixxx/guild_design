"use client"

import { useState } from "react"
import { TrendingUp, TrendingDown } from "lucide-react"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const trendData = [
  { date: "05/01", value: 82.5 },
  { date: "05/04", value: 85.2 },
  { date: "05/07", value: 83.8 },
  { date: "05/10", value: 88.1 },
  { date: "05/13", value: 86.5 },
  { date: "05/16", value: 84.2 },
  { date: "05/19", value: 89.7 },
  { date: "05/22", value: 91.3 },
  { date: "05/25", value: 88.9 },
  { date: "05/28", value: 93.2 },
]

const tabs = [
  { id: "rating", label: "平均评分" },
  { id: "participants", label: "参赛人数" },
  { id: "damage", label: "总伤害" },
  { id: "healing", label: "总治疗" },
  { id: "kills", label: "累计击杀" },
]

export function OverallTrends() {
  const [activeTab, setActiveTab] = useState("rating")

  return (
    <div className="rounded-xl border border-border bg-card p-4 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-foreground">总体趋势</h3>
        <div className="flex items-center gap-4">
          {/* Tabs */}
          <div className="flex items-center gap-1 rounded-lg bg-secondary/50 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs rounded-md transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Trend Indicators */}
      <div className="flex items-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">当前趋势：</span>
          <span className="flex items-center gap-1 text-sm font-medium text-green-500">
            <TrendingUp className="h-4 w-4" />
            回升中
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">增长幅度：</span>
          <span className="text-sm font-semibold text-primary">+4.15</span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.75 0.15 70)" stopOpacity={0.4} />
                <stop offset="100%" stopColor="oklch(0.75 0.15 70)" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'oklch(0.6 0.02 250)', fontSize: 10 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'oklch(0.6 0.02 250)', fontSize: 10 }}
              domain={[75, 100]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'oklch(0.15 0.02 250)', 
                border: '1px solid oklch(0.25 0.03 250)',
                borderRadius: '8px',
                color: 'oklch(0.93 0.01 60)'
              }}
              labelStyle={{ color: 'oklch(0.6 0.02 250)' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="oklch(0.75 0.15 70)"
              strokeWidth={2}
              fill="url(#trendGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
