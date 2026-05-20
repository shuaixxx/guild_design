"use client"

import { ChevronDown, RotateCcw, Circle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface PlayerDataCenterProps {
  selectedPlayer: string | null
  onSelectPlayer: (player: string | null) => void
}

const playerData = [
  { id: 1, name: "小后池", tag: "主力", faction: "合欢派", score: 96.8, seasonAvg: 2764, attendance: "100%", stability: 98, output: 3576, healing: 3778, flagAbility: 95, team: "机动团", position: "主旗手", status: "在线" },
  { id: 2, name: "闲人卿桥", tag: "稳定", faction: "青云门", score: 93.2, seasonAvg: 2387, attendance: "100%", stability: 95, output: 2787, healing: 4016, flagAbility: 88, team: "机动团", position: "输出核心", status: "在线" },
  { id: 3, name: "月舞生劫ペ", tag: "主力", faction: "合欢派", score: 90.1, seasonAvg: 2289, attendance: "83%", stability: 86, output: 3324, healing: 3103, flagAbility: 82, team: "未分团", position: "输出", status: "在线" },
  { id: 4, name: "月眠南桥", tag: "旗手", faction: "灵汐阁", score: 88.7, seasonAvg: 2095, attendance: "100%", stability: 92, output: 2061, healing: 3367, flagAbility: 91, team: "防守团", position: "副旗手", status: "在线" },
  { id: 5, name: "暮谷ペ", tag: "稳定", faction: "青云门", score: 86.4, seasonAvg: 1922, attendance: "33%", stability: 72, output: 2379, healing: 1465, flagAbility: 64, team: "未分团", position: "输出", status: "离线 2天" },
  { id: 6, name: "只吃香蕉菜", tag: "稳定", faction: "青云门", score: 84.9, seasonAvg: 1762, attendance: "83%", stability: 84, output: 2251, healing: 1814, flagAbility: 69, team: "机动团", position: "治疗", status: "在线" },
  { id: 7, name: "谷雨", tag: "稳定", faction: "灵汐阁", score: 83.6, seasonAvg: 1737, attendance: "67%", stability: 78, output: 2462, healing: 1748, flagAbility: 60, team: "防守团", position: "治疗", status: "在线" },
  { id: 8, name: "小涛", tag: "观察", faction: "灵汐阁", score: 81.7, seasonAvg: 1707, attendance: "83%", stability: 81, output: 2403, healing: 2094, flagAbility: 62, team: "机动团", position: "治疗", status: "在线" },
  { id: 9, name: "何似在人间ペ", tag: "主力", faction: "青云门", score: 80.3, seasonAvg: 1658, attendance: "100%", stability: 89, output: 1486, healing: 1775, flagAbility: 58, team: "防守团", position: "支援", status: "在线" },
  { id: 10, name: "漫步吹晚风ペ", tag: "观察", faction: "青云门", score: 78.6, seasonAvg: 1560, attendance: "17%", stability: 55, output: 1560, healing: 1560, flagAbility: 42, team: "未分团", position: "输出", status: "离线 1天" },
]

const getTagStyle = (tag: string) => {
  switch (tag) {
    case "主力":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    case "稳定":
      return "bg-green-500/20 text-green-400 border-green-500/30"
    case "旗手":
      return "bg-primary/20 text-primary border-primary/30"
    case "观察":
      return "bg-orange-500/20 text-orange-400 border-orange-500/30"
    default:
      return "bg-secondary text-muted-foreground"
  }
}

const getPositionStyle = (position: string) => {
  if (position.includes("旗手")) return "text-primary"
  if (position.includes("核心")) return "text-blue-400"
  return "text-muted-foreground"
}

export function PlayerDataCenter({ selectedPlayer, onSelectPlayer }: PlayerDataCenterProps) {
  return (
    <Card className="mb-4 border-border bg-card">
      <CardHeader className="border-b border-border pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-primary">玩家数据中心</CardTitle>
          <div className="flex items-center gap-3">
            {/* Filters */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">门派筛选</span>
              <Button variant="outline" size="sm" className="h-7 gap-1 text-xs">
                全部 <ChevronDown className="h-3 w-3" />
              </Button>
              
              <span className="text-muted-foreground">分团筛选</span>
              <Button variant="outline" size="sm" className="h-7 gap-1 text-xs">
                全部 <ChevronDown className="h-3 w-3" />
              </Button>
              
              <span className="text-muted-foreground">时间范围</span>
              <Button variant="outline" size="sm" className="h-7 gap-1 text-xs">
                全部赛季 <ChevronDown className="h-3 w-3" />
              </Button>
            </div>
            
            <div className="flex items-center gap-3 border-l border-border pl-3">
              <label className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Checkbox className="h-3.5 w-3.5" />
                只看在线
              </label>
              <label className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Checkbox className="h-3.5 w-3.5" defaultChecked />
                只看可参赛
              </label>
            </div>
            
            <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs text-muted-foreground">
              <RotateCcw className="h-3 w-3" />
              重置筛选
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        {/* Table Header */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_0.8fr] gap-2 border-b border-border bg-secondary/50 px-4 py-2 text-xs font-medium text-muted-foreground">
          <span>玩家</span>
          <span>门派</span>
          <span className="flex items-center gap-1">综合评分 <ChevronDown className="h-3 w-3" /></span>
          <span>赛季均分</span>
          <span>考勤</span>
          <span>稳定性</span>
          <span>输出</span>
          <span>治疗</span>
          <span>旗手能力</span>
          <span>当前分团</span>
          <span>推荐定位</span>
          <span>状态</span>
        </div>
        
        {/* Table Body */}
        <div className="max-h-[320px] overflow-auto">
          {playerData.map((player) => (
            <div
              key={player.id}
              onClick={() => onSelectPlayer(player.name)}
              className={cn(
                "grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_0.8fr] gap-2 border-b border-border/50 px-4 py-2.5 text-sm transition-colors cursor-pointer",
                selectedPlayer === player.name
                  ? "bg-primary/10 border-l-2 border-l-primary"
                  : "hover:bg-secondary/50"
              )}
            >
              {/* Player Name */}
              <div className="flex items-center gap-2">
                <Avatar className="h-7 w-7">
                  <AvatarFallback className="bg-secondary text-xs">{player.name[0]}</AvatarFallback>
                </Avatar>
                <span className="font-medium text-foreground">{player.name}</span>
                <Badge variant="outline" className={cn("h-5 text-[10px]", getTagStyle(player.tag))}>
                  {player.tag}
                </Badge>
              </div>
              
              <span className="text-muted-foreground">{player.faction}</span>
              <span className="font-semibold text-primary">{player.score}</span>
              <span className="text-foreground">{player.seasonAvg}</span>
              <span className="text-foreground">{player.attendance}</span>
              <div className="flex items-center gap-1">
                <span className="text-foreground">{player.stability}</span>
                <div className="h-1 w-8 rounded-full bg-secondary">
                  <div 
                    className="h-full rounded-full bg-destructive" 
                    style={{ width: `${100 - player.stability}%` }}
                  />
                </div>
              </div>
              <span className="text-foreground">{player.output}</span>
              <span className="text-foreground">{player.healing}</span>
              <span className="text-foreground">{player.flagAbility}</span>
              <span className="text-muted-foreground">{player.team}</span>
              <span className={getPositionStyle(player.position)}>{player.position}</span>
              <div className="flex items-center gap-1">
                <Circle className={cn(
                  "h-2 w-2 fill-current",
                  player.status === "在线" ? "text-green-400" : "text-muted-foreground"
                )} />
                <span className={cn(
                  "text-xs",
                  player.status === "在线" ? "text-green-400" : "text-muted-foreground"
                )}>
                  {player.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-border px-4 py-2">
          <span className="text-xs text-muted-foreground">共 137 条</span>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-xs">&lt;</Button>
            <Button variant="default" size="sm" className="h-6 w-6 p-0 text-xs">1</Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-xs">2</Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-xs">3</Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-xs">4</Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-xs">5</Button>
            <span className="px-1 text-xs text-muted-foreground">...</span>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-xs">14</Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-xs">&gt;</Button>
            <span className="ml-2 text-xs text-muted-foreground">10 条/页</span>
            <Button variant="outline" size="sm" className="ml-1 h-6 gap-1 px-2 text-xs">
              <ChevronDown className="h-3 w-3" />
            </Button>
            <span className="ml-2 text-xs text-muted-foreground">跳至</span>
            <input className="ml-1 h-6 w-12 rounded border border-border bg-secondary px-2 text-xs" />
            <span className="ml-1 text-xs text-muted-foreground">页</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
