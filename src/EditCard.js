import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import CheckboxIcon from "./checkbox.svg";
import readFile from "./helpers/readFile";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    background: #eee;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 24px 32px;

    border-radius: 5px;
`;

const TeamBlock = styled.div`
    border: 1px solid lightgray;
    width: 100%;
    height: 190px;
    display: flex;
    flex-direction: row;
    background: #fff;
    padding: 24px;
    border-radius: 5px;
`;

const Input = styled.input`
    margin-top: 8px;
    margin-bottom: 24px;
    padding: 8px;
`;

const Label = styled.label`
    color: #333;
    padding: 12px 0 0;
    margin: 8px;
`;

const ErrorLabel = styled(Label)`
    color: red;
    position: absolute;
    bottom: 0px;
    padding: 0;
    margin: 0;
`;

const InputElementLayout = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
`;

const InputElement = ({ name, text, type = "text", setState, state, errors, placeholder = "" }) => {
    return (
        <InputElementLayout>
            <Label htmlFor={name}>{text}</Label>
            <Input
                onChange={e => {
                    setState({ ...state, [name]: e.target.value });
                }}
                placeholder={placeholder}
                name={name}
                id={name}
                value={state && state[name]}
                type={type}
            />
            <ErrorLabel>{errors && errors[name]}</ErrorLabel>
        </InputElementLayout>
    );
};

const LogoImage = styled.div`
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: lightgray;
    padding: 0;
    margin: 0;
    background: url(${({ src }) => src}) center no-repeat;
    background-size: cover;
`;

const AddLogoBlock = styled.div`
    flex: 0 1 auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-right: 24px;
    label {
        text-decoration: underline;
        font-size: 12px;
        margin-top: 15px;
        cursor: pointer;
        line-height: 16px;
        letter-spacing: -0.17px;
        color: #d32b68;
        font-weight: 600;
    }

    ${Input} {
        display: none;
    }
    ${InputElementLayout} {
        position: absolute;
        top: -999999;
        z-index: -999999;
    }
`;

const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    padding: 5px 8px;
    flex: 1 1 auto;
    ${InputElementLayout} {
        margin-bottom: -8px;
        label {
            margin: 0 0;
            padding: 0;
            font-size: 10px;
            line-height: 14px;
            color: rgba(42, 63, 88, 0.5);
            font-weight: bold;
        }
        input {
            outline: none;
            border: 1px solid lightgray;
            border-radius: 5px;
            padding: 12px;
            margin-top: 6px;
            color: #293f59;
            font-size: 13px;
        }
    }
`;

const Avatar = styled.div`
    position: absolute;
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: url(${({ src }) => src}) center;
    & + span {
        margin-left: 32px;
    }
`;

const Table = styled.table`
    border-collapse: collapse;
    tr {
        border-bottom: 1px solid lightgray;
    }
    th {
        font-weight: 600;
        text-align: left;
        padding: 8px 5px;
        font-size: 10px;
        color: rgba(42, 63, 88, 0.5);
    }
    td {
        position: relative;
        padding: 15px 5px;
        border-top: 1px solid lightgray;
    }
    th:first-of-type {
        width: 50px;
    }
    th:first-of-type,
    td:first-of-type {
        width: 50px;
        padding-left: 24px;
    }
    td span {
        font-size: 12px;
        color: #263d5c;
        line-height: 16px;
    }
`;

const TeamMembersBlock = styled.div`
    display: flex;
    background: #fff;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin-top: 24px;
    padding-top: 18px;
    flex-direction: column;
`;

const CheckboxBlock = styled.div`
    cursor: pointer;
    input {
        display: none;
    }
    label {
        cursor: pointer;
        display: block;
        width: 18px;
        height: 18px;
        text-align: center;
        font-weight: bold;
        border: 2px solid lightgray;
        border-radius: 2px;
        background: url(${({ checked }) => (checked ? CheckboxIcon : "")}) -5px -5px;
        background-size: 24px;
    }
`;
const Checkbox = ({ checked, id, onClick }) => {
    return (
        <CheckboxBlock checked={checked}>
            <label htmlFor={id} />
            <input onChange={onClick} id={id} type="checkbox" value={checked} checked={checked} />
        </CheckboxBlock>
    );
};

const Footer = styled.div`
    margin-top: 12px;
    padding: 12px 48px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        padding: 8px 12px;
        font-size: 14px;
        background: #d12f69;
        border-radius: 5px;
        border: none;
        color: #fff;
    }
    a {
        color: #d32b68;
    }
