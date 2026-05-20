"use client"

import { Swords, Target, Flame, Heart, Trophy } from "lucide-react"

const top3KillData = [
  { rank: 1, name: "青岚", value: "14.2", avatar: "青" },
  { rank: 2, name: "长歌", value: "13.6", avatar: "长" },
  { rank: 3, name: "夜霜", value: "12.8", avatar: "夜" },
]

const top3DamageData = [
  { rank: 1, name: "星河", value: "286.4万", avatar: "星" },
  { rank: 2, name: "青岚", value: "274.8万", avatar: "青" },
  { rank: 3, name: "月照城峰", value: "261.5万", avatar: "月" },
]

const top3HealData = [
  { rank: 1, name: "归舟", value: "218.6万", avatar: "归" },
  { rank: 2, name: "谷雨", value: "206.3万", avatar: "谷" },
  { rank: 3, name: "小妍", value: "194.8万", avatar: "小" },
]

function Top3Card({ title, icon: Icon, data, unit }: { 
  title: string
  icon: React.ElementType
  data: { rank: number; name: string; value: string; avatar: string }[]
  unit: string
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 h-full flex flex-col min-w-0">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10 shrink-0">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <span className="text-sm font-medium text-foreground truncate">{title}</span>
        <span className="text-xs text-muted-foreground ml-auto shrink-0">{unit}</span>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-2">
        {data.map((item) => (
          <div key={item.rank} className="flex items-center gap-2">
            <span className={`text-sm font-bold w-4 shrink-0 ${
              item.rank === 1 ? "text-primary" : "text-muted-foreground/60"
            }`}>
              {item.rank}
            </span>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-medium text-foreground shrink-0">
              {item.avatar}
            </div>
            <span className="flex-1 text-sm text-foreground truncate min-w-0">{item.name}</span>
            <span className="text-sm font-semibold text-primary shrink-0">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function LeagueStatsCards() {
  return (
    <div className="grid gap-4 h-full min-w-0" style={{ gridTemplateColumns: '1fr 1fr 1.5fr 1.5fr 1.5fr' }}>
      {/* Total Matches */}
      <div className="rounded-lg border border-border bg-card p-4 flex flex-col min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10 shrink-0">
            <Swords className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">总场次</span>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-foreground leading-none">18</span>
            <span className="text-sm text-muted-foreground">场</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            较上周 <span className="text-green-500 font-medium">+2</span>
          </div>
        </div>
      </div>

      {/* Win Rate */}
      <div className="rounded-lg border border-border bg-card p-4 flex flex-col min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10 shrink-0">
            <Trophy className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">胜率</span>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-foreground leading-none">66.7</span>
            <span className="text-sm text-muted-foreground">%</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            12 胜 / 6 负
          </div>
        </div>
      </div>

      {/* Top 3 Kills */}
      <Top3Card 
        title="场均击杀 TOP3" 
        icon={Target} 
        data={top3KillData}
        unit="次/场"
      />

      {/* Top 3 Damage */}
      <Top3Card 
        title="场均伤害 TOP3" 
        icon={Flame} 
        data={top3DamageData}
        unit="万/场"
      />

      {/* Top 3 Healing */}
      <Top3Card 
        title="场均治疗 TOP3" 
        icon={Heart} 
        data={top3HealData}
        unit="万/场"
      />
    </div>
  )
}
