"use client"

import { 
  TrendingUp, 
  Users, 
  AlertTriangle, 
  Calendar, 
  Star,
  Eye
} from "lucide-react"

const summaryItems = [
  {
    icon: TrendingUp,
    title: "当前走势",
    value: "稳步上升",
    description: "连续3周保持上升趋势，综合评分提升8.2%",
    color: "text-green-500"
  },
  {
    icon: Users,
    title: "最强分组",
    value: "1团 (主攻团)",
    description: "平均评分92.4，胜率78%，输出稳定性最高",
    color: "text-primary"
  },
  {
    icon: AlertTriangle,
    title: "波动最大分团",
    value: "机动团",
    description: "近期表现起伏较大，建议关注阵容调整",
    color: "text-yellow-500"
  },
  {
    icon: Calendar,
    title: "本周赛程场次",
    value: "12 场",
    description: "5月29日-6月4日，含2场关键晋级赛",
    color: "text-foreground"
  },
  {
    icon: Star,
    title: "最近高点",
    value: "5/22 评分93.2",
    description: "创下本赛季最佳单日表现记录",
    color: "text-primary"
  },
  {
    icon: Eye,
    title: "当前重点关注",
    value: "治疗位补充",
    description: "机动团缺少1名治疗，建议优先安排",
    color: "text-red-500"
  },
]

export function WeeklySummary() {
  return (
    <div className="rounded-xl border border-border bg-card p-4 h-full">
      <h3 className="text-base font-semibold text-foreground mb-4">上周联赛总结</h3>
      
      <div className="space-y-3">
        {summaryItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/50 shrink-0">
                <Icon className={`h-4 w-4 ${item.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-muted-foreground">{item.title}</span>
                  <span className={`text-sm font-semibold ${item.color} truncate`}>{item.value}</span>
                </div>
                <p className="text-[11px] text-muted-foreground/80 mt-0.5 line-clamp-1">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
