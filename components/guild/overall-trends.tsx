"use client"

import { useState } from "react"
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const trendData = [
  { date: "05-18", value: 2012 },
  { date: "05-20", value: 2108 },
  { date: "05-22", value: 2158 },
  { date: "05-24", value: 2294 },
  { date: "05-26", value: 2118 },
  { date: "05-28", value: 2302 },
  { date: "05-30", value: 2248 },
  { date: "06-01", value: 2412 },
  { date: "06-03", value: 2358 },
  { date: "06-05", value: 2108 },
  { date: "06-07", value: 2278 },
  { date: "06-09", value: 2468 },
  { date: "06-11", value: 2662 },
  { date: "06-13", value: 2518 },
  { date: "06-15", value: 2302 },
  { date: "06-17", value: 2742 },
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
    <div className="rounded-lg border border-border bg-card p-4 h-full flex flex-col min-h-0 min-w-0">
      <div className="flex items-center justify-between mb-3 shrink-0">
        <h3 className="text-[15px] font-semibold text-foreground">总体趋势</h3>
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
          {/* Trend Indicators */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5">
              <span className="text-muted-foreground">当前趋势：</span>
              <span className="flex items-center gap-1 font-medium text-green-500">
                <TrendingUp className="h-4 w-4" />
                回升中
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-muted-foreground">增长幅度：</span>
              <span className="font-semibold text-primary">+4.15</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-0 min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.75 0.15 70)" stopOpacity={0.4} />
                <stop offset="100%" stopColor="oklch(0.75 0.15 70)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'oklch(0.5 0.02 250)', fontSize: 11 }}
              interval={1}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'oklch(0.5 0.02 250)', fontSize: 11 }}
              domain={[1900, 2900]}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'oklch(0.15 0.02 250)', 
                border: '1px solid oklch(0.25 0.03 250)',
                borderRadius: '6px',
                color: 'oklch(0.93 0.01 60)',
                fontSize: '12px',
                padding: '8px 12px'
              }}
              labelStyle={{ color: 'oklch(0.6 0.02 250)', marginBottom: '4px' }}
              formatter={(value: number) => [value.toLocaleString(), '评分']}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="oklch(0.75 0.15 70)"
              strokeWidth={2}
              fill="url(#trendGradient)"
              dot={{ fill: 'oklch(0.75 0.15 70)', strokeWidth: 0, r: 3 }}
              activeDot={{ fill: 'oklch(0.75 0.15 70)', strokeWidth: 2, stroke: 'oklch(0.15 0.02 250)', r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
