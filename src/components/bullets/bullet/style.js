import styled from 'styled-components';

export const BulletWrapper = styled.div`
  justify-content: center;
  text-align: center;
  
  @media (max-width: 1024px) {
      width: 60%;
      margin: 0 auto;
      margin-bottom: 30px;
  }
  
  @media (max-width: 468px) {
     width: 100%;
  }
`;

BulletWrapper.Image = styled.div`
  background-image: url("${props => props.image}");
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-bottom: 27px;
`;

BulletWrapper.Title = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.025em;
  color: #339999;
  margin-bottom: 25px;
`;

BulletWrapper.Description = styled.div`
  font-size: 16px;
  line-height: 24px;
  white-space: pre-line;
  font-weight: 400;
  letter-spacing: normal;
  color: #000;
  padding: 0 30px;
  
  @media (max-width: 468px) {
     padding: 0;
  }
`;

