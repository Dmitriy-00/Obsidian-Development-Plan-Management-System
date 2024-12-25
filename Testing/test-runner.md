# Integration Test Runner

## Test Execution
```dataviewjs
// Get test instance
const tests = customJS.configTests;

// Create control panel
const controlDiv = dv.el("div", "", {cls: "test-controls"});

// Add run button
const runButton = controlDiv.createEl("button", {
    text: "Run All Tests",
    cls: "test-button"
});

runButton.addEventListener("click", async () => {
    runButton.disabled = true;
    runButton.textContent = "Running...";
    await tests.runAllTests();
    runButton.disabled = false;
    runButton.textContent = "Run All Tests";
    dv.refresh();
});
```

## Test Results
```dataviewjs
const results = customJS.configTests.results;

const resultsDiv = dv.el("div", "", {cls: "test-results"});

// Create results summary
const summary = resultsDiv.createEl("div", {cls: "results-summary"});
summary.createEl("div", {text: `✓ Passed: ${results.passed}`});
summary.createEl("div", {text: `✗ Failed: ${results.failed}`});
summary.createEl("div", {text: `○ Skipped: ${results.skipped}`});
```

## Recent Test Logs
```dataviewjs
// Get diagnostic logs
const diagnostics = customJS.diagnostics;
const recentLogs = await diagnostics.getRecentLogs("test");

const logsDiv = dv.el("div", "", {cls: "test-logs"});

// Display recent logs
recentLogs.forEach(log => {
    const logEntry = logsDiv.createEl("div", {cls: "log-entry"});
    logEntry.createEl("span", {
        text: log.timestamp.toLocaleTimeString(),
        cls: "log-time"
    });
    logEntry.createEl("span", {
        text: log.type === "error" ? "✗" : "✓",
        cls: `log-status log-${log.type}`
    });
    logEntry.createEl("span", {
        text: log.message,
        cls: "log-message"
    });
});
```

## Test Coverage
```dataviewjs
// Calculate test coverage
const plugins = ["Tasks", "Dataview", "Kanban", "Homepage", "MetaBind"];
const coverage = {};

plugins.forEach(plugin => {
    const tests = dv.pages("#test")
        .where(p => p.file.path.includes(plugin.toLowerCase()));
    coverage[plugin] = {
        total: tests.length,
        passed: tests.where(t => t.status === "passed").length
    };
});

// Create coverage table
dv.table(
    ["Plugin", "Coverage", "Status"],
    Object.entries(coverage).map(([plugin, data]) => [
        plugin,
        `${Math.round((data.passed / data.total) * 100)}%`,
        data.passed === data.total ? "✓" : "○"
    ])
);
```

## Failed Tests
```tasks
path includes tests
not done
status includes failed
sort by priority
```

## Style Definitions
```css
.test-controls {
    margin: 20px 0;
}

.test-button {
    padding: 10px 20px;
    background: var(--interactive-accent);
    color: var(--text-on-accent);
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.test-button:disabled {
    opacity: 0.7;
    cursor: wait;
}

.results-summary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 20px 0;
}

.test-logs {
    margin: 20px 0;
}

.log-entry {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 0;
    border-bottom: 1px solid var(--background-modifier-border);
}

.log-time {
    color: var(--text-muted);
    font-size: 0.9em;
}

.log-status {
    font-weight: bold;
}

.log-error {
    color: var(--text-error);
}

.log-success {
    color: var(--text-success);
}
```

## Test History
```dataviewjs
// Get test history
const history = dv.pages("#test")
    .sort(p => p.file.mtime, "desc")
    .limit(10);

dv.table(
    ["Test", "Result", "Date"],
    history.map(p => [
        p.file.link,
        p.status === "passed" ? "✓" : "✗",
        moment(p.file.mtime).fromNow()
    ])
);
```
