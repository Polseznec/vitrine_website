import styled from "styled-components";

//flex
import { Flex } from "../Flexbox.styled";

//keyframes
import { displayOn } from "../_Keyframes.styled";

export const MainContainer = styled.div`
  overflow-y: scroll;
  animation: ${displayOn} 1.5s ease-in-out;
`;

export const Header = styled(Flex)`
  padding: 0 20px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 70px;
  padding-right: 35px;
`;

export const DataContainer = styled(Flex)`
  width: 100%;
  min-height: calc(100% - 70px);
`;

export const CarousellContainer = styled.div`
  height: 100%;
  width: 40%;
  padding: 0 20px;
`;
export const Displayer = styled.div`
  & img {
    display: block;
    width: 100%;
    max-height: 500px;
    min-height: 400px;
    object-fit: cover;
  }
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
  height: 100%;
  & img {
    display: block;
    width: 500px;
    height: 100px;
    object-fit: cover;
  }
`;
export const BodyData = styled(Flex)``;

export const Description = styled(Flex)`
  align-items: flex-start;
  flex-direction: column;
`;

export const Paragraph = styled.span`
  padding: 20px;
`;

export const Infos = styled(Flex)`
  padding-left: 20px;
  max-width: 35%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 20%;
  & span {
    margin-bottom: 5px;
  }
`;
