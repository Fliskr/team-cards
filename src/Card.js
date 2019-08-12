import React from "react";
import styled from "styled-components";
import "typeface-open-sans";
const Layout = styled.div`
    display: flex;
    flex: 0 1 368px;
    width: 368px;
    height: 145px;
    border: 1px solid lightgray;
    border-radius: 5px;
    flex-direction: column;
    margin: 10px 21px 8px 0;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.05);
    }
`;

const Body = styled.div`
    border-bottom: 1px solid lightgray;
    display: flex;
    flex: 0 1 95px;
`;

const Logo = styled.div`
    border-radius: 50%;
    width: 48px;
    height: 48px;
    background: ${props => (props.src ? `url(${props.src}` : "lightgray")};
    display: block;
    margin: 20px 0 0 15px;
`;

const Text = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    margin: 26px 0 0 16px;
    color: #2a3f58;
    font-family: "Open Sans";
`;

export const Title = styled.div`
    font-size: 14px;
    letter-spacing: -0.2px;
    line-height: 16px;
    font-weight: 600;
`;

const Description = styled.div`
    margin-top: 5px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.17px;
    line-height: 16px;
    opacity: 0.5;
`;

const Footer = styled.div`
    flex: 0 1 48px;
    max-height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0px 0 15px;
`;

const Avatar = styled(Logo)`
    width: 25px;
    height: 25px;
    margin: 0 8px 0 0;
    display: inline-block;
`;

const MoreAvatars = styled.div`
    display: inline-block;
    background: lightgray;
    border-radius: 50%;
    position: relative;
    width: 25px;
    height: 25px;
    margin-left: 15px;
    padding-top: 5px;
    text-align: center;
    color: #333;
    font-weight: bolder;
    font-size: 12px;
    :before {
        left: -18px;
        top: 2px;
        content: "+";
        width: 30px;
        font-size: 16px;
        font-weight: 400;
        display: flex;
        position: absolute;
    }
`;
export default function Card({
    image = "",
    title = "The Sell Outs",
    description = "They'll sell anything to make a buck.",
    dashed = false,
    onClick = () => {},
    avatars = [],
}) {
    return (
        <Layout onClick={onClick} dashed={dashed}>
            <Body>
                <Logo src={image} />
                <Text>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Text>
            </Body>
            <Footer>
                {avatars.slice(0, 9).map(({ src }, index) => (
                    <Avatar key={index} image={src} />
                ))}
                {!!avatars.slice(9).length && <MoreAvatars>{avatars.slice(9).length}</MoreAvatars>}
            </Footer>
        </Layout>
    );
}
