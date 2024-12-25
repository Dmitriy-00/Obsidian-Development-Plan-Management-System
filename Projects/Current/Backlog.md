---
type: backlog
status: active
---

## High Priority
```tasks
not done
priority is high
no start date
sort by priority
```

## Features
```dataviewjs
const features = dv.pages("#feature")
    .where(f => f.status === "planned");

dv.table(
    ["Feature", "Priority", "Estimated"],
    features.map(f => [
        f.file.link,
        f.priority,
        f.estimate || "TBD"
    ])
);
```

## Technical Debt
```tasks
not done
tags include tech-debt
sort by priority
```