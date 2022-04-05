import styled from "styled-components";

//flex
import { Flex, SpaceBetween } from "../Flexbox.styled";

export const StyledProductsContainer = styled.div`
  padding: 0px 70px;
`;

export const HeaderContainer = styled(Flex)`
  align-items: center;
`;
export const TitleSection = styled.h1`
  padding-top: 20px;
`;

export const FilterContainer = styled(SpaceBetween)`
  flex-direction: column;
  align-items: flex-end;
  font-size: 14px;
  & span {
    cursor: pointer;
  }
`;
