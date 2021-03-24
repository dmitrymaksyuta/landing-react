import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
`;

Wrapper.Content = styled.div`
  flex: 1 0 auto;
`;

Wrapper.Footer = styled.footer`
  flex-shrink: 0;
`;
