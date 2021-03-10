import React from "react";
import PropTypes from "prop-types";

export function ListaTarea(props) {
	const deleteT = index => {
		const newList = props.list.filter((tarea, indexit) => {
			return indexit !== index;
		});
		props.actList(newList);
	};
	return (
		<div className="Lista">
			<ul>
				{props.list.map((tarea, index) => {
					return (
						<li key={index}>
							{tarea}
							<span>
								<button
									onClick={() => deleteT(index)}
									className="btn btn-warning btn-circle btn-xl">
									<i className="fa fa-times"></i>
								</button>
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

ListaTarea.propTypes = {
	list: PropTypes.array,
	actList: PropTypes.func
};
