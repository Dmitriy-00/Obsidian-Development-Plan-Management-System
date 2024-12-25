
class Utils {
    fs = {
        async createFromTemplate(template, path, data) {
            const templateContent = await app.vault.read(`Templates/${template}.md`);
            const content = this.template.render(templateContent, data);
            return await app.vault.create(path, content);
        },

        async ensureDir(path) {
            if (!await app.vault.adapter.exists(path)) {
                await app.vault.createFolder(path);
            }
        }
    };

    template = {
        render(template, data) {
            return template.replace(/\{\{(.*?)\}\}/g, (match, key) => {
                const value = key.split('.')
                    .reduce((obj, key) => obj?.[key], data);
                return value !== undefined ? value : match;
            });
        }
    };
}

export const utils = new Utils();
