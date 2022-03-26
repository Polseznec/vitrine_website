import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;

  & > div {
    flex: 1;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  & > div {
    flex: 1;
  }
`;

export const MediaRow = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    flex: 1;
  }
`;
export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    flex: 1;
  }
`;
