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
        setSubmitMessage('Message sent successfully!');
      })
      .catch(() => {
        setSubmitProcessing(false);
        setSubmitMessage('Error while submitting. Please try again.');
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
        <input className="Contact__Input" id="email" name="email" required />
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
      </form>
      <div className="Contact__Icons">
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
            {submitMessage === 'Message sent successfully!' ? (
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
