import './App.css'
import { DiGithubBadge } from 'react-icons/di'
import { SiTwitter } from 'react-icons/si'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

function App() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_5oaw0qh", "contact_form", form.current, "Wnu3IUztGr9BiTXFN")
  }

  return (
    <div className="App">
      <div className="container">
        <div className="links">
          <a href="https://github.com/davitostes"><DiGithubBadge /></a>
          <a href="https://twitter.com/DaviTostes7" className='twitter'><SiTwitter /></a>
        </div>
        <div className="content">
          <h1>Contact <b>Me</b></h1>
          <p>Let's level up your brand or bring ideas to live together</p>
          <form ref={form} onSubmit={sendEmail} action="/" method="get">
            <div className="in">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" id="name" required />
              <label htmlFor="email">Your Email</label>
              <input type="text" name="email" id="email" required />
              <label htmlFor="message">Your Message</label>
              <textarea name="message" id="message"></textarea>
              <button type="submit">CONTACT</button>
            </div>
          </form>
        </div>      
      </div>
    </div>
  )
}

export default App
