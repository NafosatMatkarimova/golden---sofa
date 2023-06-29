import React from 'react';
import * as S from "./style";
import { Container } from '../Container/style';
import { Title } from '../WhyUs/style';
import {Formik} from "formik";
import * as yup from "yup";
import ErrorMessageHandler from '../ErrorMessageHandler';

const ContactForm = () => {

    const contactInitialValeus = {
        name: "",
        email: "",
    }

    const onSubmit = (values ,{resetform}) => {
       console.log(values);
    }

    const ContactFormValidation = yup.object().shape({
        name: yup.string().min(3, "Too short!").required(),
        email: yup.string().email("Invalid email").required(),
    });
  return (
    <S.ContactFormWrapper>
        <Container>
            <S.FormContent>
                <Title>
                Мы Вам перезвоним
                </Title>
                <S.FormContentText>
                Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.
                </S.FormContentText>
                <Formik initialValues={contactInitialValeus} onSubmit={onSubmit} validationSchema={ContactFormValidation} validatiOnChange>
                    {(Formik) => {
                       
                        return(
                            <S.ContactForm onSubmit={Formik.handleSubmit}>
                          <S.FormRows>
                          <S.FormInput type='text'name='name'  className={`${
                                                Formik.errors.name && "error"
                                            }`}  onChange={Formik.handleChange} placeholder='Ваше имя'/>
                                <ErrorMessageHandler name='name' />
                          </S.FormRows>
                                <S.FormRows>
                                <S.FormInput type='email'name='email'   className={`${
                                                Formik.errors.email && "error"
                                            }`} onChange={Formik.handleChange} placeholder='Ваш Email'/>
                                <ErrorMessageHandler name='email' />
                                </S.FormRows>
                                 <S.SubmitBtn type='submit'>Отправить</S.SubmitBtn>
                            </S.ContactForm>
                        )
                    }}
                </Formik>
            </S.FormContent>
        </Container>
    </S.ContactFormWrapper>
  )
}

export default ContactForm;