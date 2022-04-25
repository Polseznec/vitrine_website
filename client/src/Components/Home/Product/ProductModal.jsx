import React from "react";
import axios from "axios";

//components
import { Button, CrossButton } from "../../Buttons";
import { MailModal } from "../../mail/MailModal";

//styled
import { FullScreenModal } from "../../styles/Modal.styled";
import {
  MainContainer,
  Header,
  DataContainer,
  StaticContainer,
  Description,
  Paragraph,
  Infos,
  PatternPhoto,
  StaticHeader,
  MoreProductContainer,
  PatternPhotoContainer,
} from "../../styles/Home/Product.styled";
import { Column } from "../../styles/Flexbox.styled";

//assets
import { HorizontalLine } from "../../styles/Assets.styled";
import ProductCarousel from "./ProductCarousel";
import { H4, Span } from "../../styles/Texts.styled";
import { theme } from "../../styles/_Theme.styled";

function ProductModal({ _id, onClose }) {
  const [product, setProduct] = React.useState({});
  const [handleModal, setHandleModal] = React.useState(false);

  React.useEffect(() => {
    const fetshProduct = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/product/${_id}`,
        withCredentials: true,
      })
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetshProduct();
  }, [_id]);

  const closeModal = () => {
    setHandleModal(false);
  };

  return (
    <FullScreenModal>
      <MainContainer>
        <Header>
          <CrossButton onClick={onClose} />
        </Header>
        <DataContainer>
          <ProductCarousel product={product} />

          <StaticContainer>
            <PatternPhotoContainer>
              <PatternPhoto
                src={product.pattern_picture}
                alt={product.title + "image"}
              />
            </PatternPhotoContainer>
            <StaticHeader>
              <span style={{ marginRight: "15%" }}>{product.title}</span>
              <HorizontalLine />
              {product.available === true ? (
                <span style={{ marginLeft: "15%" }}>Disponible</span>
              ) : (
                <span style={{ marginLeft: "15%" }}>Plus disponilbe 😢</span>
              )}
            </StaticHeader>

            <Description>
              <Paragraph>{product.description_part_one}</Paragraph>
              <Paragraph>{product.description_part_two}</Paragraph>
            </Description>

            <Infos>
              <H4
                color={theme.color.black}
                size={"1.5em"}
                style={
                  product.available === false
                    ? { textDecoration: "line-through" }
                    : null
                }
              >
                {product.price}€
              </H4>
              <Column style={{ paddingTop: "20px" }}>
                <Span>{product.type}</Span>
                <Span>{product.fabric_description}</Span>
                <Span>
                  {product.width} cm X {product.height} cm X {product.depth} cm
                </Span>
              </Column>

              {product.available === true ? (
                <Button
                  title={"Je le veux !"}
                  onClick={() => {
                    setHandleModal(!handleModal);
                  }}
                />
              ) : (
                <div style={{ padding: "15px 60px" }} />
              )}
            </Infos>

            {handleModal ? (
              <MailModal closeModal={closeModal} product={product} />
            ) : null}
          </StaticContainer>
          <MoreProductContainer></MoreProductContainer>
        </DataContainer>
      </MainContainer>
    </FullScreenModal>
  );
}

export default ProductModal;
