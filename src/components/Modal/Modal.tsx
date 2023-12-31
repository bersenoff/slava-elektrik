/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import styled from "styled-components";
import Icon, { IconName } from "../Icon";
import { BreakPoint } from "../../constants/breakpoints";

type Props = {
  isShow: boolean;
  onClose: () => void;
};

const Modal: React.FC<React.PropsWithChildren<Props>> = ({
  isShow,
  children,
  onClose,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClose = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isShow) {
    return null;
  }

  return (
    <Container onClick={handleClose}>
      <CloseButton>
        <Icon name={IconName.Close} />
      </CloseButton>
      <Content ref={ref}>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.75);
  height: 100%;
  width: 100%;
  z-index: 10;
`;

const CloseButton = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  cursor: pointer;
  height: 64px;
  width: 64px;

  svg {
    color: white;
  }

  @media ${BreakPoint.Mobile} {
    top: 12px;
    right: 12px;
    height: 48px;
    width: 48px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 24px);
`;

export default Modal;
