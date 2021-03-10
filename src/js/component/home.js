import React, { useState } from "react";

import { ListaTarea } from "./lista-tarea";

//create your first component
export function Home() {
	const [list, setList] = useState([]);

	const handle = e => {
		if (e.key === "Enter") {
			setList([...list, e.target.value]);
			e.target.value = "";
		}
	};

	return (
		<div className="text-center">
			<h1>Todos</h1>
			<input
				type="text"
				placeholder="What needs to be done?"
				onKeyDown={handle}
			/>
			<ListaTarea list={list} actList={setList} />
		</div>
	);
}
