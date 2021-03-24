import styled from 'styled-components';

export const StartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 268px;
  background-image: url("./images/bgStart.png");
  background-position: inherit;
  background-repeat: no-repeat;
  background-size: cover;
  
  @media (max-width: 468px) {
    min-height: 165px;
  }
`;

StartWrapper.Title = styled.h3`
  font-size: 30px;
  line-height: 30px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  color: #ffffff;
  margin-top: -10px;
  
  @media (max-width: 468px) {
    font-size: 22px;
    line-height: 30px;
  }
`;

export const Button = styled.div`
  width: 510px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #ffffff;
  background-image: linear-gradient(0.0deg, #99cc33 0%, #ccff33 100%);
  box-shadow: 0px 6px 0px 0px rgba(0,0,0,0.25), inset 0px 1px 0px 0px #ffffff;
  cursor: pointer;
  margin-top: -5px;
  
  @media (max-width: 1024px) {
    width: 400px;
    height: 80px
  }
  
  @media (max-width: 468px) {
    width: 300px;
    height: 58px;
  }
`;

Button.Text = styled.p`
  font-size: 36px;
  line-height: 30px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  color: #000000;
  
  @media (max-width: 468px) {
    font-size: 22px;
    line-height: 30px;
  }
`;

Button.Arrow = styled.div`
  background-image: url("./svg/arrow.svg");
  position: absolute;
  width: 19px;
  height: 30px;
  right: 40px;
  
  @media (max-width: 468px) {
    width: 13px;
    height: 20px;
    background-size: contain;
    right: 30px;
  }
`;

StartWrapper.Button = Button;
