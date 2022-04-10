import React from "react";
import MailForm from "./MailForm";

import { Modal } from "../Modals";

function MailModal({ product, closeModal }) {
  return (
    <Modal>
      <h3>
        Envoyez moi un petit message afin que je puisse savoir qu vous voullez
        cette article :)
      </h3>
      <MailForm closeModal={closeModal} product={product} />
    </Modal>
  );
}

export default MailModal;
