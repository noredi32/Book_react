import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerContact = styled.div`
  padding: 50px 0;
  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 15px;
  color: ${colors.colorazulnavy};
`;

export const ContainerForm = styled.div`
  max-width: 900px;
  border-radius: 10px;
  box-shadow: 0 0 12px rgb(0 0 0 / 16%);
  padding: 35px;
  margin: 0 auto;
`;

export const Form = styled.form`
  box-sizing: border-box;
`;

export const InputForm = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 2px solid #4c526838;
  background-color: transparent;
  font-size: 15px;
  display: block;
  width: 100%;
  margin-bottom: 15px;
  color: #4c5268;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 6px;
  border: 2px solid #4c526838;
  background-color: transparent;
  font-size: 14px;
  display: block;
  width: 100%;
  margin-bottom: 15px;
  color: ${colors.grey};
`;

export const Button = styled.button`
  color: ${colors.white};
  background: ${colors.colorverdeenlace};
  padding: 12px 20px;
  border-radius: 10px;
  margin: 15px 0;
  font-weight: 700;
  cursor: pointer;
  width: 140px;
  text-transform: uppercase;
`;

export const ContainerConditions = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size:13px;
  span {
    color: ${colors.grey};
  }
`;

export const TextError = styled.p`
  color: red;
  font-size: 15px;
`;

export const SucessMessage = styled.p`
  font-size: 13px;
  color: ${colors.grey};
`;

export const emptyInputs = styled.p`
  font-size: 13px;
  color: ${colors.grey};
`;