import React from "react";

//styled
import {
  MarqueeContainer,
  StyledMarquee,
} from "../styles/Home/StyledMarquee.styled";
import { HorizontalLine } from "../styles/Assets.styled";

export default function Marquee() {
  return (
    <>
      <MarqueeContainer>
        <StyledMarquee>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          consequuntur.
        </StyledMarquee>
      </MarqueeContainer>
      <HorizontalLine height={"20px"} />
    </>
  );
}
