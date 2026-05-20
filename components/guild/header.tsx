"use client"

import { 
  Upload, 
  RefreshCw, 
  Users2, 
  Save, 
  FileSpreadsheet,
  Search,
  Bell,
  Minus,
  Square,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const actionButtons = [
  { icon: Upload, label: "导入战报" },
  { icon: RefreshCw, label: "刷新数据" },
  { icon: Users2, label: "自动分团" },
  { icon: Save, label: "保存方案" },
  { icon: FileSpreadsheet, label: "导出Excel" },
]

export function GuildHeader() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-card px-4">
      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        {actionButtons.map((btn, index) => {
          const Icon = btn.icon
          return (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className="h-8 gap-2 text-muted-foreground hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm">{btn.label}</span>
            </Button>
          )
        })}
      </div>

      {/* Search & Controls */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="搜索玩家昵称/门派" 
            className="h-8 w-64 bg-secondary pl-9 text-sm"
          />
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
          <Bell className="h-4 w-4" />
        </Button>
        
        {/* Window Controls */}
        <div className="ml-4 flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:bg-secondary">
            <Minus className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:bg-secondary">
            <Square className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:bg-destructive hover:text-destructive-foreground">
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </header>
  )
}
