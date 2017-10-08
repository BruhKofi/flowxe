import React from 'react';

import './flowengine.css';

class FlowEngine extends React.Component {
	constructor(props) {
		super(props);

		this.onHandleSubmit = this.onHandleSubmit.bind(this);
		this.onChange = this.onChange.bind(this);

		this.state = {
			id: '',
			title: '',
			body: '',
			trueId: '',
			falseId: ''
		};
	}

	onHandleSubmit(evt) {
		evt.preventDefault();

		const { id, title, trueId, falseId, body } = this.state;
		this.props.addRule({ id, title, trueId, falseId, body });

		this.setState({
			id: '',
			title: '',
			body: '',
			trueId: '',
			falseId: ''
		});
	}

	onChange(evt) {
		const { name, value } = evt.target;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<div className="flowengine">
				<h1 className="header">Create Flow</h1>
				<div className="card">
					<form onSubmit={this.onHandleSubmit}>
						<div className="form-group">
							<label>Rule Title</label>
							<input
								className="form-control"
								placeholder="rule 1"
								type="text"
								name="title"
								onChange={this.onChange}
								value={this.state.title}
							/>
						</div>

						<div className="form-group">
							<label>Rule Id</label>
							<input
								className="form-control"
								placeholder="1"
								type="text"
								name="id"
								onChange={this.onChange}
								value={this.state.id}
							/>
						</div>

						<div className="form-group">
							<label>Function</label>
							<textarea
								className="form-control"
								placeholder="Rule Function Body"
								name="body"
								onChange={this.onChange}
								value={this.state.body}
							/>
						</div>

						<div className="form-group">
							<label>True Id</label>
							<input
								className="form-control"
								placeholder="//next rule id 4"
								type="text"
								name="trueId"
								onChange={this.onChange}
								value={this.state.trueId}
							/>
						</div>

						<div className="form-group">
							<label>False Id</label>
							<input
								className="form-control"
								placeholder="//next rule id 3"
								type="text"
								name="falseId"
								onChange={this.onChange}
								value={this.state.falseId}
							/>
						</div>
						<button
							type="submit"
							className="blue btn-primary"
							onClick={this.onHandleSubmit}
						>
							Add Rule
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default FlowEngine;
