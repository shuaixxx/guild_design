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
    <div className="rounded-lg border border-border bg-card p-3 shrink-0">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-foreground">场次胜负时间线</h3>
        
        {/* Legend */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-[10px] text-muted-foreground">胜</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <span className="text-[10px] text-muted-foreground">负</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {matchData.map((match) => (
          <div
            key={match.id}
            className={`shrink-0 w-[130px] rounded-lg border p-2.5 transition-colors ${
              match.result === "win" 
                ? "border-green-500/30 bg-green-500/5 hover:border-green-500/50" 
                : "border-red-500/30 bg-red-500/5 hover:border-red-500/50"
            }`}
          >
            {/* Date */}
            <div className="text-[10px] text-muted-foreground mb-1">{match.date}</div>

            {/* Opponent */}
            <div className="text-xs font-medium text-foreground mb-1.5">VS {match.opponent}</div>

            {/* Result & Participants */}
            <div className="flex items-center justify-between mb-1">
              <div className={`flex items-center gap-0.5 ${
                match.result === "win" ? "text-green-500" : "text-red-500"
              }`}>
                {match.result === "win" ? (
                  <Trophy className="h-3 w-3" />
                ) : (
                  <XCircle className="h-3 w-3" />
                )}
                <span className="text-[10px] font-medium">
                  {match.result === "win" ? "胜" : "负"}
                </span>
              </div>
              <div className="flex items-center gap-0.5 text-muted-foreground">
                <Users className="h-2.5 w-2.5" />
                <span className="text-[10px]">{match.participants}人</span>
              </div>
            </div>

            {/* Team Score */}
            <div className="flex items-baseline gap-1">
              <span className="text-[10px] text-muted-foreground">团队评分</span>
              <span className="text-sm font-semibold text-primary">{match.teamScore}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
