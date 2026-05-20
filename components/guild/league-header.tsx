"use client"

import { Upload, RefreshCw, ChevronDown, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LeagueHeader() {
  return (
    <div className="flex items-center justify-between border-b border-border bg-card/30 px-6 py-4">
      {/* Left - Title */}
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold text-foreground">联赛总览</h1>
        <p className="text-xs text-muted-foreground">全面掌握联赛动态，洞察团队表现趋势</p>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="gap-2 border-border bg-secondary/50 text-foreground hover:bg-secondary">
          <Upload className="h-4 w-4" />
          导入战报
        </Button>
        <Button variant="outline" size="sm" className="gap-2 border-border bg-secondary/50 text-foreground hover:bg-secondary">
          <RefreshCw className="h-4 w-4" />
          刷新数据
        </Button>
        
        <div className="h-6 w-px bg-border mx-1" />
        
        {/* Season Selector */}
        <button className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm text-foreground hover:bg-secondary">
          <span>S6 赛季</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* Date Range */}
        <button className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm text-foreground hover:bg-secondary">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>2025-05-01 ~ 2025-05-28</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  )
}
