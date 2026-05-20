"use client"

import { Sparkles, ChevronDown, ChevronUp, Save, Crown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useState } from "react"

const teamData = [
  {
    id: 1,
    name: "1团",
    type: "主攻团",
    members: "10/10",
    full: true,
    leader: { name: "小后池", role: "旗手" },
    roles: [
      { role: "输出", members: ["闲人卿桥", "月舞生劫ペ"], extra: "+2" },
      { role: "治疗", members: ["谷雨", "小涛"], extra: "+1" },
    ],
  },
  {
    id: 2,
    name: "2团",
    type: "推进团",
    members: "10/10",
    full: true,
    leader: { name: "月眠南桥", role: "旗手" },
    roles: [
      { role: "输出", members: ["暮谷ペ", "何似在人间ペ"], extra: "+1" },
      { role: "治疗", members: ["童繁", "鱼皮皮"], extra: "+1" },
    ],
  },
  {
    id: 3,
    name: "防守团",
    type: "",
    members: "10/10",
    full: true,
    leader: { name: "清川", role: "旗手" },
    roles: [
      { role: "输出", members: ["新以重楼", "马赛彷徨"], extra: "+1" },
      { role: "治疗", members: ["炯炯", "结优禾歌"], extra: "+1" },
    ],
  },
  {
    id: 4,
    name: "机动团",
    type: "",
    members: "9/10",
    full: false,
    warning: "缺1名治疗",
    leader: { name: "小后池", role: "旗手" },
    roles: [
      { role: "输出", members: ["闲人卿桥", "小涛"], extra: "" },
      { role: "治疗", members: ["（缺1名治疗）"], isWarning: true },
    ],
  },
]

const substituteData = {
  count: 8,
  members: [
    { name: "堵墙", role: "" },
    { name: "颜形", role: "" },
    { name: "紫令图", role: "" },
    { name: "凝霜雪兰", role: "" },
    { name: "阿楠酱", role: "" },
    { name: "学医", role: "" },
    { name: "春月月", role: "" },
  ],
  extra: "+ 2",
}

export function TeamGrouping() {
  const [expanded, setExpanded] = useState(true)

  return (
    <Card className="border-border bg-card">
      <CardHeader className="border-b border-border pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CardTitle className="text-base font-semibold text-primary">
              分团建议 / 沙盘预览
            </CardTitle>
            <Button size="sm" className="h-7 gap-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-xs">
              <Sparkles className="h-3 w-3" />
              AI建议
            </Button>
            <span className="text-xs text-muted-foreground">
              建议为机动团补充 1 名治疗
            </span>
            <Button size="sm" variant="outline" className="h-7 text-xs">
              应用建议
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">方案:</span>
            <Button variant="outline" size="sm" className="h-7 gap-1 text-xs">
              默认方案 <ChevronDown className="h-3 w-3" />
            </Button>
            <Button variant="outline" size="sm" className="h-7 gap-1 text-xs">
              <Save className="h-3 w-3" />
              保存方案
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-7 gap-1 text-xs"
              onClick={() => setExpanded(!expanded)}
            >
              收起 {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </Button>
          </div>
        </div>
      </CardHeader>
      
      {expanded && (
        <CardContent className="p-4">
          <div className="grid grid-cols-5 gap-3">
            {/* Team Cards */}
            {teamData.map((team) => (
              <div
                key={team.id}
                className={`rounded-lg border p-3 ${
                  team.full 
                    ? "border-border bg-secondary/30" 
                    : "border-orange-500/30 bg-orange-500/5"
                }`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-foreground">{team.name}</span>
                    {team.type && (
                      <span className="text-xs text-muted-foreground">({team.type})</span>
                    )}
                  </div>
                  <Badge 
                    variant={team.full ? "secondary" : "outline"}
                    className={`text-xs ${!team.full && "border-orange-500/50 text-orange-400"}`}
                  >
                    {team.members}
                  </Badge>
                </div>
                
                {/* Leader */}
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{team.leader.role}</span>
                  <div className="flex items-center gap-1">
                    <Avatar className="h-5 w-5">
                      <AvatarFallback className="bg-primary/20 text-[10px] text-primary">
                        {team.leader.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-foreground">{team.leader.name}</span>
                    <Crown className="h-3 w-3 text-primary" />
                  </div>
                </div>
                
                {/* Roles */}
                {team.roles.map((roleGroup, idx) => (
                  <div key={idx} className="mb-1.5 flex items-center gap-2">
                    <span className="w-6 text-xs text-muted-foreground">{roleGroup.role}</span>
                    <div className="flex flex-wrap items-center gap-1">
                      {roleGroup.members.map((member, memberIdx) => (
                        <div 
                          key={memberIdx} 
                          className={`flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] ${
                            roleGroup.isWarning 
                              ? "bg-orange-500/10 text-orange-400" 
                              : "bg-secondary"
                          }`}
                        >
                          {!roleGroup.isWarning && (
                            <Avatar className="h-4 w-4">
                              <AvatarFallback className="bg-secondary text-[8px]">
                                {member[0]}
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <span>{member}</span>
                        </div>
                      ))}
                      {roleGroup.extra && (
                        <span className="text-[10px] text-muted-foreground">{roleGroup.extra}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
            
            {/* Substitute */}
            <div className="rounded-lg border border-border bg-secondary/30 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-semibold text-foreground">替补</span>
                <Badge variant="secondary" className="text-xs">{substituteData.count}</Badge>
              </div>
              <div className="flex flex-wrap gap-1">
                {substituteData.members.map((member, idx) => (
                  <div 
                    key={idx} 
                    className="rounded bg-secondary px-2 py-1 text-[10px] text-muted-foreground"
                  >
                    {member.name}
                  </div>
                ))}
                <span className="rounded bg-secondary px-2 py-1 text-[10px] text-muted-foreground">
                  {substituteData.extra}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
