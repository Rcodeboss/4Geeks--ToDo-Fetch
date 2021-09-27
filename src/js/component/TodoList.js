import React from "react";

export function TodoList() {
	const [task, setTask] = React.useState("");
	const [list, setList] = React.useState([]);

	return (
		<div className="container d-flex justify-content-center p-5">
			<div className="row">
				<div className="col">
					<h1>TODOLIST</h1>
					<input
						type="text"
						placeholder="What to do?"
						value={task}
						onChange={event => setTask(event.target.value)}
						onKeyUp={event => {
							if (event.key === "Enter") {
								//let newList = task.concat([]);
								let newList = [...task, list]; //adds all elements at the end.
								setList(newList);
								setList("");
								newList.map((todo, i) => {
									return (
										<div key={i}>
											<ul>
												<li>{todo}</li>
											</ul>
										</div>
									);
								});
							}
						}}></input>
				</div>
			</div>
		</div>
	);
}
