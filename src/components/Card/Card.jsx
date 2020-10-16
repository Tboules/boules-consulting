import React from "react"
import { Link } from "gatsby"
import CS from "./card.module.scss"

export const Card = ({ cards }) => {
  return (
    <div className={CS.cardBox}>
      {cards.map(card => {
        return (
          <Link key={card.title} to={card.link.url}>
            <div
              style={{ backgroundImage: `url(${card.image.sourceUrl})` }}
              className={CS.cardContainer}
            >
              <div className={CS.textCont}>
                <h1>{card.title}</h1>
                <p>{card.info}</p>
                <button className={CS.infoButton}>Learn More!</button>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
