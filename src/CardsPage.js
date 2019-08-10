import React, {useState} from "react";
import styled from "styled-components";
import Card from "./Card";
import AddCard from "./AddCard";

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 20px 30px;
`;

export default function CardsPage() {
    const [cards, setCards] = useState([1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16]);
    return <Layout>
        {cards.map((item, index) => <Card key={item} index={item}/>)}
        <AddCard />
    </Layout>
}