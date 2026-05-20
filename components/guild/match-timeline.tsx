"use client"

import { Trophy, XCircle } from "lucide-react"

const matchData = [
  {
    id: 1,
    date: "05/28",
    opponent: "青云剑阁",
    result: "win",
    matchNo: "#48",
    teamScore: 92.4,
  },
  {
    id: 2,
    date: "05/27",
    opponent: "灵汐阁",
    result: "win",
    matchNo: "#47",
    teamScore: 89.7,
  },
  {
    id: 3,
    date: "05/26",
    opponent: "万妖殿",
    result: "lose",
    matchNo: "#46",
    teamScore: 78.2,
  },
  {
    id: 4,
    date: "05/25",
    opponent: "合欢派",
    result: "win",
    matchNo: "#45",
    teamScore: 93.2,
  },
  {
    id: 5,
    date: "05/24",
    opponent: "焚香谷",
    result: "win",
    matchNo: "#44",
    teamScore: 88.5,
  },
  {
    id: 6,
    date: "05/23",
    opponent: "天音寺",
    result: "lose",
    matchNo: "#43",
    teamScore: 75.8,
  },
  {
    id: 7,
    date: "05/22",
    opponent: "鬼王宗",
    result: "win",
    matchNo: "#42",
    teamScore: 91.3,
  },
  {
    id: 8,
    date: "05/21",
    opponent: "河阳城",
    result: "win",
    matchNo: "#41",
    teamScore: 86.9,
  },
  {
    id: 9,
    date: "05/20",
    opponent: "青云剑阁",
    result: "win",
    matchNo: "#40",
    teamScore: 90.1,
  },
  {
    id: 10,
    date: "05/19",
    opponent: "灵汐阁",
    result: "lose",
    matchNo: "#39",
    teamScore: 72.4,
  },
]

export function MatchTimeline() {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-foreground">场次胜负时间线</h3>
        
        {/* Legend */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground">胜利</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <span className="text-xs text-muted-foreground">失败</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {matchData.map((match) => (
          <div
            key={match.id}
            className={`shrink-0 w-36 rounded-lg border p-3 transition-colors ${
              match.result === "win" 
                ? "border-green-500/30 bg-green-500/5 hover:border-green-500/50" 
                : "border-red-500/30 bg-red-500/5 hover:border-red-500/50"
            }`}
          >
            {/* Date & Match No */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">{match.date}</span>
              <span className="text-[10px] text-muted-foreground/60">{match.matchNo}</span>
            </div>

            {/* Opponent */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-foreground">vs {match.opponent}</span>
            </div>

            {/* Result */}
            <div className="flex items-center justify-between">
              <div className={`flex items-center gap-1 ${
                match.result === "win" ? "text-green-500" : "text-red-500"
              }`}>
                {match.result === "win" ? (
                  <Trophy className="h-3.5 w-3.5" />
                ) : (
                  <XCircle className="h-3.5 w-3.5" />
                )}
                <span className="text-xs font-medium">
                  {match.result === "win" ? "胜利" : "失败"}
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-semibold text-foreground">{match.teamScore}</span>
                <span className="text-[10px] text-muted-foreground">分</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
