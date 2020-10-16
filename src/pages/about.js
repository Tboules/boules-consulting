import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Banner from "../components/Banner/Banner"
import A from "./about.module.scss"
import { TeamMemberCards } from "../components/TeamMemberCard/TeamMemeberCard"
import Header from "../components/Header"

export const content = graphql`
  {
    wpcontent {
      page(id: "cG9zdDoxNw==") {
        title
        pageLayout {
          hero {
            pageTitle
            pageSubtext
            image {
              sourceUrl
            }
          }
        }
        WPMultiSent {
          multisentgroup {
            multisentone
          }
        }
        WPmembers {
          teamCardOne {
            memberBio
            memberName
            memberPhoto {
              sourceUrl
            }
          }
          teamCardTwo {
            memberBio
            memberName
            memberPhoto {
              sourceUrl
            }
          }
          teamCardThree {
            memberBio
            memberName
            memberPhoto {
              sourceUrl
            }
          }
        }
      }
    }
  }
`

export default function about({ data }) {
  const bannerData = data.wpcontent.page.pageLayout.hero
  const info = data.wpcontent.page.WPMultiSent.multisentgroup.multisentone
  const memberCardInfo = Object.values(data.wpcontent.page.WPmembers)

  const imagePos = "0px -350px"
  return (
    <Layout>
      <Header title="About Us" />
      <Banner
        bannerInfo={bannerData}
        imagePos={imagePos}
        titleColor={"#58877e"}
      />
      <div className={A.textContainer}>
        <h2>What We Do!</h2>
        <div
          className={A.text}
          dangerouslySetInnerHTML={{ __html: info }}
        ></div>
      </div>
      <TeamMemberCards teamCardInfo={memberCardInfo} />
    </Layout>
  )
}
