import React from 'react'
import './pages.css'

export default class Contact extends React.Component{
  render(){
  return (<div>
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
)
  }
}