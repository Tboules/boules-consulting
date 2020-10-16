import React from "react"
import BS from "./banner.module.scss"

const Banner = ({ imagePos, bannerInfo, titleColor }) => {
  const imageUrl = bannerInfo.image.sourceUrl
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: imagePos,
      }}
      className={BS.container}
    >
      <div className={BS.textContainer}>
        <h1 style={{ color: `${titleColor}` }}>{bannerInfo.pageTitle}</h1>
        <h4>{bannerInfo.pageSubtext}</h4>
      </div>
    </div>
  )
}

export default Banner
