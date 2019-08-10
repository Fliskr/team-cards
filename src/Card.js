import React from "react";
import styled from "styled-components";

const Layout = styled.div`
    display: flex;
    flex: 0 1 500px;
    height: 196px;
    border: 1px ${props => props.dashed ? "dashed" : "solid"} lightgray;
    border-radius: 5px;
    flex-direction: column;
    margin: 12px;
`;

const Body = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 12px;
        display: flex;
        flex:0 1 130px;
        align-items: center;
`;

const Logo = styled.div`
    border-radius: 50%;
    width: 65px; height: 65px;
    background: ${props => props.src ? `url(${props.src}` : "lightgray"};
    display: block;
    margin:11px;
`;

const Text = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    padding: 24px 12px;
`;

const Title = styled.div`
    font-size: 18px;
`;

const Description = styled.div`
color: #666;margin-top: 8px;
`;

const Footer = styled.div`
    padding: 12px;
    flex: 0 1 50px;
    max-height: 50px;
    display: flex;
    flex-direction: row;
`;

const Avatar = styled(Logo)`
     width: 30px; height: 30px;
`;

const MoreAvatars = styled.div`
    display: flex;
    background: lightgray;
    border-radius: 50%;
    position: relative;
    margin: 11px 11px 11px 30px;
    width: 30px;
    height:30px;
    justify-content:center;
    align-items:center;
    color: #333;
    font-weight:bolder;
    font-size:18px;
    :before {
        left: -24px;
        content: "+";
        width: 30px;
        display: flex;
        position: absolute;
    }
`;
export default function Card(
    {
        image = "",
        title = "Lorem ipsum o dolore",
        description = "Lorem ipsum o dolore",
        index,
        dashed = false,
        onClick = () => {
        },
        avatars = [{src: "123"}, {src: "123"}, {src: "123"}, {src: "123"}, {src: "123"}, {src: "123"}, {src: "123"}, {src: "123"}, {src: "123"}, {src: "123"}, {src: "123"}, {src: "123"}, {src: "123"}]
    }) {
    return <Layout onClick={onClick} dashed={dashed}>
        <Body>
        <Logo src={image}/>
        <Text>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Text>
        </Body>
        <Footer>
            {avatars.slice(0, 9).map(({src}, index) => <Avatar image={src}/>)}
            {!!avatars.slice(9).length && <MoreAvatars>{avatars.slice(9).length}</MoreAvatars>}
        </Footer>
    </Layout>
}