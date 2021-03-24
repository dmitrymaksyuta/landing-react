import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 235px;
  background-color: #000000;
  
  @media (max-width: 1024px) {
    height: fit-content;
    padding: 20px;
  }
  
  @media (max-width: 468px) {
    padding: 20px 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
`;

Content.Br = styled.br`
  @media (max-width: 468px) {
    display: none;
  }
`;

Content.Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #666666;
  text-align: center;
  letter-spacing: .1px;
  margin: 0;
`;

FooterWrapper.Content = Content;
