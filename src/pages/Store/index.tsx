import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as S from "./styles";

function Main () {
	return (
		<S.BackgroundPaper>
			<Header />
			<Menu />
		</S.BackgroundPaper>
	);
}

export default Main;