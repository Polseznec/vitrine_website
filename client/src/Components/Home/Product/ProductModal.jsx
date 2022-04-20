import React from "react";
import axios from "axios";

//components
import { Button, CircleButton, CrossButton } from "../../Buttons";
import MailModal from "../../Mail/MailModal";

//styled
import { FullScreenModal } from "../../styles/Modal.styled";
import {
  MainContainer,
  Header,
  DataContainer,
  CarousellContainer,
  StaticContainer,
  Description,
  Paragraph,
  Infos,
  Displayer,
  Selector,
  SelectorContainer,
  PatternPhoto,
  StaticHeader,
  MoreProductContainer,
  Image,
} from "../../styles/Home/Product.styled";

//assets
import { HorizontalLine } from "../../styles/Assets.styled";

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
          <CarousellContainer>
            <Displayer>
              <Image src={product.main_picture} alt="" />
            </Displayer>

            <SelectorContainer>
              <Selector>
                <CircleButton
                  onClick={() => {
                    console.log("BTN 1");
                  }}
                  size={"20px"}
                />
                <CircleButton
                  onClick={() => {
                    console.log("BTN 2");
                  }}
                  size={"20px"}
                />
                <CircleButton
                  onClick={() => {
                    console.log("BTN 3");
                  }}
                  size={"20px"}
                />
              </Selector>
            </SelectorContainer>
          </CarousellContainer>

          <StaticContainer>
            <PatternPhoto
              src={product.pattern_picture}
              alt={product.title + "image"}
            ></PatternPhoto>

            <StaticHeader>
              <span style={{ marginRight: "15%" }}>{product.title}</span>
              <HorizontalLine />
              {product.available === true ? (
                <span style={{ marginLeft: "15%" }}>Disponible</span>
              ) : (
                <span style={{ marginLeft: "15%" }}>Plus disponilbe</span>
              )}
            </StaticHeader>

            <Description>
              <Paragraph>{product.description_part_one}</Paragraph>
              <Paragraph>{product.description_part_two}</Paragraph>
            </Description>
            <Infos>
              <span>{product.type}</span>
              <span>{product.fabric_description}</span>

              <span>
                {product.width} cm X {product.height} cm X {product.depth} cm
              </span>
              <Button
                title={"Je le veux !"}
                onClick={() => {
                  setHandleModal(!handleModal);
                }}
              />
              {handleModal ? (
                <MailModal closeModal={closeModal} product={product} />
              ) : null}
            </Infos>
          </StaticContainer>
          <MoreProductContainer></MoreProductContainer>
        </DataContainer>
      </MainContainer>
    </FullScreenModal>
  );
}

export default ProductModal;
