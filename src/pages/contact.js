import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Banner from "../components/Banner/Banner"
import { ContactCard } from "../components/contactCard/contactCard"
import Header from "../components/Header"

export const contactJunk = graphql`
  {
    wpcontent {
      page(id: "cG9zdDoyMg==") {
        title
        pageLayout {
          hero {
            pageTitle
            image {
              sourceUrl
            }
          }
        }
        WPcards {
          cards {
            cardone {
              title
              info
              link {
                url
              }
              image {
                sourceUrl
              }
            }
            cardtwo {
              title
              info
              link {
                url
              }
              image {
                sourceUrl
              }
            }
            cardthree {
              title
              info
              link {
                url
              }
              image {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`

export default function contact({ data }) {
  const bannerData = data.wpcontent.page.pageLayout.hero
  const cardArr = Object.values(data.wpcontent.page.WPcards.cards)
  const imagePos = "-335px -260px"

  return (
    <Layout>
      <Header title="Contact" />
      <Banner imagePos={imagePos} bannerInfo={bannerData} />
      <ContactCard contactCards={cardArr} />
    </Layout>
  )
}
