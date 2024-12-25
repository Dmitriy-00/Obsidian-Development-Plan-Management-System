---
type: component-index
category: ui
---

# UI Components Index

## Active Components
```dataviewjs
const components = dv.pages("#component")
    .where(c => c.type === "ui" && c.status === "active");

dv.table(
    ["Component", "Status", "Priority", "Assignee"],
    components.map(c => [
        c.file.link,
        c.status,
        c.priority,
        c.assignee || "Unassigned"
    ])
);
```

## Component Status
```tasks
path includes Components/UI
group by status
```
