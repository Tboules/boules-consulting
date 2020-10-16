import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import AliceCarousel from "react-alice-carousel"
import IG from "./imageGal.module.scss"
import "react-alice-carousel/lib/scss/alice-carousel.scss"

const responsive = {
  0: { items: 1 },
  600: { items: 2 },
  950: { items: 3 },
  1405: { items: 5 },
}

export const ImageGallery = ({ imageInfo }) => {
  const [page, setPage] = useState(0)

  const imagePick = (arr, page) => {
    const revolve = page % arr.length
    if (revolve <= -1 && revolve >= -5) {
      return arr.slice(revolve).concat(arr.slice(0, (revolve % arr.length) + 5))
    } else if (revolve < arr.length - 4) {
      return arr.slice(revolve, revolve + 5)
    } else {
      return arr.slice(revolve).concat(arr.slice(0, (revolve % arr.length) - 4))
    }
  }

  const fivePics = imagePick(imageInfo, page)
  const [currentPics, setCurrentPics] = useState(fivePics)

  const paginate = num => {
    setPage(page + num)
  }

  useEffect(() => {
    setCurrentPics(fivePics)
  }, [page, setCurrentPics])

  return (
    <div>
      <div className={IG.container}>
        <h2> Some of Our Happy Customers </h2>
        <AliceCarousel
          className={IG.imageRow}
          activeIndex={5}
          infinite={true}
          responsive={responsive}
          paddingLeft={100}
          autoPlay={true}
          autoPlayInterval={3000}
          disableDotsControls={true}
          disableButtonsControls={true}
          mouseTracking={true}
        >
          {imageInfo.map(image => {
            return (
              <img
                className={IG.pic}
                draggable={false}
                key={image.sourceUrl}
                src={image.sourceUrl}
                alt="Gallery"
              />
            )
          })}
        </AliceCarousel>
      </div>
    </div>
  )
}
