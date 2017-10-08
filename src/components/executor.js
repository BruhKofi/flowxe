import React from 'react';
import './executor.css';

class Executor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			body: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(evt) {
		this.setState({ body: evt.target.value });
	}

	handleClick() {
		this.props.execute(this.state.body);
	}

	render() {
		return (
			<div className="results">
				<h1>Execute Flow</h1>
				<div className="row">
					<div className="">
						<div className="form-group">
							<label>Object</label>
							<textarea
								placeholder="JSON body"
								onChange={this.handleChange}
								className="form-control"
								value={this.state.body}
							/>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-2">
						<button onClick={this.handleClick} className="btn btn-primary">
							Execute
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Executor;
