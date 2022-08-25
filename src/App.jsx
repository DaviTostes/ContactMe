import './App.css'
import { DiGithubBadge } from 'react-icons/di'
import { SiTwitter } from 'react-icons/si'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="links">
          <a href="https://github.com/davitostes"><DiGithubBadge /></a>
          <a href="https://twitter.com/DaviTostes7" className='twitter'><SiTwitter /></a>
        </div>
        <form action="/" method="get">
          <h1>Contact <b>Me</b></h1>
          <p>Let's level up your brand or bring ideas to live together</p>
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
        <img src="src/assets/Lazy_Cat_animated_illustrations_by_Icons8/Lazy_Cat_animated_illustrations_by_Icons8/Lazy_Cat_with_fishes_transparent_by_Icons8.gif" alt="error" />
      </div>
    </div>
  )
}

export default App
