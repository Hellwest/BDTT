import styled from "styled-components";
import React, { ReactElement } from "react";
import { OperatorCard } from "./ui/operator-card";

const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
`

const MainComponent = styled(Main)`
    background: red;
`

export const Container = (): ReactElement => <MainComponent><OperatorCard></OperatorCard></MainComponent>
