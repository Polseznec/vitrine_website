import styled from "styled-components";

export const StyledProductCard = styled.div`
  border: 1px solid;
  margin: 20px;
  cursor: pointer;
  transition-duration: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px;

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 300px;
    height: 200px;
    flex-direction: row;
  }

  img {
    height: 200px;
    width: 200px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 100px;
      width: 100px;
    }
  }
`;
