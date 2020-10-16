import React from "react"
import { graphql } from "gatsby"
import SI from "./services.module.scss"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header"

export const query = graphql`
  query($slug: ID!) {
    wpcontent {
      serve(id: $slug, idType: SLUG) {
        title
        WPsingSent {
          sing {
            sentone
          }
        }
        WPMultiSent {
          multisentgroup {
            multisenttwo
            multisentone
          }
        }
      }
    }
  }
`

const ServicesInfo = ({ data }) => {
  console.log(data)
  const { title } = data.wpcontent.serve
  const { multisentone } = data.wpcontent.serve.WPMultiSent.multisentgroup
  const { multisenttwo } = data.wpcontent.serve.WPMultiSent.multisentgroup
  return (
    <Layout>
      <Header title={title} />
      <div className={SI.container}>
        <div className={SI.textCont}>
          <h1>{title}</h1>
          <h3>{data.wpcontent.serve.WPsingSent.sing.sentone}</h3>
          <div dangerouslySetInnerHTML={{ __html: multisentone }} />
          <div dangerouslySetInnerHTML={{ __html: multisenttwo }} />
        </div>
      </div>
    </Layout>
  )
}

export default ServicesInfo
