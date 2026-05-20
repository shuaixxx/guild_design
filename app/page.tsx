"use client"

import { useState } from "react"
import { GuildSidebar } from "@/components/guild/sidebar"
import { GuildHeader } from "@/components/guild/header"
import { PlayerDataCenter } from "@/components/guild/player-data-center"
import { AlertPanel } from "@/components/guild/alert-panel"
import { TeamGrouping } from "@/components/guild/team-grouping"
import { PlayerDetailPanel } from "@/components/guild/player-detail-panel"
import { StatsOverview } from "@/components/guild/stats-overview"

export default function GuildManagementPage() {
  const [activeSection, setActiveSection] = useState("player-data")
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>("小后池")

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Left Sidebar */}
      <GuildSidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <GuildHeader />

        {/* Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Main Panel */}
          <div className="flex flex-1 flex-col overflow-auto p-4">
            {/* Stats Overview Cards */}
            <StatsOverview />

            {/* Player Data Center */}
            <PlayerDataCenter 
              selectedPlayer={selectedPlayer}
              onSelectPlayer={setSelectedPlayer}
            />

            {/* Team Grouping */}
            <TeamGrouping />

            {/* Footer Info */}
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span>当前赛季</span>
                <select className="rounded border border-border bg-secondary px-2 py-1 text-foreground">
                  <option>S6 赛季</option>
                </select>
              </div>
              <div className="flex items-center gap-4">
                <span>版本号 3.0.0</span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-success"></span>
                  数据已同步
                </span>
              </div>
              <span>数据统计截至：2025-05-28 23:59</span>
            </div>
          </div>

          {/* Right Panel - Player Detail & Alerts */}
          <div className="flex w-80 flex-col gap-4 overflow-auto border-l border-border bg-card/50 p-4">
            <AlertPanel />
            {selectedPlayer && <PlayerDetailPanel playerName={selectedPlayer} />}
          </div>
        </div>
      </div>
    </div>
  )
}
