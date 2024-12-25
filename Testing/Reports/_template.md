---
type: test-report
created: <% tp.date.now() %>
---

# Test Execution Report

## Summary
- **Date:** <% tp.date.now("YYYY-MM-DD") %>
- **Type:** {{type}}
- **Status:** {{status}}

## Test Results
```dataviewjs
const results = dv.current();
const tests = results.tests || [];

dv.table(
    ["Test", "Status", "Duration"],
    tests.map(t => [
        t.name,
        t.status,
        `${t.duration}ms`
    ])
);
```

## Coverage Report
```dataviewjs
const coverage = dv.current().coverage || {};

const table = [
    ["Statements", coverage.statements],
    ["Branches", coverage.branches],
    ["Functions", coverage.functions],
    ["Lines", coverage.lines]
];

dv.table(["Metric", "Coverage"], table);
```

## Issues Found
```tasks
created today
path includes Testing
status includes failed
```