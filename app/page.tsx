"use client"

import { useState } from "react"
import { GuildSidebar } from "@/components/guild/sidebar"
import { LeagueHeader } from "@/components/guild/league-header"
import { LeagueStatsCards } from "@/components/guild/league-stats-cards"
import { OverallTrends } from "@/components/guild/overall-trends"
import { WeeklySummary } from "@/components/guild/weekly-summary"
import { TeamPerformance } from "@/components/guild/team-performance"
import { MatchTimeline } from "@/components/guild/match-timeline"

export default function LeagueOverviewPage() {
  const [activeSection, setActiveSection] = useState("overview")

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Left Sidebar */}
      <GuildSidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <LeagueHeader />

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {/* Stats Overview Cards */}
          <LeagueStatsCards />

          {/* Middle Section - Trends and Summary */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <OverallTrends />
            </div>
            <div className="col-span-1">
              <WeeklySummary />
            </div>
          </div>

          {/* Team Performance */}
          <TeamPerformance />

          {/* Match Timeline */}
          <MatchTimeline />

          {/* Footer Info */}
          <div className="flex items-center justify-between text-xs text-muted-foreground pb-2">
            <span>数据统计截至：2025-05-28 23:59</span>
          </div>
        </div>
      </div>
    </div>
  )
}
