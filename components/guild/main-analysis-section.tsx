"use client"

import { OverallTrends } from "./overall-trends"
import { TeamPerformance } from "./team-performance"
import { WeeklySummary } from "./weekly-summary"

export function MainAnalysisSection() {
  return (
    <div className="flex gap-3 h-full">
      {/* Left Side - 70% width */}
      <div className="flex flex-col gap-3 w-[70%] h-full">
        {/* Overall Trends - Takes more space */}
        <div className="flex-[1.2] min-h-0">
          <OverallTrends />
        </div>
        {/* Team Performance - Fixed height */}
        <div className="flex-1 min-h-0">
          <TeamPerformance />
        </div>
      </div>

      {/* Right Side - 30% width */}
      <div className="w-[30%] h-full">
        <WeeklySummary />
      </div>
    </div>
  )
}
