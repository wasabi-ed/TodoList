import React, { Component, useState } from "react";
import PropTypes from "prop-types";

export function Todo(props) {
	const [isShown, setIsShown] = useState(false);
	const [value, setValue] = useState("");
	const [toDoList, setToDoList] = useState([]);

	let handleSubmit = e => {
		e.preventDefault();
		addToDo(value);
		setValue("");
		if (!value) {
			alert("Form Cannot be Empty");
			return;
		}
	};

	const addToDo = text => {
		const updatedToDoList = [...toDoList, { text }];
		setToDoList(updatedToDoList);
	};

	const handleDelete = todo => {
		const filteredToDoList = toDoList.filter(
			currentToDoListValue => currentToDoListValue !== todo
		);
		setToDoList(filteredToDoList);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1 className="jumbotron text-center jumbotron-fluid bg-dark text-light">
					To-Do List
				</h1>
				<div className="text-center">
					<input
						type="text"
						className="input"
						value={value}
						placeholder="New Task..."
						onChange={e => setValue(e.target.value)}
					/>
					{/* <button className="btn btn-primary" type="submit">
						Enter
					</button> */}
				</div>
				<div className="card-rows">
					<div
						onMouseEnter={() => setIsShown(true)}
						onMouseLeave={() => setIsShown(false)}>
						{toDoList.map((todo, index) => (
							<span key={index}>
								<div className="container">
									<p className="text-center">
										<strong>{todo.text}</strong>
									</p>
									{isShown && (
										<div className="text-center">
											<button
												type="button"
												className="btn btn-danger"
												onClick={() =>
													handleDelete(todo)
												}>
												Done
											</button>
										</div>
									)}
								</div>
							</span>
						))}
					</div>
					<div>
						{toDoList.length === 0 && (
							<div className="text-center">
								<strong>No tasks, add a task...</strong>
							</div>
						)}
					</div>
				</div>
			</form>
		</div>
	);
}
