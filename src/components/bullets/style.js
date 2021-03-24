import styled from 'styled-components';

export const BulletsWrapper = styled.div`
  min-height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("./images/bgBullets.png");
  background-repeat: no-repeat;
  background-position: bottom;
  
  @media (max-width: 1024px) {
      min-height: fit-content;
  }
  
  @media (max-width: 468px) {
      padding: 0 10px;
  }
`;

BulletsWrapper.Title = styled.h3`
  font-size: 30px;
  line-height: 30px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  color: #000;
  margin-top: 54px;
  margin-bottom: 55px;
  
  @media (max-width: 468px) {
     font-size: 22px;
     margin-top: 30px;
     margin-bottom: 30px;
  }
`;

BulletsWrapper.Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1164px;
  width: 100%;
  
  @media (max-width: 1024px) {
      grid-template-columns: 1fr;
  }
`;

