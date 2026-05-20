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
      {/* Left Sidebar - 220px */}
      <GuildSidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header - 64-72px */}
        <LeagueHeader />

        {/* Content Area - 内边距20px */}
        <div className="flex flex-1 flex-col p-5 gap-4 overflow-hidden">
          {/* Top Stats Cards - 150-165px */}
          <LeagueStatsCards />

          {/* Middle Section - 占据主要空间 */}
          <div className="flex-1 min-h-0">
            <MainAnalysisSection />
          </div>

          {/* Bottom - Match Timeline - 170-190px */}
          <MatchTimeline />
        </div>
      </div>
    </div>
  )
}
