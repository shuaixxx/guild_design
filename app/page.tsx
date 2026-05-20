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

      {/* Main Content - min-w-0 防止子元素撑破 */}
      <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
        {/* Header - 64px */}
        <LeagueHeader />

        {/* Content Area - 使用 grid-rows 控制三行高度 */}
        <div className="flex-1 min-h-0 p-4 grid grid-rows-[155px_minmax(0,1fr)_180px] gap-4">
          {/* Top Stats Cards - 155px */}
          <LeagueStatsCards />

          {/* Middle Section - 自适应填充 */}
          <MainAnalysisSection />

          {/* Bottom - Match Timeline - 180px */}
          <MatchTimeline />
        </div>
      </div>
    </div>
  )
}
