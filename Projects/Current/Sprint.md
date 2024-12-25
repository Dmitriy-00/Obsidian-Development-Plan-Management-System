---
type: sprint
status: active
start: <% tp.date.now() %>
end: <% tp.date.now("YYYY-MM-DD", 14) %>
tags: [sprint]
---

## Sprint Goals
- Implement core functionality
- Complete basic testing
- Set up documentation

## Kanban Board
```kanban-plugin
enableLinks
hiddenModals: NEW_NOTE_FOLDER
lane1:
  title: Backlog
lane2:
  title: In Progress
lane3:
  title: Review
lane4:
  title: Done
```

## Tasks Progress
```tasks
not done
path includes {{title}}
group by priority
```

## Daily Notes
```dataview
LIST
FROM "Notes/Daily"
WHERE contains(sprint, this.file.name)
SORT file.name DESC
```
 