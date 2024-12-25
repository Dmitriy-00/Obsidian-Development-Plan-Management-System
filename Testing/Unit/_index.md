---
type: test-index
category: unit
---

# Unit Tests Overview

## Test Suites
```dataviewjs
const suites = dv.pages("#test")
    .where(t => t.type === "unit");

dv.table(
    ["Suite", "Status", "Coverage"],
    suites.map(s => [
        s.file.link,
        s.status,
        s.coverage ? `${s.coverage}%` : "N/A"
    ])
);
```

## Recent Results
```tasks
path includes Testing/Unit
done after <% tp.date.now("YYYY-MM-DD", -7) %>
sort by done reverse
```