"use client"

import { AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const alerts = [
  { id: 1, message: "2人连续两场未参赛", count: 2, type: "warning" },
  { id: 2, message: "机动团治疗偏弱", type: "warning" },
  { id: 3, message: "1名旗手丢旗率偏高", type: "error" },
]

export function AlertPanel() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="flex items-center gap-2 text-sm font-semibold">
          <span className="text-primary">异常提醒</span>
          <Badge className="h-5 w-5 rounded-full bg-destructive p-0 text-xs text-destructive-foreground">
            3
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start gap-2 rounded-lg bg-secondary/50 p-2.5 text-sm"
          >
            <AlertTriangle className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
              alert.type === "error" ? "text-destructive" : "text-warning"
            }`} />
            <span className="flex-1 text-foreground">{alert.message}</span>
            {alert.count && (
              <Badge variant="secondary" className="h-5 min-w-[20px] justify-center px-1.5 text-xs">
                {alert.count}
              </Badge>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
