# Config/Settings.md
---
type: settings
version: 1.0.0
---

# System Settings

## Global Configuration
```yaml
system:
  defaultMode: development
  theme: dark
  language: en
  autoBackup: true
  diagnostics: true

paths:
  components: Components/
  documentation: Documentation/
  templates: Templates/
  tests: Testing/

features:
  taskTracking: true
  diagnostics: true
  autoSave: true
  backups: true
```

## Plugin Settings
```yaml
tasks:
  globalFilter: "#task"
  defaultPriority: medium
  statusColors:
    todo: "#808080"
    in-progress: "#0074D9"
    done: "#2ECC40"

dataview:
  refreshInterval: 1000
  maxRecursiveRenderDepth: 4
  inlineQueryPrefix: "="

customjs:
  allowedPaths:
    - Scripts/
    - Testing/
  debugMode: true
```

# Config/Metadata.md
---
type: metadata
version: 1.0.0
---

# Metadata Schemas

## Component Metadata
```yaml
required:
  - id
  - name
  - type
  - status
  - priority

properties:
  id:
    type: string
    pattern: "^[a-zA-Z][a-zA-Z0-9-_]*$"
  
  name:
    type: string
    minLength: 3
    maxLength: 50
  
  type:
    type: string
    enum:
      - ui
      - logic
      - shared
  
  status:
    type: string
    enum:
      - planned
      - in-progress
      - review
      - completed
  
  priority:
    type: string
    enum:
      - low
      - medium
      - high
      - critical
```

## Task Metadata
```yaml
required:
  - title
  - type
  - status
  - priority

properties:
  title:
    type: string
    minLength: 5
    maxLength: 200
  
  type:
    type: string
    enum:
      - development
      - testing
      - documentation
      - bug
  
  status:
    type: string
    enum:
      - todo
      - in-progress
      - review
      - done
      - blocked
  
  priority:
    type: string
    enum:
      - low
      - medium
      - high
      - critical
```
