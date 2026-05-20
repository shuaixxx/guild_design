"use client"

import { OverallTrends } from "./overall-trends"
import { TeamPerformance } from "./team-performance"
import { WeeklySummary } from "./weekly-summary"

export function MainAnalysisSection() {
  return (
    // 使用 CSS Grid，右侧固定380px，左侧自适应
    <div className="grid grid-cols-[minmax(0,1fr)_380px] gap-4 min-h-0 h-full">
      {/* Left Side - 总体趋势 + 各团表现 */}
      <div className="grid grid-rows-[minmax(0,1.65fr)_minmax(220px,1fr)] gap-4 min-h-0">
        {/* Overall Trends - 约 65% */}
        <OverallTrends />
        {/* Team Performance - 约 35% */}
        <TeamPerformance />
      </div>

      {/* Right Side - 上周联赛总结 380px */}
      <WeeklySummary />
    </div>
  )
}
