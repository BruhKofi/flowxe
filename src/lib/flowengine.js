class FlowEngineExecutor {
    constructor(obj) {
        this.results = [];
        this.currentRules = [];
    }

    parseObjectData(obj) {
        if (typeof obj === 'string') {
            return JSON.parse(obj);
        }

        return obj;
    }

    setNewObjectData(obj) {
        const data = this.parseObjectData(obj);
        this.data = data;
    }

    executeRule(id) {
        const rule = this.currentRules.find(rule => rule.id === id);
        if (!rule) return;

        const func = eval(`(${rule.body})`);

        if (func(this.data)) {
            this.results.push({ id: rule.id, status: 'passed' });
            this.executeRule(rule.trueId);
        } else {
            this.results.push({ id: rule.id, status: 'failed' });
            this.executeRule(rule.falseId);
        }
    }

    execute(data, rules) {
        if (!rules || !data) return { type: 'error', data: null };

        this.currentRules = rules;
        this.results = [];

        try {
            this.setNewObjectData(data);
            this.executeRule(this.currentRules[0].id);
            return { type: 'success', data: this.results };
        } catch (error) {
            return { type: 'error', data: null };
        }
    }
}

export default FlowEngineExecutor;
