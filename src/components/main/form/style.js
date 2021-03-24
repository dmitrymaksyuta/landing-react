import styled from 'styled-components';
import React from "react";

export const FormWrapper = styled.div`
  width: 360px;
  height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  text-align: center;
  
  @media (max-width: 468px) {
    width: 320px;
    padding: 0;
  }
`;

FormWrapper.Logo = styled.div`
  background-image: url("./images/logo.png");
  width: 212px;
  height: 56px;
  margin-top: 60px;
  
  @media (max-width: 468px) {
    width: 113px;
    height: 30px;
    background-size: cover;
    margin-top: 20px;
  }
`;

FormWrapper.Title = styled.h2`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  color: #fefdff;
  margin-top: 27px;
  
  @media (max-width: 468px) {
    font-size: 14px;
    line-height: 20px;
    margin-top: 10px;
  }
`;

FormWrapper.SubTitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
  text-transform: none;
  letter-spacing: normal;
  color: #fefdff;
  margin-top: -11px;
  margin-bottom: 15px;
  
  @media (max-width: 468px) {
    line-height: 24px;
    padding: 0 15px;
    margin-bottom: 0;
  }
`;

FormWrapper.Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #fefdff;
  letter-spacing: -0.025em;
  margin-top: 30px;
  padding: 0 5px;
  
  @media (max-width: 468px) {
    margin-top: 10px;
    padding: 0 10px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-top: 10px;
`;

export const PhoneContainer = styled.div`
  margin-top: 10px;
  position: relative;
  display: flex;
  outline-offset: -2px;
  outline: ${props => {
    if (props.validation === undefined) return '0px solid white';
    if (props.validation) return '2px solid green';
    if (!props.validation) return '2px solid red';
  }};
  
  & input:nth-child(2) {
    width: 60px;
    border-right: 1px solid #000;
    padding-left: 50px;
    
    @media (max-width: 468px) {
      width: 49px;
      padding-left: 40px;
    }
  }
  & input:nth-child(3) {
    width: 230px;
    padding-left: 20px;
    
    @media (max-width: 468px) {
      width: 190px;
    }
  }
`;

PhoneContainer.Msg = styled.div`
  position: absolute;
  color: red;
  top: 95%;
  left: 0;
  font-size: 10px;
`;

PhoneContainer.Image = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 15px;
  left: 17px;
  background-image: url("${props => props.icon}");
  background-repeat: no-repeat;
  z-index: 1;
  
  @media (max-width: 468px) {
    width: 20px;
    height: 20px;
    left: 10px;
    top: 10px;
  }
`;

PhoneContainer.Input = styled.input`
  height: 48px;
  background-color: #ffffff;
  border: 0 solid white;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: #999999;
  outline:none;
  
  @media (max-width: 468px) {
    height: 38px;
  }
`;

InputContainer.Image = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 15px;
  left: 17px;
  background-image: url("${props => props.icon}");
  background-repeat: no-repeat;
  z-index: 1;
  
  @media (max-width: 468px) {
     width: 20px;
    height: 20px;
    left: 10px;
    top: 10px;
  }
`;
InputContainer.Input = styled.input`
  width: 310px;
  height: 48px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: #999999;
  padding-left: 50px;
  outline: none;
  outline-offset: -2px;
  outline: ${props => {
    if (props.validation === undefined) return '0px solid white';
    if (props.validation) return '2px solid green';
    if (!props.validation) return '2px solid red';
}};
  
  @media (max-width: 468px) {
    width: 260px;
    height: 38px;
    padding-left: 40px;
  }
`;

InputContainer.Msg = styled.div`
  position: absolute;
  color: red;
  top: 95%;
  left: 0;
  font-size: 10px;
`;

export const Select = styled.select`
  width: 360px;
  height: 50px;
  padding-left: 50px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: #999999;
  position: relative;
  appearance: none;
  background-image: url('./images/arrow.png');
  background-repeat: no-repeat;
  background-position-x: 329px;
  background-position-y: 18px;
  
  @media (max-width: 468px) {
    width: 300px;
    height: 40px;
    padding-left: 40px;
  }
`;

FormContainer.Button = styled.button`
  width: 360px;
  height: 60px;
  background-color: #99cc33;
  background-image: linear-gradient(0.0deg, #99cc33 0%, #ccff33 100%);
  box-shadow: 0px 4px 0px 0px rgba(153,204,51,0.5), inset 0px 1px 0px 0px #ffffff;
  font-size: 21px;
  line-height: 28px;
  font-weight: 800;
  text-transform: uppercase;
  color: #000000;
  border: 0px solid white;
  margin-top: 30px;
  
  @media (max-width: 468px) {
    width: 300px;
    font-size: 16px;
    line-height: 28px;
    margin-top: 20px 
  }
`;

Select.Option = styled.option`
  width: 360px;
  height: 50px;
  padding-left: 50px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: #999999;
`;

FormWrapper.FormContainer = FormContainer;
FormContainer.InputContainer = InputContainer;
FormContainer.PhoneContainer = PhoneContainer;
InputContainer.Select = Select;
