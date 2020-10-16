import React from "react"
import logo from "./images/white_logo.png"
import instaLogo from "./images/Bold Insta.jpg"
import linkedIn from "./images/LI-In-Bug.png"
import FS from "./footer.module.scss"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { useState } from "react"

const Footer = () => {
  const [email, setEmail] = useState(null)
  const [listFields, setListFields] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()
    e.target.reset()
    const result = await addToMailchimp(email, listFields)

    alert(result.msg)

    setEmail(null)
    setListFields({})
  }
  return (
    <footer className={FS.container}>
      <div className={FS.BClogo}>
        <img alt="BCLogo" src={logo} />
      </div>
      <form onSubmit={handleSubmit} className={FS.subSec}>
        <h4>Subscribe Today</h4>
        <input
          onChange={e =>
            setListFields({
              ...listFields,
              FName: e.target.value,
            })
          }
          type="text"
          placeholder="First Name"
        />
        <input
          onChange={e =>
            setListFields({
              ...listFields,
              LName: e.target.value,
            })
          }
          type="text"
          placeholder="Last Name"
        />
        <input
          onChange={e => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <button> Subscribe! </button>
      </form>
      <div className={FS.contactSec}>
        <h4>Contact Information:</h4>
        <ul>
          <li>Phone: (818)-599-2692</li>
          <li>Email: info@boulesconsulting.org</li>
        </ul>
        <div className={FS.logoCont}>
          <a href="https://www.instagram.com/boules_consulting/">
            <img src={instaLogo} alt="Instagram Logo" />
          </a>
          <a href="https://www.linkedin.com/in/marianne-boules-56518588/">
            <img src={linkedIn} alt="Instagram Logo" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
