---
type: component-index
category: logic
---

# Logic Components Index

## Active Components
```dataviewjs
const components = dv.pages("#component")
    .where(c => c.type === "logic" && c.status === "active");

dv.table(
    ["Component", "Status", "Dependencies"],
    components.map(c => [
        c.file.link,
        c.status,
        c.dependencies?.join(", ") || "None"
    ])
);
```

## Implementation Status
```tasks
path includes Components/Logic
not done
group by status
```
