import React, {useState} from "react";
import {FormWrapper, FormContainer, InputContainer, Select, PhoneContainer} from "./style";
import countries from '../../../constants/countries.json';
import {useSelector, useDispatch} from "react-redux";
import {getPrefixCountry, getValidation} from "../../../redux/selectors/selectors";
import * as actionsCreator from "../../../redux/actionsCreator";

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const prefix = useSelector(getPrefixCountry);
    const validation = useSelector(getValidation);
    const dispatch = useDispatch();

    const setPrefix = (e) => dispatch(actionsCreator.setPrefixCountry(e.target.value));

    const onNameChange = (e) => {
        setName(e.target.value);
        dispatch(actionsCreator.setValidationName(e.target.value));
    }

    const onLastNameChange = (e) => {
        setLastName(e.target.value);
        dispatch(actionsCreator.setValidationLastName(e.target.value));
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
        dispatch(actionsCreator.setValidationEmail(e.target.value));
    }

    const onPhoneChange = (e) => {
        setPhone(e.target.value);
        dispatch(actionsCreator.setValidationEPhone(e.target.value));
    }

    const onSend = (e) => {
        e.preventDefault();
        dispatch(actionsCreator.setValidationName(name));
        dispatch(actionsCreator.setValidationLastName(lastName));
        dispatch(actionsCreator.setValidationEmail(email));
        dispatch(actionsCreator.setValidationEPhone(phone));
    }

    return (
        <FormWrapper>
            <FormWrapper.Logo />
            <FormWrapper.Title>You’re one step away from joining our elite trading team</FormWrapper.Title>
            <FormWrapper.SubTitle>Just fill in the fields below with your personal data</FormWrapper.SubTitle>
            <FormWrapper.FormContainer>
                <FormContainer.InputContainer>
                    <InputContainer.Image icon={'./svg/man.svg'} />
                    <InputContainer.Input value={name} placeholder="First Name" type="text" onChange={onNameChange} validation={validation.name.validResult} />
                    <InputContainer.Msg>{validation.name.message}</InputContainer.Msg>
                </FormContainer.InputContainer>
                <FormContainer.InputContainer>
                    <InputContainer.Image icon={'./svg/man.svg'} />
                    <InputContainer.Input value={lastName} placeholder="Last Name" type="text" onChange={onLastNameChange} validation={validation.lastName.validResult} />
                    <InputContainer.Msg>{validation.lastName.message}</InputContainer.Msg>
                </FormContainer.InputContainer>
                <FormContainer.InputContainer>
                    <InputContainer.Image icon={'./svg/mail.svg'} />
                    <InputContainer.Input value={email} placeholder="Email" type="text" onChange={onEmailChange} validation={validation.email.validResult} />
                    <InputContainer.Msg>{validation.email.message}</InputContainer.Msg>
                </FormContainer.InputContainer>
                <FormContainer.InputContainer>
                    <InputContainer.Image icon={'./svg/location.svg'} />
                    <InputContainer.Select onChange={setPrefix}>
                        {Object.keys(countries).map((item) => (
                            <Select.Option key={item}>{countries[item].name}</Select.Option>
                        ))}
                    </InputContainer.Select>
                </FormContainer.InputContainer>
                <FormContainer.PhoneContainer validation={validation.phone.validResult}>
                    <PhoneContainer.Image icon={'./svg/phone.svg'} />
                    <PhoneContainer.Input type="text" readOnly value={`+${prefix}`} />
                    <PhoneContainer.Input value={phone} placeholder="Phone" type="text" onChange={onPhoneChange} />
                    <PhoneContainer.Msg>{validation.phone.message}</PhoneContainer.Msg>
                </FormContainer.PhoneContainer>
                <FormContainer.Button onClick={onSend}>Try a 14-day trial period</FormContainer.Button>
            </FormWrapper.FormContainer>
            <FormWrapper.Text>You will be contacted shortly by one of our trading mentors.</FormWrapper.Text>
        </FormWrapper>
    );
};

export default Form;
