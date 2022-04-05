import styled from "styled-components";

export const GridProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
  padding: 20px 0px;
  max-width: 1300px;
  margin-top: 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Img = styled.img`
  display: block;
  height: 400px;
  width: 100%;
  object-fit: cover;
`;
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
`;
