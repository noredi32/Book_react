import React, { useState, useRef } from "react";
import * as S from "./Contact.styles";
import emailjs from "@emailjs/browser";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const Contact = () => {
  const [contactDates, setContactDates] = useState({
    name: "",
    email: "",
    message: "",
    checkedTerms: false,
  });
  const [emptyInputs, setEmptyInputs] = useState(false);
  const [successSendForm, setSuccessSendForm] = useState(false);
  const [errorSendForm, setErrorSendForm] = useState(false);

  const form = useRef();

  const onSubmit = (e) => {
    // evitar recargo de página
    e.preventDefault();

    // validate form
    if (
      contactDates.name === "" ||
      contactDates.email === "" ||
      contactDates.message === "" ||
      contactDates.checkedTerms === false
    ) {
      setEmptyInputs(true);
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_USER_ID
        )
        .then(
          (result) => {
            setSuccessSendForm(true);
          },
          (error) => {
            setErrorSendForm(true);
          }
        );
    }
  };

  return (
    <S.ContainerContact id="contact">
      <S.Title className="bodyfont"><AssignmentIndIcon fontSize="small" />Escríbeme</S.Title>
      <S.ContainerForm>
        {successSendForm ? (
          <S.SucessMessage className="bodyfont">Tu mensaje fue enviado, me comunicare contigo en cuanto pueda.</S.SucessMessage>
        ) : (
          <S.Form onSubmit={onSubmit} ref={form}>
            <S.InputForm
              placeholder="Nombre"
              type="text"
              name="name"
              onChange={(e) =>
                setContactDates({ ...contactDates, name: e.target.value })
              }
              value={contactDates.name}
            />
            <S.InputForm
              placeholder="Email"
              type="email"
              name="email"
              onChange={(e) =>
                setContactDates({ ...contactDates, email: e.target.value })
              }
              value={contactDates.email}
            />
            <S.TextArea
              placeholder="Deja tu mensaje" className="bodyfont"
              name="message"
              onChange={(e) =>
                setContactDates({ ...contactDates, message: e.target.value })
              }
              value={contactDates.message}
            />
            <S.ContainerConditions>
              <input
                type="checkbox"
                onChange={(e) =>
                  setContactDates({
                    ...contactDates,
                    checkedTerms: e.target.checked,
                  })
                }
              />
              <span className="bodyfont">Acepto los terminos y condiciones.</span>
            </S.ContainerConditions>
            <S.Button type="submit"><ForwardToInboxIcon fontSize="small" />Enviar</S.Button>
          </S.Form>
        )}
        {emptyInputs && (
          <p className="bodyfont" id="empty">Tienes que llenar todos los campos y aceptar los terminos y condiciones.</p>
        )}
        {errorSendForm && (
          <S.TextError className="bodyfont">Este es un error, intenta más tarde.</S.TextError>
        )}
      </S.ContainerForm>
    </S.ContainerContact>
  );
};

export default Contact;