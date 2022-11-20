import React from "react";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { reduxStore } from "./redux";

function App() {
	return (
		<Provider store={reduxStore}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
