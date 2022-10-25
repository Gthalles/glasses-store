import React from "react";
import * as S from "./styles";
import products from "../../assets/products/glasses";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { IGlasses } from "../../models/IGlasses";

function Main () {
	return (
		<S.BackgroundPaper>
			<Header />
			<Menu />
			<S.Main>
				<S.Aside />
				<S.Section>
					<S.ProductsList>
						{
							products.map((product: IGlasses) => {
								return (
									<Card
										key={product.id}
										id={product.id}
										name={product.name}
										brand={product.brand}
										category={product.category}
										image={product.image}
										price={product.price}
										size={product.size}
										color={product.color}
										description={product.description}
									/>		
								);
							})
						}
					</S.ProductsList>
				</S.Section>
			</S.Main>
		</S.BackgroundPaper>
	);
}

export default Main;