import React from 'react'
import './styles/ContactPage.css'

const ContactPage = () => {
  return (
    <div className="form__container">
    <form className="form" >
      <h1 className="heading">Contacto</h1>
      <div>
        <input
          className="input"
          placeholder="contact.name"
          
          type="text"
          id="firstname"
        />
      </div>
      <div>
        <input
          className="input"
          placeholder="contact.lastname"
        
          type="text"
          id="lastname"
        />
      </div>
      <div>
        <input
          className="input"
          placeholder="contact.email"
          
          type="email"
          id="email"
        />
      </div>
      <div>
        <input
          className="input"
          placeholder="contact.phone"
          
          type="text"
          id="phone"
        />
      </div>
      <button className="btn">("contact.sendto")</button>
    </form>
  </div>
  )
}

export default ContactPage