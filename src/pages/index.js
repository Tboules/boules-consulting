import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/Layout"
import Banner from "../components/Banner/Banner"
import { Card } from "../components/Card/Card"
import { ImageGallery } from "../components/ImageGallery/ImageGallery"
import Header from "../components/Header"

export default function Home() {
  const pageBody = useStaticQuery(graphql`
    {
      wpcontent {
        page(id: "cG9zdDoxNQ==") {
          pageLayout {
            hero {
              pageSubtext
              pageTitle
              image {
                sourceUrl
              }
            }
          }
          WPsingSent {
            sing {
              sentone
            }
          }
          WPcards {
            cards {
              cardone {
                title
                info
                image {
                  sourceUrl
                }
                link {
                  url
                }
              }
              cardtwo {
                title
                info
                image {
                  sourceUrl
                }
                link {
                  url
                }
              }
              cardthree {
                title
                info
                image {
                  sourceUrl
                }
                link {
                  url
                }
              }
            }
          }
          imageGallery {
            imagegallery {
              picone {
                sourceUrl
              }
              pictwo {
                sourceUrl
              }
              picthree {
                sourceUrl
              }
              picfour {
                sourceUrl
              }
              picfive {
                sourceUrl
              }
              picsix {
                sourceUrl
              }
              picseven {
                sourceUrl
              }
              piceight {
                sourceUrl
              }
              picnine {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `)

  const bannerData = pageBody.wpcontent.page.pageLayout.hero
  const cardArr = Object.values(pageBody.wpcontent.page.WPcards.cards)
  const imageGalArr = Object.values(
    pageBody.wpcontent.page.imageGallery.imagegallery
  )

  const imagePos = "0px -260px"

  return (
    <Layout>
      <Header title="Home" />
      <Banner
        imagePos={imagePos}
        bannerInfo={bannerData}
        titleColor={"#f7f7f7"}
      />
      <h1 id="index-card-title" style={{ color: "#555555" }}>
        I need help with...
      </h1>
      <Card cards={cardArr} />
      <ImageGallery imageInfo={imageGalArr} />
    </Layout>
  )
}
