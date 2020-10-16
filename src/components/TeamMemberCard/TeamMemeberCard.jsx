import React from "react"
import TMC from "./teamMemberCard.module.scss"

export const TeamMemberCards = ({ teamCardInfo }) => {
  console.log(teamCardInfo)

  const phoneNumber = number => {
    if (number === null) {
      return null
    } else {
      return <h5>{number}</h5>
    }
  }

  return (
    <div className={TMC.container}>
      <div className="container">
        {teamCardInfo.map(card => {
          return (
            <div className={TMC.card} key={card.memberName}>
              <h2>{card.memberName}</h2>
              <div
                className={TMC.para}
                dangerouslySetInnerHTML={{ __html: card.memberBio }}
              />
              <img
                className={TMC.image}
                src={card.memberPhoto.sourceUrl}
                alt="member"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
