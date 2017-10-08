import React from 'react';

const Rules = ({ rules }) => (
	<div>
		<h1>2. List of Rules</h1>
		<div className="rules">
			<div className="row">
				<div className="rule-list">
					{rules.length ? (
						<ul>
							{rules.map((rule, key) => (
								<div key={key} className="rule-item">
									Rule {rule.id}
								</div>
							))}
						</ul>
					) : (
						<p>No rules has been set yet</p>
					)}
				</div>
			</div>
		</div>
	</div>
);

export default Rules;
