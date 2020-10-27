import React, { useState } from 'react';
import './Contact.scss';
import { sendForm } from 'emailjs-com';
import {
  PersonOutline,
  EmailOutlined,
  MessageOutlined,
  CheckCircleOutline,
  ErrorOutline,
  Facebook,
  PhoneAndroidOutlined,
} from '@material-ui/icons';
import { Modal } from '@material-ui/core';
import cv from '../../assets/cv/CV.pdf';
import Spinner from './Spinner';

const Contact = ({ language }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitProcessing, setSubmitProcessing] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
    setSubmitProcessing(true);
    sendForm(
      'gmail',
      'template_vegeglh',
      e.target,
      'user_0synUJOJ7grlbPr8Dx8rD'
    )
      .then(() => {
        setSubmitProcessing(false);
        const message =
          language === 'pl'
            ? 'Wiadomość została wysłana!'
            : 'Message sent successfully!';
        setSubmitMessage(message);
      })
      .catch(() => {
        setSubmitProcessing(false);
        const message =
          language === 'pl'
            ? 'Błąd podczas wysyłania. Spróbuj ponownie'
            : 'Error while submitting. Plesae try again';
        setSubmitMessage(message);
      });
    e.target.reset();
  };

  return (
    <section className="Contact">
      <h3 className="Contact__Header">
        {language === 'pl' ? 'Kontakt' : 'Contact me'}
      </h3>
      <form className="Contact__Form" onSubmit={handleEmailSubmit}>
        <label className="Contact__InputLabel" htmlFor="name">
          <PersonOutline className="Contact__Icon" />{' '}
          {language === 'pl' ? 'Imię' : 'Name'}
        </label>
        <input className="Contact__Input" id="name" name="name" required />
        <label className="Contact__InputLabel" htmlFor="name">
          <EmailOutlined className="Contact__Icon" /> Email
        </label>
        <input
          className="Contact__Input"
          id="email"
          type="email"
          name="email"
          required
        />
        <label className="Contact__InputLabel" htmlFor="name">
          <MessageOutlined className="Contact__Icon" />{' '}
          {language === 'pl' ? 'Wiadomość' : 'Message'}
        </label>
        <textarea
          className="Contact__Textarea"
          id="message"
          name="message"
          rows="8"
          required
        />
        <button className="Contact__Button" type="submit">
          {language === 'pl' ? 'Wyślij wiadomość' : 'Send message'}
        </button>
        <button className="Contact__Button">
          CV
          <a
            className="Contact__CVButton"
            href={cv}
            download="CV_Jakub_Konefal_Junior_Frontend_Developer"
          >
            {language === 'pl' ? 'Pobierz CV' : 'Download CV'}
          </a>
        </button>
      </form>
      <div className="Contact__Icons" data-aos="fade-right">
        <span className="Contact__Item">
          <EmailOutlined className="Contact__ItemIcon" />
          konefaljakub@gmail.com
        </span>
        <span className="Contact__Item">
          <PhoneAndroidOutlined className="Contact__ItemIcon" />
          662 310 901
        </span>
        <a
          href="https://www.facebook.com/profile.php?id=100003350222858"
          className="Contact__Item"
        >
          <Facebook className="Contact__ItemIcon" />
          Jakub Konefał
        </a>
      </div>
      <Modal
        className="Contact__Modal"
        open={modalOpen}
        onClose={() => setModalOpen(!modalOpen)}
      >
        {submitProcessing ? (
          <Spinner />
        ) : (
          <div className="Contact__ModalContent">
            {submitMessage === 'Message sent successfully!' ||
            'Wiadomość została wysłana!' ? (
              <CheckCircleOutline
                style={{ fontSize: '2.3rem', color: 'green' }}
              />
            ) : (
              <ErrorOutline style={{ fontSize: '2.3rem', color: 'red' }} />
            )}
            <span className="Contact__ModalMsg">{submitMessage}</span>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Contact;
