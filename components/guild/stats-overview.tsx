"use client"

import { Users, Activity, Star, Crown, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"

const statsData = [
  {
    label: "参赛人数",
    value: "137",
    unit: "人",
    change: "+6",
    changeLabel: "较上周",
    icon: Users,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    label: "活跃率",
    value: "86.2",
    unit: "%",
    change: "↑3.1%",
    changeLabel: "较上周",
    positive: true,
    icon: Activity,
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
  },
  {
    label: "高稳定玩家",
    value: "42",
    unit: "人",
    subtext: "占比 30.7%",
    icon: Star,
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    label: "推荐主旗手",
    value: "小后池",
    subtext: "综合评分 96.8",
    icon: Crown,
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    label: "待调整分团",
    value: "12",
    unit: "人",
    change: "↓4",
    changeLabel: "较上周",
    icon: AlertTriangle,
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
  },
]

export function StatsOverview() {
  return (
    <div className="mb-4 grid grid-cols-5 gap-4">
      {statsData.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="border-border bg-card p-4">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">{stat.label}</span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  {stat.unit && <span className="text-lg text-muted-foreground">{stat.unit}</span>}
                </div>
                {stat.change && (
                  <div className="mt-1 flex items-center gap-1 text-xs">
                    <span className="text-muted-foreground">{stat.changeLabel}</span>
                    <span className={stat.positive ? "text-green-400" : "text-muted-foreground"}>
                      {stat.change}
                    </span>
                  </div>
                )}
                {stat.subtext && (
                  <span className="mt-1 text-xs text-muted-foreground">{stat.subtext}</span>
                )}
              </div>
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.iconBg}`}>
                <Icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
