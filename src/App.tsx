import React from "react";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
	return (
		<BrowserRouter>
			<Router />
			<GlobalStyles />
		</BrowserRouter>
	);
}

export default App;
