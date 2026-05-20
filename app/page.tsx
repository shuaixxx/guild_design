"use client"

import { useState } from "react"
import { GuildSidebar } from "@/components/guild/sidebar"
import { LeagueHeader } from "@/components/guild/league-header"
import { LeagueStatsCards } from "@/components/guild/league-stats-cards"
import { MainAnalysisSection } from "@/components/guild/main-analysis-section"
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

        {/* Content Area - 使用 flex-1 和固定间距确保内容在一屏内 */}
        <div className="flex flex-1 flex-col p-4 gap-3 overflow-hidden">
          {/* Top Stats Cards */}
          <LeagueStatsCards />

          {/* Middle Section - 占据主要空间 */}
          <div className="flex-1 min-h-0">
            <MainAnalysisSection />
          </div>

          {/* Bottom - Match Timeline */}
          <MatchTimeline />
        </div>
      </div>
    </div>
  )
}
