

// Testing/Integration/ConfigTests.js
class ConfigurationTests {
    constructor(diagnostics) {
        this.diagnostics = diagnostics;
        this.results = {
            passed: 0,
            failed: 0,
            skipped: 0
        };
    }

    async runAllTests() {
        console.log("Starting integration tests...");
        
        try {
            await this.testTasksIntegration();
            await this.testDataviewIntegration();
            await this.testKanbanIntegration();
            await this.testHomepageIntegration();
            await this.testMetaBindIntegration();
            await this.testCrossPluginInteractions();
            
            console.log("Tests completed:", this.results);
        } catch (error) {
            console.error("Test suite failed:", error);
            await this.diagnostics.logError(error, "Integration Tests");
        }
    }

    async testTasksIntegration() {
        const testCases = [
            {
                name: "Task Creation",
                test: async () => {
                    const taskContent = "- [ ] #task Test task ⏫ 📅 2024-12-31";
                    const file = "tests/temp/task-test.md";
                    
                    await app.vault.create(file, taskContent);
                    const tasks = await this.getTasksFromFile(file);
                    
                    assert(tasks.length === 1, "Task should be created");
                    assert(tasks[0].priority === "high", "Priority should be set");
                    assert(tasks[0].due === "2024-12-31", "Due date should be set");
                    
                    await app.vault.delete(file);
                }
            },
            {
                name: "Task Status Workflow",
                test: async () => {
                    const initialContent = "- [ ] #task Test workflow";
                    const file = "tests/temp/workflow-test.md";
                    
                    await app.vault.create(file, initialContent);
                    await this.toggleTaskStatus(file, 0);
                    
                    const tasks = await this.getTasksFromFile(file);
                    assert(tasks[0].status === "in-progress", "Status should update");
                    
                    await app.vault.delete(file);
                }
            }
        ];

        await this.runTestCases("Tasks Integration", testCases);
    }

    async testDataviewIntegration() {
        const testCases = [
            {
                name: "Query Execution",
                test: async () => {
                    const query = `
                        TABLE status, priority
                        FROM #task
                        WHERE !completed
                    `;
                    
                    const results = await this.runDataviewQuery(query);
                    assert(Array.isArray(results), "Query should return results");
                }
            }
        ];

        await this.runTestCases("Dataview Integration", testCases);
    }
}


