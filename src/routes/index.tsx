import React from "react";
import { Routes, Route , Navigate } from "react-router-dom";
import Store from "../pages/Store";

function Router() {

	return (
		<Routes>
			<Route path="/" element={
				<Navigate to="/store" />
			} />
			
			<Route path="/store" element={
				<Store />
			} />
		</Routes>
	);
}

export default Router;