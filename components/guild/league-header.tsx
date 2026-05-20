"use client"

import { Upload, RefreshCw, ChevronDown, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LeagueHeader() {
  return (
    <div className="flex items-center justify-between border-b border-border bg-card/30 px-5 h-16 shrink-0">
      {/* Left - Title */}
      <div className="flex flex-col">
        <h1 className="text-[22px] font-bold text-foreground leading-tight">联赛总览</h1>
        <p className="text-xs text-muted-foreground">查看所有场次、整体趋势、各维度排名与上周总结</p>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="h-8 gap-1.5 border-border bg-secondary/50 text-foreground hover:bg-secondary text-xs">
          <Upload className="h-3.5 w-3.5" />
          导入战报
        </Button>
        <Button variant="outline" size="sm" className="h-8 gap-1.5 border-border bg-secondary/50 text-foreground hover:bg-secondary text-xs">
          <RefreshCw className="h-3.5 w-3.5" />
          刷新数据
        </Button>
        
        <div className="h-5 w-px bg-border mx-1" />
        
        {/* Season Selector */}
        <button className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground hover:bg-secondary">
          <span>2025 春季赛</span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </button>

        {/* Date Range */}
        <button className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground hover:bg-secondary">
          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
          <span>2025-05-18 ~ 2025-06-30</span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
      </div>
    </div>
  )
}
