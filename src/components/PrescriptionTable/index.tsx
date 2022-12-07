import React from "react";
import colors from "../../styles/colors";
import Input from "../Input";
import Text from "../Text";
import * as S from "./styles";

function PrescriptionTable() {
    return (
        <S.TableContainer>
            <S.TableRow>
                <Text text="PERTO" />
            </S.TableRow>
            <S.TableRow>
                <S.TableHeader></S.TableHeader>
                <S.TableHeader>ESF</S.TableHeader>
                <S.TableHeader>CIL</S.TableHeader>
                <S.TableHeader>EIXO</S.TableHeader>
            </S.TableRow>

            <S.TableRow>
                <S.TableHeader>O.D.</S.TableHeader>
                <S.TableData>
                    <Input id="id" type="number" width="100%" height="20px" border="none" align />
                </S.TableData>
                <S.TableData>
                    <Input id="id" type="number" width="100%" height="20px" border="none" align />
                </S.TableData>
                <S.TableData>
                    <Input id="id" type="number" width="100%" height="20px" border="none" align />
                </S.TableData>
            </S.TableRow>

            <S.TableRow>
                <S.TableHeader>O.E.</S.TableHeader>
                <S.TableData>
                    <Input id="id" type="number" width="100%" height="20px" border="none" align />
                </S.TableData>
                <S.TableData>
                    <Input id="id" type="number" width="100%" height="20px" border="none" align />
                </S.TableData>
                <S.TableData>
                    <Input id="id" type="number" width="100%" height="20px" border="none" align />
                </S.TableData>
            </S.TableRow>

            <S.TableRow>
                <Text text="LONGE" />
            </S.TableRow>
            <S.TableRow>
                <S.TableHeader></S.TableHeader>
                <S.TableHeader>ESF</S.TableHeader>
                <S.TableHeader>CIL</S.TableHeader>
                <S.TableHeader>EIXO</S.TableHeader>
            </S.TableRow>

            <S.TableRow>
                <S.TableHeader>O.D.</S.TableHeader>
                <S.TableData>
                    <Input id="id" type="number" width="100%" height="20px" border="none" align />
                </S.TableData>
                <S.TableData>
                    <Input id="id" type="number" width="100%" height="20px" border="none" align />
                </S.TableData>
                <S.TableData>
                    <Input id="id" type="number" width="100%" height="20px" border="none" align />
                </S.TableData>
            </S.TableRow>

            <S.TableRow>
                <S.TableHeader>O.E.</S.TableHeader>
                <S.TableData>
                    <Input id="id" type="number" width="100%" height="20px" border="none" align />
                </S.TableData>
                <S.TableData>
                    <Input id="id" type="number" width="100%" height="20px" border="none" align />
                </S.TableData>
                <S.TableData>
                    <Input id="id" type="number" width="100%" height="20px" border="none" align />
                </S.TableData>
            </S.TableRow>
        </S.TableContainer>
    );
}

export default PrescriptionTable;