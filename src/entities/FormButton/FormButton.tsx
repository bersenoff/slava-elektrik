import React, { useState } from "react";
import Button from "../../components/Button";
import { Props } from "../../components/Button/Button";
import Modal from "../../components/Modal";
import Form from "../Form";

const FormButton: React.FC<Props> = (props) => {
  const [isModalShow, setIsModalShow] = useState(false);

  const openModal = () => setIsModalShow(true);
  const closeModal = () => setIsModalShow(false);

  return (
    <>
      <Button {...props} onClick={openModal} />
      <Modal isShow={isModalShow} onClose={closeModal}>
        <Form />
      </Modal>
    </>
  );
};

export default FormButton;
