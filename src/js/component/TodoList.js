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
								let newList = [...list, task]; //adds all elements at the end.
								setList(newList);
								setTask("");
							}
						}}
					/>
					<div>
						<ul>
							{list.map((item, index) => {
								return (
									<li key={index}>
										{item}
										<button
											onClick={() => {
												let newList = list.filter(
													(item, i) => {
														return i !== index;
													}
												);
												setList(newList);
											}}>
											x
										</button>
									</li>
								);
							})}
						</ul>
					</div>
					<div>Whats left: {list.length}</div>
				</div>
			</div>
		</div>
	);
}
