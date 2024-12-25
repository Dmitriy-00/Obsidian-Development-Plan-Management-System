---
cssclass: dashboard
---

# 🎯 Development Hub

## 🔄 Current Mode & Status
```dataviewjs
const configFile = dv.page("config/development-config");
const currentMode = configFile.activeMode || "development";
const metrics = await customJS.diagnostics.aggregateData();

const modeDiv = dv.el("div", "", {cls: "mode-display"});
modeDiv.createEl("span", {text: `Current Mode: ${currentMode === "development" ? "🛠️ Development" : "🔍 Testing"}`});

const toggleBtn = modeDiv.createEl("button", {
    text: currentMode === "development" ? "Switch to Testing" : "Switch to Development",
    cls: "mode-toggle"
});

const duration = Math.round((new Date() - metrics.sessionStartTime) / 1000 / 60);
dv.el("div", `Session Duration: ${duration} minutes`, {cls: "session-info"});
```

## 📊 Key Metrics
```dataviewjs
const componentStats = dv.pages("#component").where(p => p.status);
const testStats = dv.pages("#test").where(p => p.status);

const statsDiv = dv.el("div", "", {cls: "metrics-grid"});

function createMetricCard(title, value, icon) {
    const card = statsDiv.createEl("div", {cls: "metric-card"});
    card.createEl("div", {text: icon, cls: "metric-icon"});
    card.createEl("div", {text: value, cls: "metric-value"});
    card.createEl("div", {text: title, cls: "metric-label"});
}

createMetricCard(
    "Components",
    componentStats.length,
    "🧩"
);

createMetricCard(
    "Active Tasks",
    dv.pages("#task").where(t => !t.completed).length,
    "📝"
);

createMetricCard(
    "Test Coverage",
    `${Math.round((testStats.where(t => t.status === "passed").length / testStats.length) * 100)}%`,
    "🎯"
);

createMetricCard(
    "Open Issues",
    dv.pages("#bug").where(b => b.status === "open").length,
    "🐛"
);
```




