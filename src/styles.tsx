import styled, { createGlobalStyle } from "styled-components";

export const GlobalConfigs = createGlobalStyle`
  @font-face {
    font-family: "Noto Sans";
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
  }
  html {
    font-size: 62,5%;
    background-color: #0D0D0D;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template: repeat(12, 70px) / repeat(12, 70px);
  gap: 24px;
  justify-content: center;
  grid-template-areas:
  ". . . . . . . . . . . ."
  "img img . . . . . . . . . ."
  "img img . . . . . . . . . ."
  "info info . . . . . . . . . ."
  "info info . . . . . . . . . ."
  "info info . . . . . . . . . ."
  ". . . . . . . . . . . ."
  ". . . . . . . . . . . ."
  ". . . . . . . . . . . ."
  ". . . . . . . . . . . ."
  ". . . . . . . . . . . ."
  ". . . . . . . . . . . ."
  ". . . . . . . . . . . .";
`

export const WrapperInfo = styled.div`
  grid-area: info;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1.5px solid #5B118D;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 40px;
`

export const ContentWrapperInfo = styled.div`
  margin-bottom: 32px;
`

export const SVGWrapper = styled.svg`
  width: 24px;
  height: 24px;
`

export const HeadingInfo = styled.h2`
  font-size: 24px;
  color: #8C116B;
  text-align: center;
  margin-bottom: 8px;
  font-weight: 700;
`

export const ComplementInfo = styled.p`
  color: #EDEDED;
`

export const ListComponents = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

export const ListLink = styled.a`
  text-decoration: none;
  margin-left: 8px;
  font-weight: 600;
  color: #EDEDED;
  transition: 200ms;
  &:hover{
    color: #a0a0a0;
  }
`

export const MyImage = styled.div`
  grid-area: img;
  background-image: url('https://avatars.githubusercontent.com/u/67215104?v=4');
  background-size: cover;
  border: 2px solid #5B118D;
  border-radius: 50%;
`