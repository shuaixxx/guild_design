"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Check, X, BarChart3 } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

interface PlayerDetailPanelProps {
  playerName: string
}

const trendData = [
  { date: "5/18", score: 94, ability: 90 },
  { date: "5/20", score: 96, ability: 92 },
  { date: "5/22", score: 95, ability: 94 },
  { date: "5/24", score: 97, ability: 93 },
  { date: "5/26", score: 96, ability: 95 },
  { date: "5/28", score: 97, ability: 95 },
]

const playerInfo = {
  name: "小后池",
  tag: "主力",
  faction: "合欢派",
  level: 70,
  score: 96.8,
  position: "主旗手",
  status: "在线",
  canAssign: ["机动团", "副旗手"],
  recentStatus: "稳定",
  strengths: [
    "旗手能力顶尖，场均抢旗 3.2次",
    "输出稳定，赛季均分排名前 5%",
    "考勤率 100%，赛事参与度高",
  ],
  risks: [
    "生存能力一般，易被集火",
    "面对高爆发职业时头旗率上升",
  ],
}

export function PlayerDetailPanel({ playerName }: PlayerDetailPanelProps) {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-3">
        {/* Player Avatar & Info */}
        <div className="flex items-start gap-3">
          <div className="relative">
            <Avatar className="h-20 w-20 border-2 border-primary/50">
              <AvatarImage src="/placeholder.svg?height=80&width=80" />
              <AvatarFallback className="bg-gradient-to-br from-primary/30 to-primary/10 text-2xl">
                {playerName[0]}
              </AvatarFallback>
            </Avatar>
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500">
              <span className="h-2 w-2 rounded-full bg-green-200"></span>
            </span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">{playerName}</CardTitle>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                {playerInfo.tag}
              </Badge>
              <span className="text-xs text-green-400">在线</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              {playerInfo.faction} Lv.{playerInfo.level}
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-xs text-muted-foreground">综合评分</span>
              <span className="text-3xl font-bold text-primary">{playerInfo.score}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Recommended Position */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">推荐定位</span>
          <Badge className="bg-primary/20 text-primary border-primary/30">
            {playerInfo.position}
          </Badge>
        </div>
        
        {/* Can Assign */}
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1.5 text-xs">
            <span className="text-muted-foreground">适合团</span>
            <span className="text-foreground">{playerInfo.canAssign[0]}</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1.5 text-xs">
            <span className="text-muted-foreground">可担任</span>
            <span className="text-foreground">{playerInfo.canAssign[1]}</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1.5 text-xs">
            <span className="text-muted-foreground">最近状态</span>
            <span className="text-green-400">{playerInfo.recentStatus}</span>
          </div>
        </div>
        
        {/* Strengths */}
        <div>
          <h4 className="mb-2 text-xs font-semibold text-green-400">优势</h4>
          <ul className="space-y-1.5">
            {playerInfo.strengths.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                <Check className="mt-0.5 h-3 w-3 flex-shrink-0 text-green-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Risks */}
        <div>
          <h4 className="mb-2 text-xs font-semibold text-destructive">风险</h4>
          <ul className="space-y-1.5">
            {playerInfo.risks.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                <X className="mt-0.5 h-3 w-3 flex-shrink-0 text-destructive" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Trend Chart */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h4 className="text-xs font-semibold text-foreground">近期表现趋势 (近10场)</h4>
            <div className="flex items-center gap-3 text-[10px]">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                综合评分
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                旗手能力
              </span>
            </div>
          </div>
          <div className="h-32 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                  tickLine={false}
                />
                <YAxis 
                  domain={[0, 100]}
                  tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                  tickLine={false}
                  width={25}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '6px',
                    fontSize: '11px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ r: 3, fill: 'hsl(var(--primary))' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="ability" 
                  stroke="#60a5fa" 
                  strokeWidth={2}
                  dot={{ r: 3, fill: '#60a5fa' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* View Detail Button */}
        <Button variant="outline" className="w-full gap-2 text-sm">
          <BarChart3 className="h-4 w-4" />
          查看详细数据
        </Button>
      </CardContent>
    </Card>
  )
}
