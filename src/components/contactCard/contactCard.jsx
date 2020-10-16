import React from "react"
import { Link } from "gatsby"
import CC from "./contactCard.module.scss"

export const ContactCard = ({ contactCards }) => {
  return (
    <div className={CC.container}>
      {contactCards.map(card => {
        return (
          <a key={card.title} href={card.link === null ? "" : card.link.url}>
            <div className={CC.card}>
              <h2>{card.title}</h2>
              <img src={card.image.sourceUrl} alt="" />
              <p>{card.info}</p>
            </div>
          </a>
        )
      })}
    </div>
  )
}
