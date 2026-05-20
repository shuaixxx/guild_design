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
    <div className="rounded-lg border border-border bg-card p-3 h-full">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/10">
          <Icon className="h-3.5 w-3.5 text-primary" />
        </div>
        <span className="text-xs font-medium text-foreground">{title}</span>
        <span className="text-[10px] text-muted-foreground ml-auto">{unit}</span>
      </div>
      <div className="space-y-1.5">
        {data.map((item) => (
          <div key={item.rank} className="flex items-center gap-2">
            <span className={`text-[10px] font-bold w-4 ${
              item.rank === 1 ? "text-primary" : "text-muted-foreground/60"
            }`}>
              {item.rank}
            </span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[10px] font-medium text-foreground">
              {item.avatar}
            </div>
            <span className="flex-1 text-xs text-foreground truncate">{item.name}</span>
            <span className="text-xs font-semibold text-primary">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function LeagueStatsCards() {
  return (
    <div className="grid grid-cols-5 gap-3">
      {/* Total Matches */}
      <div className="rounded-lg border border-border bg-card p-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/10">
            <Swords className="h-3.5 w-3.5 text-primary" />
          </div>
          <span className="text-xs font-medium text-foreground">总场次</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-foreground">18</span>
          <span className="text-xs text-muted-foreground">场</span>
        </div>
        <div className="text-[10px] text-muted-foreground">
          较上周 <span className="text-green-500">+2</span>
        </div>
      </div>

      {/* Win Rate */}
      <div className="rounded-lg border border-border bg-card p-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/10">
            <Trophy className="h-3.5 w-3.5 text-primary" />
          </div>
          <span className="text-xs font-medium text-foreground">胜率</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-foreground">66.7</span>
          <span className="text-xs text-muted-foreground">%</span>
        </div>
        <div className="text-[10px] text-muted-foreground">
          12 胜 / 6 负
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
