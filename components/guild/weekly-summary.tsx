"use client"

import { 
  TrendingUp, 
  Trophy, 
  AlertTriangle, 
  TrendingDown, 
  Star,
  Eye,
  Calendar
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
    description: "胜率 72.7%，评分 2732",
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
    value: "06-09 vs 5团",
    description: "评分 2248",
    color: "text-red-500",
    bgColor: "bg-red-500/10"
  },
  {
    icon: Star,
    title: "近期高光场次",
    value: "06-17 vs 2团",
    description: "评分 2742",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Eye,
    title: "当前重点关注",
    value: "5团状态波动",
    description: "需持续观察",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10"
  },
]

export function WeeklySummary() {
  return (
    <div className="rounded-lg border border-border bg-card p-4 h-full flex flex-col min-h-0 min-w-0">
      <h3 className="text-[15px] font-semibold text-foreground mb-3 shrink-0">上周联赛总结</h3>
      
      {/* Main Conclusion Banner */}
      <div className="rounded-lg bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 p-4 mb-4 shrink-0">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <span className="text-sm text-muted-foreground">上周结论</span>
        </div>
        <div className="text-2xl font-bold text-primary mb-1">整体回升</div>
        <p className="text-sm text-muted-foreground leading-relaxed">团队评分持续上扬，1团表现突出，需关注5团状态波动</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4 shrink-0">
        <div className="rounded-lg bg-secondary/30 p-3">
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">本周赛程</span>
          </div>
          <div className="text-lg font-bold text-foreground">6 场</div>
        </div>
        <div className="rounded-lg bg-secondary/30 p-3">
          <div className="flex items-center gap-2 mb-1">
            <Trophy className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">上周战绩</span>
          </div>
          <div className="text-lg font-bold text-foreground">4胜2负</div>
        </div>
      </div>
      
      {/* Summary Items */}
      <div className="flex-1 flex flex-col gap-2 overflow-auto min-h-0">
        {summaryItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
              <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.bgColor} shrink-0`}>
                <Icon className={`h-4 w-4 ${item.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-muted-foreground mb-0.5">{item.title}</div>
                <div className={`text-sm font-semibold ${item.color} truncate`}>{item.value}</div>
              </div>
              <div className="text-xs text-muted-foreground/70 shrink-0">{item.description}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
