import React, { Component } from 'react';

import FlowEngine from './components/flowengine';
import Results from './components/results';
import Rules from './components/rules';
import Executor from './components/executor';

import FlowEngineExecutor from './lib/flowengine';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rules: [],
			currentResults: null
		};

		this.flowEngineExecutor = new FlowEngineExecutor();
		this.addRule = this.addRule.bind(this);
		this.execute = this.execute.bind(this);
	}

	addRule(rule) {
		const { rules } = this.state;

		this.setState({ rules: [...rules, rule] });
	}

	execute(obj) {
		this.setState({ currentResults: null });

		const results = this.flowEngineExecutor.execute(obj, this.state.rules);

		this.setState({ currentResults: results });
	}

	render() {
		return (
			<div className="app">
				<FlowEngine addRule={this.addRule} />
				<Rules rules={this.state.rules} />
				<Executor execute={this.execute} />
				<Results results={this.state.currentResults} />
			</div>
		);
	}
}

export default App;
