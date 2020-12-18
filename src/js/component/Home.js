import React, { Component, useState } from "react";
import PropTypes from "prop-types";

import { Todo } from "./Todo";

export function Home() {
	return (
		<div>
			<Todo />
		</div>
	);
}
