import React from "react";
import colors from "../../styles/colors";
import * as S from "./styles";
import Container from "../../components/Container";
import bannerImage from "../../assets/images/image7.png";
import Text from "../../components/Text";
import Button from "../../components/Button";

function Welcome() {
	const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    
	return (
		<Container flex margin="auto" width="100%" height="100vh" backgroundColor={colors.primary}>
			<Container flex direction="column" alignItems="center" justifyContent="space-between" width="65%">
				<Container margin="auto" height="100px">
					<Text text="Glasses Store" size="100px" weight={600} color={colors.light} align="center" />
				</Container>
                
				<Container flex direction="column" margin="auto" width="80%" height="400px">
					<Text text={text} color={colors.light} size="20px" />

					<Container flex margin="72px auto" width="372px">
						<Button text="Especificar" color={colors.primary} fontSize="20px" fontWeight={500} width="150px" height="50px" backgroundColor={colors.light} borderRadius="7px" />
						<Button text="Prosseguir" color={colors.light} fontSize="20px" fontWeight={500} width="150px" height="50px" backgroundColor="transparent" border={`2px solid ${colors.light}`} borderRadius="7px" linkReference="/main"/>
					</Container>
				</Container>
			</Container>

			<Container flex direction="column" width="35%">
				<S.Banner src={bannerImage} alt="home image" />
			</Container>
		</Container>
	);
}

export default Welcome;
