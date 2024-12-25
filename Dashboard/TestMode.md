---
mode: testing
cssclass: test-mode
---

# 🔍 Testing Mode

## Test Coverage
```dataviewjs
const tests = dv.pages("#test");
const total = tests.length;
const passed = tests.where(t => t.status === "passed").length;

dv.paragraph(`**Overall Coverage:** ${Math.round((passed/total) * 100)}%`);
```

## Current Test Suite
```tasks
not done
path includes Testing
group by type
```