import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  background-color: #121212;
  display: flex;
  flex-direction: column;
`

export const Wrapper: React.FC = ({ children }) =>
  <MainWrapper>
    {children}
  </MainWrapper>