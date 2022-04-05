import styled from "styled-components";

export const Flex = styled.div`
  display: flex;

  & > div {
    flex: 1;
  }
`;

export const Row = styled(Flex)`
  flex-direction: row;
`;

export const MediaRow = styled(Flex)`
  flex-direction: row;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Column = styled(Flex)`
  flex-direction: column;
`;
export const Center = styled(Flex)`
  align-items: center;
  justify-content: center;
`;

export const SpaceBetween = styled(Flex)`
  justify-content: space-between;
`;
