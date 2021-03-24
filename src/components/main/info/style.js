import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 510px;
  margin-top: 50px;
  
  @media (max-width: 1024px) {
      margin-bottom: 50px;
  }
  
  @media (max-width: 468px) {
      align-items: center;
      margin-top: 20px;
  }
`;

InfoWrapper.Title = styled.h1`
  font-size: 60px;
  line-height: 60px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  color: #000000;
  margin: 0;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 30px;
    text-align: center;
  }
  
  @media (max-width: 468px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 5px
  }
`;

InfoWrapper.SubTitle = styled.p`
    font-size: 30px;
    line-height: 41px;
    color: #ffffff;
    background-color: #339999;
    padding: 0 15px;
    margin: 0;
    margin-left: -15px;
    width: fit-content;
    height: 40px;
    text-transform: uppercase;
    letter-spacing: -0.025em;
    font-weight: 800;
    
    @media (max-width: 768px) {
      margin: 0;
      height: fit-content;
      text-align: center;
    }
    
    @media (max-width: 468px) {
      font-size: 14px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

export const Content = styled.div`
  margin-top: 21px;
  
  @media (max-width: 768px) {
     text-align: center;
  }
  
   @media (max-width: 468px) {
    margin-top: 5px;
   }
`;

Content.TextOne = styled.p`
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  color: #000000;
  margin: 0;
  
  @media (max-width: 468px) {
      font-size: 14px;
      line-height: 20px;
  }
`;
Content.TextTwo = styled.p`
  font-size: 30px;
  font-weight: 800;
  color: #339999;
  margin-top: -11px;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  margin-left: 1px;
  
  @media (max-width: 468px) {
      font-size: 20px;
      margin-top: -5px;
      margin-bottom: 30px;
  }
`;
Content.TextThree = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  color: #000000;
  margin-top: -34px;
  
  @media (max-width: 468px) {
    font-size: 13.4px;
    line-height: 16px;
  }
`;

InfoWrapper.Block = styled.div`
  max-width: 510px;
  width: 100%;
  height: 316px;
  background-color: #666;
  margin-top: 4px;
  
  @media (max-width: 468px) {
    max-width: 300px;
    width: 100%;
    height: 186px;
    margin-top: -5px;
    margin-bottom: -35px;
  }
`;

InfoWrapper.Content = Content;
