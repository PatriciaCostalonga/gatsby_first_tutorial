import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

//we cna destruct props, data inside Home()
export default function Home( {data} ) {
  console.log(data)
  

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Front-end developer based in London</p>
          <Link className={styles.btn} to="/projects">My portfolio Projects</Link>
        </div>
        <GatsbyImage image={getImage(data.file)} alt="Banner" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`