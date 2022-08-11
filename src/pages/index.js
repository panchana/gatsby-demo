import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from '../components/banner';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Banner/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
