import React, {useState, useEffect} from "react";
import styled from "styled-components"
import {Link} from "react-router-dom";

const Form = styled.form`
display: flex;
flex-direction: column;
width: 900px;
margin: 64px auto;
border: 1px solid lightgray;;
border-radius: 5px;
padding: 12px;
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
    margin: 0 ;
`;

const InputElementLayout = styled.div`
display: flex;
position: relative;
flex-direction: column;
`;

const InputElement = ({name, text, type = "text", state, errors, setState}) => {

    return <InputElementLayout>
        <Label htmlFor={name}>{text}</Label>
        <Input onChange={(e) => {
            setState({...state, [name]: e.target.value})
        }} name={name} id={name} value={state[name]} type={type}/>
        <ErrorLabel>{errors[name]}</ErrorLabel>
    </InputElementLayout>
};

export default function AddCardPage() {
    const [state, setState] = useState({});
    const [errors, setErrors] = useState({});
    const validate = () => {
        const errors = {};
        if (!state.title) {
            errors.title = "Fill title";
        }
        if (!state.description) {
            errors.description = "Fill description";
        }
        if (!state.logo) {
            errors.logo = "Choose logo";
        }
        if (!state.avatars || !state.avatars.length) {
            errors.avatars = "Choose at least one team member";
        }
        setErrors(errors);
        return errors;
    };


    useEffect(() => {
        validate();
    }, [state]);
    return <Form onSubmit={(e) => {
        e.preventDefault();
        if (Object.keys(validate()).length > 0) {
            return;
        }
        console.log(state);
    }}>
        <InputElement state={state} setState={setState} errors={errors} name={"title"} text={"Title"}/>
        <InputElement state={state} setState={setState} errors={errors} name={"description"} text={"Description"}/>
        <InputElement state={state} setState={setState} errors={errors} name={"logo"} text={"Logo"} type={"file"}/>
        <InputElement state={state} setState={setState} errors={errors} name={"avatars"} text={"Team members"}/>

        <div>
            <button type="submit">
                Save
            </button>
            <Link to={"/"}>Back</Link>
        </div>
    </Form>;
}