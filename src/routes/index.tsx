import React from "react";
import { Routes, Route , Navigate } from "react-router-dom";
import Store from "../pages/Store";
import Welcome from "../pages/Welcome";

function Router() {

	return (
		<Routes>			
			<Route path="/" element={
				<Navigate to="/welcome" />
			} />

			<Route path="/welcome" element={
				<Welcome />
			} />
			
			<Route path="/store" element={
				<Store />
			} />
		</Routes>
	);
}

export default Router;