`;

function EditCard({
    match: {
        params: { id },
    },
}) {
    const [state, setState] = useState({ description: "", title: "", logo: "" });
    const [errors, setErrors] = useState({});
    const [logo, setLogo] = useState("");
    const [teamMembers, setTeamMembers] = useState([
        { avatar: "", user: "Amy Maxwell", details: "616-662-70-90", checked: false },
        { avatar: "", user: "Amy Maxwell", details: "616-662-70-90", checked: false },
    ]);
    const getDataById = async () => {
        try {
            const response = await fetch(`/get-team-by-id/${id}`);
            if (!response.ok) {
                return;
            }
            const cardData = await response.json();
            const { teamMembers = [], ...state } = cardData;
            setState(state);
            setLogo(state.avatar);
            setTeamMembers(teamMembers);
        } catch (e) {}
    };

    useEffect(() => {
        if (id) {
            getDataById();
        }
    }, []);
    const validate = () => {
        const errors = {};
        //TODO: make validation
        if (!state.title) {
            errors.title = "Fill title";
        }
        if (!state.description) {
            errors.description = "Fill description";
        }
        if (!state.logo) {
            errors.logo = "Choose logo";
        }
        if (teamMembers && teamMembers.every(item => !item.checked)) {
            errors.avatars = "Choose at least one team member";
        }
        // setErrors(errors);
        return errors;
    };
    useEffect(() => {
        validate();
        if (state.logo) {
            readFile("input[name='logo']", src => {
                setLogo(src);
            });
        }
    }, [state]);
    const setItemChecked = index => {
        setTeamMembers(
            teamMembers.map((item, i) => {
                if (i === index) {
                    item.checked = !item.checked;
                }
                return item;
            })
        );
    };
    const setItemsChecked = () => {
        if (teamMembers.some(item => !item.checked)) {
            setTeamMembers(teamMembers.map(item => ({ ...item, checked: true })));
        } else {
            setTeamMembers(teamMembers.map(item => ({ ...item, checked: false })));
        }
    };
    return (
        <Layout>
            <Form
                onSubmit={e => {
                    e.preventDefault();
                    if (Object.keys(validate()).length > 0) {
                        alert(`Errors: \n${JSON.stringify(validate(), null, 2)}`);
                        return;
                    }
                    const { description, title, logo } = state;
                    const request = {
                        description,
                        title,
                        logo,
                        teamMembers: teamMembers.filter(item => item.checked),
                    };
                    console.log(request);
                    alert(`send:\n ${JSON.stringify(request, null, 2)}`);
                }}>
                <TeamBlock>
                    <AddLogoBlock>
                        <LogoImage src={logo} />
                        <InputElement state={state} setState={setState} errors={errors} name={"logo"} type={"file"} />
                        <label htmlFor="logo">Upload New Image</label>
                    </AddLogoBlock>
                    <TextBlock>
                        <InputElement
                            state={state}
                            setState={setState}
                            errors={errors}
                            name={"title"}
                            placeholder="Enter team name"
                            text={"TEAM NAME"}
                        />
                        <InputElement
                            state={state}
                            setState={setState}
                            errors={errors}
                            placeholder="Enter decription"
                            name={"description"}
                            text={"DESCRIPTION"}
                        />
                    </TextBlock>
                </TeamBlock>
                <TeamMembersBlock>
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    <Checkbox
                                        onClick={() => setItemsChecked()}
                                        checked={teamMembers.every(item => item.checked)}
                                        id={`checkboxAll`}
                                    />
                                </th>
                                <th>USER RESOURCE</th>
                                <th>DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teamMembers.map(({ avatar, checked, user, details }, index) => (
                                <tr key={index}>
                                    <td>
                                        <Checkbox
                                            onClick={() => setItemChecked(index)}
                                            checked={checked}
                                            id={`checkbox${index}`}
                                        />
                                    </td>
                                    <td>
                                        <Avatar src={avatar} /> <span>{user}</span>
                                    </td>
                                    <td>
                                        <span>{details}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </TeamMembersBlock>
                <Footer>
                    <button type="submit">Save</button>
                    <Link to={"/"}>Back</Link>
                </Footer>
            </Form>
        </Layout>
    );
}

export default withRouter(EditCard);
