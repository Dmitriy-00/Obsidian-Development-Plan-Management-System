// development-modes.js
class DiagnosticSystem {
    constructor() {
        this.metricsPath = 'logs/metrics/';
        this.debugPath = 'logs/debug/';
        this.performancePath = 'logs/performance/';
        this.sessionData = {};
    }

    async init() {
        await this.ensureDirectories();
        this.startSession();
        return this;
    }

    async logMetric(category, name, value, metadata = {}) {
        const metric = {
            timestamp: new Date(),
            category,
            name,
            value,
            metadata
        };

        this.sessionData.metrics[`${category}.${name}`] = value;
        await this.writeToLog('metrics', metric);
    }
}
