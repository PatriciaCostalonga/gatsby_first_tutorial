import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import * as styles from "../../styles/projects.module.css";

export default function Projects({data}) {
  console.log(data)
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
        <div className={styles.portfolio}>
          <h2>Projects</h2>
          <h3>Check out my projects</h3>
          <p>Front-end developer based in London</p>
          <div className={styles.projects}>
            {projects.map(project => (
              <Link to={ "/projects/" + project.frontmatter.slug } key= {project.id }>
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </Link>
            ))}
          </div>
          <p>Like what you see?</p>
          <p>Email me <a href={"mailto:" + contact}>{contact}</a></p>
        </div>
    </Layout>
  )
}


//export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        id
        frontmatter {
          title
          stack
          slug
        }
      }
    }
    contact: site{
      siteMetadata{
        contact
      }
    }
  }
`