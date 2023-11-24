import React, { useState } from "react";
import Button from "../../components/Button";
import { Props as ButtonProps } from "../../components/Button/Button";
import Modal from "../../components/Modal";
import Form from "../Form";

type Props = {
  formId?: string;
} & ButtonProps;

const FormButton: React.FC<Props> = ({ formId, ...props }) => {
  const [isModalShow, setIsModalShow] = useState(false);

  const openModal = () => setIsModalShow(true);
  const closeModal = () => setIsModalShow(false);

  return (
    <>
      <Button {...props} onClick={openModal} />
      <Modal isShow={isModalShow} onClose={closeModal}>
        <Form formId={formId} onSuccess={closeModal} />
      </Modal>
    </>
  );
};

export default FormButton;
