"use client"

import { Trophy, XCircle, Users } from "lucide-react"

const matchData = [
  {
    id: 1,
    date: "05-18",
    opponent: "3团",
    result: "win",
    participants: 41,
    teamScore: 2012,
  },
  {
    id: 2,
    date: "05-22",
    opponent: "防守团",
    result: "win",
    participants: 43,
    teamScore: 2294,
  },
  {
    id: 3,
    date: "05-28",
    opponent: "机动团",
    result: "lose",
    participants: 39,
    teamScore: 2118,
  },
  {
    id: 4,
    date: "06-03",
    opponent: "1团",
    result: "win",
    participants: 45,
    teamScore: 2412,
  },
  {
    id: 5,
    date: "06-09",
    opponent: "5团",
    result: "lose",
    participants: 39,
    teamScore: 2248,
  },
  {
    id: 6,
    date: "06-15",
    opponent: "防守团",
    result: "win",
    participants: 44,
    teamScore: 2588,
  },
  {
    id: 7,
    date: "06-17",
    opponent: "2团",
    result: "win",
    participants: 44,
    teamScore: 2742,
  },
]

export function MatchTimeline() {
  return (
    <div className="rounded-lg border border-border bg-card p-4 h-full flex flex-col min-h-0 min-w-0">
      <div className="flex items-center justify-between mb-3 shrink-0">
        <h3 className="text-[15px] font-semibold text-foreground">场次胜负时间线</h3>
        
        {/* Legend */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground">胜</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="text-xs text-muted-foreground">负</span>
          </div>
        </div>
      </div>

      {/* Timeline - 7 columns grid */}
      <div className="flex-1 grid grid-cols-7 gap-3 min-h-0 min-w-0">
        {matchData.map((match) => (
          <div
            key={match.id}
            className={`rounded-lg border p-3 transition-colors flex flex-col min-w-0 ${
              match.result === "win" 
                ? "border-green-500/30 bg-green-500/5 hover:border-green-500/50" 
                : "border-red-500/30 bg-red-500/5 hover:border-red-500/50"
            }`}
          >
            {/* Date */}
            <div className="text-xs text-muted-foreground mb-1">{match.date}</div>

            {/* Opponent */}
            <div className="text-sm font-medium text-foreground mb-2 truncate">VS {match.opponent}</div>

            {/* Result */}
            <div className={`flex items-center gap-1 mb-2 ${
              match.result === "win" ? "text-green-500" : "text-red-500"
            }`}>
              {match.result === "win" ? (
                <Trophy className="h-4 w-4" />
              ) : (
                <XCircle className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">
                {match.result === "win" ? "胜" : "负"}
              </span>
            </div>

            {/* Participants */}
            <div className="flex items-center gap-1 text-muted-foreground mb-2">
              <Users className="h-3.5 w-3.5" />
              <span className="text-xs">{match.participants}人</span>
            </div>

            {/* Team Score */}
            <div className="mt-auto">
              <span className="text-xs text-muted-foreground">评分</span>
              <div className="text-lg font-bold text-primary">{match.teamScore}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
