import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import styled from "styled-components";
import { BreakPoint } from "../../constants/breakpoints";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Text, { TextType } from "../../components/Text";
import PhoneInput from "../../components/PhoneInput";

type Props = {
  dark?: boolean;
};

const Form: React.FC<Props> = (props) => {
  const [ux, setUX] = useState({
    loading: false,
    fields: {
      name: "",
      phone: "",
    },
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setUX((s) => ({
      ...s,
      fields: {
        ...s.fields,
        [name]: value,
      },
    }));
  };

  const handleSubmit = () => {
    if (ux.loading) {
      return;
    }

    if (!ux.fields.name) {
      toast("Введите имя", {
        type: "error",
        hideProgressBar: true,
      });
      return;
    }

    if (!ux.fields.phone) {
      toast("Введите телефон", {
        type: "error",
        hideProgressBar: true,
      });
      return;
    }

    if (ux.fields.phone.replace(/_/g, "").length < 18) {
      toast("Введите корректный номер телефона", {
        type: "error",
        hideProgressBar: true,
      });
      return;
    }

    setUX((s) => ({
      ...s,
      loading: true,
    }));

    const formData = new FormData();

    formData.append("arr[name]", ux.fields.name);
    formData.append("arr[phone]", ux.fields.phone);
    formData.append("arr[city]", "Иркутск");

    axios({
      url: "/send.php",
      method: "POST",
      data: formData,
    })
      .then(() => {
        setUX((s) => ({
          ...s,
          loading: false,
          fields: {
            name: "",
            phone: "",
          },
        }));

        toast(
          "Заявка успешно отправлена! Мы свяжемся с Вами в течении 10 минут",
          {
            type: "success",
            hideProgressBar: true,
          }
        );
      })
      .catch(() => {
        setUX((s) => ({
          ...s,
          loading: false,
        }));

        toast("Произошла ошибка при отправке заявки. Попробуйте позднее.", {
          type: "error",
          hideProgressBar: true,
        });
      });
  };

  return (
    <Container {...props}>
      <Heading>
        <Text type={TextType.H2} white={props.dark} shadow={props.dark} bold>
          ОСТАВЬТЕ ЗАЯВКУ
        </Text>
        <Text
          type={TextType.H4}
          white={props.dark}
          shadow={props.dark}
          opacity={0.8}
          medium
        >
          И Я ПЕРЕЗВОНЮ ВАМ ЧЕРЕЗ 2 МИНУТЫ
        </Text>
      </Heading>
      <Input
        type="text"
        placeholder="Имя"
        name="name"
        onChange={handleChangeInput}
        white={props.dark}
        fullWidth
      />
      <PhoneInput
        placeholder="Телефон"
        name="phone"
        onChange={handleChangeInput}
        white={props.dark}
        fullWidth
      />
      <Button
        label="ОТПРАВИТЬ"
        onClick={handleSubmit}
        loading={ux.loading}
        fullWidth
      />
    </Container>
  );
};

const Container = styled.div<Props>`
  background: ${({ dark }) => (dark ? `rgba(0, 0, 0, 0.75)` : `white`)};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 40px;
  width: 650px;

  @media ${BreakPoint.Mobile} {
    gap: 12px;
    padding: 12px;
    margin: 0 12px;
    width: calc(100vw - 24px);
  }

  @media ${BreakPoint.Tablet} {
    gap: 16px;
    padding: 32px;
    width: 500px;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Form;
