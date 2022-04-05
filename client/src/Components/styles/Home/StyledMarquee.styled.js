import styled from "styled-components";

export const MarqueeContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const StyledMarquee = styled.div`
  font-size: 80px;
  line-height: 1.3;
  padding: 24px 0;
  white-space: nowrap;
  animation: marquee 60.5s infinite linear;
  &:after {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
        consequuntur.";
  }
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;
