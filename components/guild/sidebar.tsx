"use client"

import { 
  LayoutDashboard, 
  Users, 
  Layers, 
  Flag,
  FileText, 
  Trophy,
  Database,
  Settings,
  Swords,
  RefreshCw
} from "lucide-react"
import { cn } from "@/lib/utils"

interface GuildSidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const menuItems = [
  { id: "overview", label: "联赛总览", icon: LayoutDashboard },
  { id: "player-data", label: "玩家数据", icon: Users },
  { id: "team-sandbox", label: "分团沙盘", icon: Layers },
  { id: "flag-analysis", label: "旗手分析", icon: Flag },
  { id: "replay", label: "场次复盘", icon: FileText },
  { id: "roster", label: "名单管理", icon: Trophy },
  { id: "data-mgmt", label: "数据管理", icon: Database },
]

export function GuildSidebar({ activeSection, onSectionChange }: GuildSidebarProps) {
  return (
    <div className="flex h-full w-[200px] flex-col border-r border-border bg-sidebar">
      {/* Logo */}
      <div className="flex items-center gap-3 border-b border-border px-4 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/80 to-primary">
          <Swords className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold text-primary">诛仙世界</span>
          <span className="text-[10px] text-muted-foreground">综合联赛分析管理系统</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-3">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <Icon className={cn("h-5 w-5", isActive && "text-primary")} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-border p-3 space-y-2">
        {/* Sync Status */}
        <div className="flex flex-col gap-0.5 px-3 py-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
            数据已同步
          </span>
          <span className="text-[10px] text-muted-foreground/60">最后同步：刚刚</span>
        </div>
        
        {/* Settings */}
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-all">
          <Settings className="h-5 w-5" />
          <span>设置</span>
        </button>

        {/* Version */}
        <div className="px-3 py-2 text-[10px] text-muted-foreground">
          版本号 v3.0.0
        </div>
      </div>
    </div>
  )
}
