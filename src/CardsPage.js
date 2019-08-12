import React, {useState} from "react";
import styled from "styled-components";
import Card from "./Card";
import AddCard from "./AddCard";
import {withRouter} from "react-router-dom";

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 20px 30px;
`;

function CardsPage(props) {
    const [cards, setCards] = useState([1, 2, 3, 4, 5,6,7,8,9,10,11]);
    return <Layout>
        {cards.map((item, index) => <Card onClick={() => {
            props.history.push(`/edit-card/${item.id}`);
        }} key={item} index={item}/>)}
        <AddCard />
    </Layout>
}

export default withRouter(CardsPage)