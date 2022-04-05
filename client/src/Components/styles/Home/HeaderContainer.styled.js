import styled from "styled-components";
import coverImage from "../../../assets/image/home_cover_img.png";
import { theme } from "../_Theme.styled";

export const StyledHeaderContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url(${coverImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & img {
    width: 100%;
    padding: 50px 50px;
  }
  & h1 {
    margin-top: -110px;
    font-size: 40px;
    text-transform: uppercase;
    transform: rotate(-5deg);
    background-color: ${theme.color.secondary};
  }
`;
