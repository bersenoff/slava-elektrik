import styled from "styled-components";

export default styled.div`
  background: url("/img/logo.png") no-repeat;
  background-size: cover;

  @media screen and (min-width: 360px) and (max-width: 767px) {
    height: 43px;
    width: 160px;
  }

  @media screen and (min-width: 768px) and (max-width: 1365px) {
    height: 62px;
    width: 230px;
  }

  @media screen and (min-width: 1366px) {
    height: 94px;
    width: 350px;
  }
`;
