import styled from "styled-components";

//flex
import { Flex } from "../Flexbox.styled";

//keyframes
import { displayOn } from "../_Keyframes.styled";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 8fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 70vh;
  animation: ${displayOn} 1.5s ease-in-out;
`;

export const Header = styled(Flex)`
  grid-area: 1 / 1 / 2 / 3;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  height: 70px;
`;

export const DataContainer = styled(Flex)`
  grid-area: 2 / 1 / 3 / 3;
  min-height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 5fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const CarousellContainer = styled.div`
  max-height: 100%;
  grid-area: 1 / 1 / 2 / 2;
`;
export const Displayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 600px;
  object-fit: cover;
`;

export const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Selector = styled(Flex)`
  height: 60px;
  justify-content: space-around;
  width: 100px;
  padding: 10px;
`;

export const StaticContainer = styled.div`
  grid-area: 1 / 2 / 2 / 3;

  height: calc(100vh - 70px);
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
export const PatternPhoto = styled.img`
  grid-area: 1 / 1 / 2 / 3;
  display: block;
  width: 100%;
  max-height: 100px;
  object-fit: cover;
`;

export const StaticHeader = styled(Flex)`
  grid-area: 2 / 1 / 3 / 3;
  padding-right: 20px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  min-height: 50px;
  max-height: 50px;
  font-size: 20px;
`;

export const Description = styled(Flex)`
  grid-area: 3 / 1 / 4 / 2;

  align-items: flex-start;
  flex-direction: column;
`;

export const Paragraph = styled.span`
  padding-right: 20px;
`;

export const Infos = styled(Flex)`
  grid-area: 3 / 2 / 4 / 3;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & span {
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

export const MoreProductContainer = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`;
