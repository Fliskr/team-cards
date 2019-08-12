import React from "react";
import Card from "./Card";
import {withRouter} from "react-router-dom";
import styled from "styled-components";
import {Title} from "./Card";
const Wrapper = styled.div`
    & > div {
        border-style: dashed;
    }
    ${Title} {
        opacity: 0.5;
    }
`;

function AddCard(props) {
    return <Wrapper>
        <Card onClick={() => {
            props.history.push("/add-card")
        }} avatars={[]} dashed={true} src="" title="New team..." description="">
        </Card>
    </Wrapper>

}

export default withRouter(AddCard)
