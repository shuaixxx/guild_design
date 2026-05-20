"use client"

import { 
  TrendingUp, 
  Trophy, 
  AlertTriangle, 
  TrendingDown, 
  Star,
  Eye
} from "lucide-react"

const summaryItems = [
  {
    icon: TrendingUp,
    title: "整体趋势",
    value: "评分持续回升",
    description: "较前一周 +4.15",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  {
    icon: Trophy,
    title: "表现最佳团",
    value: "1团",
    description: "胜率 72.7%，场均评分 2732",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: AlertTriangle,
    title: "波动最大分团",
    value: "5团",
    description: "评分波动 1066",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10"
  },
  {
    icon: TrendingDown,
    title: "关键低谷场次",
    value: "06-09 对阵 5团",
    description: "团队评分 2248",
    color: "text-red-500",
    bgColor: "bg-red-500/10"
  },
  {
    icon: Star,
    title: "近期高光场次",
    value: "06-17 对阵 2团",
    description: "团队评分 2742",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Eye,
    title: "当前重点关注",
    value: "5团状态波动",
    description: "近期状态波动，需要观察",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10"
  },
]

export function WeeklySummary() {
  return (
    <div className="rounded-lg border border-border bg-card p-3 h-full flex flex-col">
      <h3 className="text-sm font-semibold text-foreground mb-2">上周联赛总结</h3>
      
      <div className="flex-1 flex flex-col gap-1.5 overflow-auto">
        {summaryItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index} className="flex items-start gap-2 p-2 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
              <div className={`flex h-7 w-7 items-center justify-center rounded ${item.bgColor} shrink-0`}>
                <Icon className={`h-3.5 w-3.5 ${item.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-[10px] text-muted-foreground">{item.title}</span>
                </div>
                <div className={`text-xs font-semibold ${item.color} truncate`}>{item.value}</div>
                <p className="text-[10px] text-muted-foreground/70 mt-0.5 line-clamp-1">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
