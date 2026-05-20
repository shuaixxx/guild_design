"use client"

import { OverallTrends } from "./overall-trends"
import { TeamPerformance } from "./team-performance"
import { WeeklySummary } from "./weekly-summary"

export function MainAnalysisSection() {
  return (
    <div className="flex gap-4 h-full">
      {/* Left Side - 70% width */}
      <div className="flex flex-col gap-4 w-[70%] h-full">
        {/* Overall Trends - 60-65% */}
        <div className="flex-[1.8] min-h-0">
          <OverallTrends />
        </div>
        {/* Team Performance - 35-40% */}
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
