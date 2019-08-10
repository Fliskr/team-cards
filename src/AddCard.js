import React from "react";
import Card from "./Card";
import {withRouter} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    & > div {
        cursor: pointer;
        width: 565px;
    }
    color: gray;
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
