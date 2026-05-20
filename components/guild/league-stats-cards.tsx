"use client"

import { Swords, Target, Flame, Heart, Trophy } from "lucide-react"

const top3KillData = [
  { rank: 1, name: "小后池", value: 12.8, avatar: "后" },
  { rank: 2, name: "月舞生劫", value: 11.2, avatar: "月" },
  { rank: 3, name: "闻人柳桥", value: 10.5, avatar: "闻" },
]

const top3DamageData = [
  { rank: 1, name: "月殿南桥", value: 287.5, avatar: "殿" },
  { rank: 2, name: "只吃香蕉菜", value: 265.3, avatar: "吃" },
  { rank: 3, name: "暮谷", value: 248.9, avatar: "暮" },
]

const top3HealData = [
  { rank: 1, name: "谷雨", value: 198.6, avatar: "谷" },
  { rank: 2, name: "小涛", value: 185.2, avatar: "涛" },
  { rank: 3, name: "何似在人间", value: 172.8, avatar: "何" },
]

function Top3Card({ title, icon: Icon, data, unit }: { 
  title: string
  icon: React.ElementType
  data: { rank: number; name: string; value: number; avatar: string }[]
  unit: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <span className="text-sm font-medium text-foreground">{title}</span>
      </div>
      <div className="space-y-2">
        {data.map((item) => (
          <div key={item.rank} className="flex items-center gap-3">
            <span className={`text-xs font-bold w-5 ${
              item.rank === 1 ? "text-primary" : 
              item.rank === 2 ? "text-muted-foreground" : 
              "text-muted-foreground/60"
            }`}>
              #{item.rank}
            </span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-xs font-medium text-foreground">
              {item.avatar}
            </div>
            <span className="flex-1 text-sm text-foreground truncate">{item.name}</span>
            <span className="text-sm font-semibold text-primary">{item.value}</span>
            <span className="text-xs text-muted-foreground">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function LeagueStatsCards() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {/* Total Matches */}
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Swords className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">总场次</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground">48</span>
          <span className="text-sm text-muted-foreground">场</span>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          较上周 <span className="text-green-500">+6</span>
        </div>
      </div>

      {/* Win Rate */}
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Trophy className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">胜率</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground">68.7</span>
          <span className="text-sm text-muted-foreground">%</span>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          较上周 <span className="text-green-500">+2.3%</span>
        </div>
      </div>

      {/* Top 3 Kills */}
      <Top3Card 
        title="场均击杀 TOP3" 
        icon={Target} 
        data={top3KillData}
        unit="次"
      />

      {/* Top 3 Damage */}
      <Top3Card 
        title="场均伤害 TOP3" 
        icon={Flame} 
        data={top3DamageData}
        unit="万"
      />

      {/* Top 3 Healing */}
      <Top3Card 
        title="场均治疗 TOP3" 
        icon={Heart} 
        data={top3HealData}
        unit="万"
      />
    </div>
  )
}
