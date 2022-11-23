import React from "react";
import * as S from "./styles";
import colors from "../../styles/colors";
import Text from "../Text";

function Banner() {
    const bannerImage =
        "https://img.freepik.com/fotos-gratis/menina-bonita-nova-nos-vidros-que-sorri-piscando-apontando-o-dedo-no-lado_176420-9503.jpg";

    return (
        <S.BannerContainer>
            <S.Banner>
                <img src={bannerImage} alt="" width="300" />
                <Text
                    text="Até 12x sem juros!"
                    size="40px"
                    color={colors.primary}
                />
                <div>TESTE</div>
            </S.Banner>
        </S.BannerContainer>
    );
}

export default Banner;
