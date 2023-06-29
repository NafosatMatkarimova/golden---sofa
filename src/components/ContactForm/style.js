import styled from "styled-components";
import { Colors, Flex } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const ContactFormWrapper = styled.section`
  width: 100%;
  background-color: ${Colors.secondarycolor};
  ${adaptiveValue("padding-block", 60, 32)}
`;

const FormContent = styled.div`
  max-width: 748px;
  ${Flex.center}
  flex-direction: column;
  ${adaptiveValue("row-gap", 24, 10)}
  margin: 0 auto;
  text-align: center;
`;

const FormContentText = styled.p`
  max-width: 518px;
  width: 100%;
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.grey};
`;

const ContactForm = styled.form`
  width: 100%;
  ${Flex.spaceBetween}
  column-gap: 24px;

  @media (max-width: 768px) {
        flex-direction: column;
        row-gap: 24px;
    };
`;

const FormInput = styled.input`
  padding: 12px 16px;
  background: rgba(22, 28, 36, 0.04);
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.grey};
  border: none;

  &:focus{
    outline: 1px solid ${Colors.primarycolor};
  }

  &.error {
        outline: 1px solid red;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const FormRows = styled.div`
position: relative;
width: 100%;
`


const SubmitBtn = styled.button`
    padding-block: 12px;
    padding-inline: 70px;
    background-color: ${Colors.primarycolor};
    font-weight: 500;
    font-size: 16px;
    ${adaptiveValue("line-height", 26, 19)}
    color: ${Colors.light};
    border: none;
    cursor: pointer;
    border: 1px solid ${Colors.primarycolor};
    transition: 0.4s;

    &:hover {
        background-color: transparent;
        color: ${Colors.primarycolor};
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;


export {
  ContactFormWrapper,
  FormContent,
  FormContentText,
  ContactForm,
  FormInput,
  SubmitBtn,
  FormRows,
};
