import React from 'react'
import './pages.css'

const ContactPage = () => (
  <div className="contact__container">
    <h2 className="contact__title"> Contact form </h2>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="contact__form"
    >
      <label className="contact__form__label"> Your Name:</label>
      <input type="text" name="name" className="contact__form__input" required/>
      <label className="contact__form__label"> Your Email:</label>
      <input type="email" name="email" className="contact__form__input" required/>
      <label className="contact__form__label">Message: </label>
      <textarea name="message" className="contact__form__textarea" required/>
      <p>
        <button className="contact__form__button" type="submit">
          Send
        </button>
      </p>
    </form>
  </div>
)

export default ContactPage