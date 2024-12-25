---
type: guide
category: getting-started
created: <% tp.date.now() %>
---

# Getting Started Guide

## Prerequisites
- Obsidian v1.0.0 or higher
- Following plugins installed:
  - Tasks
  - Dataview
  - CustomJS
  - Meta Bind
  - Calendar
  - Homepage
  - Kanban
  - Copilot

## Installation

1. Create new Obsidian vault or open existing
2. Clone repository:
```bash
git clone https://github.com/yourusername/obsidian-dev-assistant.git
```

3. Copy configurations:
```bash
cp -r obsidian-dev-assistant/.obsidian/* YOUR_VAULT/.obsidian/
```

4. Enable required plugins in Obsidian settings

## Initial Setup

1. Open dashboard at `Dashboard/Home.md`
2. Set up your project in `Projects/Current/`
3. Start creating components using templates
4. Configure your workspace layout

## Basic Usage

### Creating Components
1. Use component template
2. Fill required metadata
3. Set up tasks
4. Track progress

### Managing Tasks
- Use `#task` tag
- Set priorities with ⏫ 🔼 🔽
- Add due dates with 📅
- Assign with 👤

### Running Tests
1. Switch to test mode
2. Execute test suite
3. Document results
4. Update status