import React from "react";
import * as S from "./styles";
import colors from "../../../styles/colors";
import Text from "../../Text";
import Container from "../../Container";

function BrandFilter() {
    return (
        <Container
            flex
            margin="8px auto"
            width="calc(100% - 32px)"
            backgroundColor="#F9F9F0"
            border={`1px solid ${colors.primary}`}
        >
            <S.BrandFilter>
                <Text
                    text="Selecionar por marca:"
                    size="18px"
                    weight={600}
                    color={colors.primary}
                    align="left"
                />

                <S.BrandList>
                    <S.BrandBlock>
                        <Text text="Glasses Store" size="12px" weight={600} align="left" color={colors.primary} />
                    </S.BrandBlock>

                    <S.BrandBlock>
                        <Text text="Ray-Ban" size="12px" weight={600} align="left" color={colors.primary} />
                    </S.BrandBlock>

                    <S.BrandBlock>
                        <Text text="Chilli Beans" size="12px" weight={600} align="left" color={colors.primary} />
                    </S.BrandBlock>

                    <S.BrandBlock>
                        <Text text="Oakley" size="12px" weight={600} align="left" color={colors.primary} />
                    </S.BrandBlock>

                    <S.BrandBlock>
                        <Text text="Prada" size="12px" weight={600} align="left" color={colors.primary} />
                    </S.BrandBlock>
                    
                    <S.BrandBlock>
                        <Text text="Dior" size="12px" weight={600} align="left" color={colors.primary} />
                    </S.BrandBlock>

                    <S.BrandBlock>
                        <Text text="Voda" size="12px" weight={600} align="left" color={colors.primary} />
                    </S.BrandBlock>

                    <S.BrandBlock>
                        <Text text="Evoke" size="12px" weight={600} align="left" color={colors.primary} />
                    </S.BrandBlock>

                    <S.BrandBlock>
                        <Text text="HB" size="12px" weight={600} align="left" color={colors.primary} />
                    </S.BrandBlock>

                    <S.BrandBlock>
                        <Text text="Óticas Nacional" size="12px" weight={600} align="left" color={colors.primary} />
                    </S.BrandBlock>
                    
                    <S.BrandBlock>
                        <Text text="Carrera" size="12px" weight={600} align="left" color={colors.primary} />
                    </S.BrandBlock>

                    <S.BrandBlock>
                        <Text text="Calvin Klein" size="12px" weight={600} align="left" color={colors.primary} />
                    </S.BrandBlock>
                </S.BrandList>
            </S.BrandFilter>
        </Container>
    );
}

export default BrandFilter;
