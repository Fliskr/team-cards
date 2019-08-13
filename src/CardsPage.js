import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import AddCard from "./AddCard";
import { withRouter } from "react-router-dom";

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 20px 30px;
`;

function CardsPage(props) {
    const [cards, setCards] = useState([]);
    const getCards = async () => {
        const request = fetch("/get-cards");
        if (!request.ok) {
            return setCards([
                {
                    id: 1,
                    image:
                        "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                    title: "The Sell Outs",
                    description: "They'll sell anything to make a buck.",
                    avatars: [],
                },
                {
                    id: 2,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TEIDE.JPG/220px-TEIDE.JPG",
                    title: "The Sell Outsa",
                    description: "They'll sell anything to make a buck.",
                    avatars: [],
                },
                {
                    id: 3,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TEIDE.JPG/220px-TEIDE.JPG",
                    title: "The Sell Outs",
                    description: "They'll sell anything to make a buck.",
                    avatars: [],
                },
                {
                    id: 4,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TEIDE.JPG/220px-TEIDE.JPG",
                    title: "The Sell Outs",
                    description: "They'll sell anything to make a buck.",
                    avatars: [],
                },
                {
                    id: 5,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TEIDE.JPG/220px-TEIDE.JPG",
                    title: "The Sell Outs",
                    description: "They'll sell anything to make a buck.",
                    avatars: [],
                },
                {
                    id: 6,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TEIDE.JPG/220px-TEIDE.JPG",
                    title: "The Sell Outs",
                    description: "They'll sell anything to make a buck.",
                    avatars: [
                        {
                            avatar:
                                "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                        },
                        {
                            avatar:
                                "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                        },
                        {
                            avatar:
                                "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                        },
                        {
                            avatar:
                                "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                        },
                        {
                            avatar:
                                "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                        },
                        {
                            avatar:
                                "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                        },
                        {
                            avatar:
                                "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                        },
                        {
                            avatar:
                                "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                        },
                        {
                            avatar:
                                "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                        },
                        {
                            avatar:
                                "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                        },
                        {
                            avatar:
                                "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                        },
                        {
                            avatar:
                                "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                        },
                        {
                            avatar:
                                "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                        },
                        {
                            avatar:
                                "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                        },
                        {
                            avatar:
                                "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                        },
                    ],
                },
            ]);
        }
        const cards = await request.json();
        setCards(cards || []);
    };
    useEffect(() => {
        getCards();
    }, []);
    return (
        <Layout>
            {cards.map((item, index) => (
                <Card
                    {...item}
                    onClick={() => {
                        props.history.push(`/edit-card/${item.id}`);
                    }}
                    key={index}
                />
            ))}
            <AddCard />
        </Layout>
    );
}

export default withRouter(CardsPage);
