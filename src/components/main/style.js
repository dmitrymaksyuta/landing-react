import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 774px;
  background-image: url("./images/bgMain.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  
  @media (max-width: 1024px) {
    height: fit-content;
  }
  
  @media (max-width: 468px) {
    background-position: center;
  }
`;

MainWrapper.Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1050px;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  @media (max-width: 1200px) {
    max-width: 1000px;
  }
  
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

MainWrapper.Background = styled.div`
    position: absolute;
    background-image: url('./images/bgInfo.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 75%;
    height: 100%;
    z-index: 0;
    top: 0;
    left: 0;
    
    @media (max-width: 1024px) {
      width: 100%;
    }
`;
