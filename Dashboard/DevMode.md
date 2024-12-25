---
mode: development
cssclass: dev-mode
---

# 🛠️ Development Mode

## Current Sprint Overview
```dataviewjs
const sprint = dv.page("Projects/Current/Sprint");
const tasks = dv.pages("#task").where(t => !t.completed);

dv.paragraph(`**Sprint:** ${sprint.name}`);
dv.paragraph(`**Progress:** ${Math.round((sprint.completed / sprint.total) * 100)}%`);
```

## Active Components
```dataviewjs
const components = dv.pages("#component")
    .where(c => c.status === "in-progress");

dv.table(
    ["Component", "Priority", "Assignee"],
    components.map(c => [
        c.file.link,
        c.priority,
        c.assignee || "Unassigned"
    ])
);
```