import React from 'react';
import Layout from '../../components/Layout';
import * as styles from "../../styles/projects.module.css";

export default function Projects() {
  return (
    <Layout>
        <div className={styles.portfolio}>
          <h2>Projects</h2>
          <h3>Check out my projects</h3>
          <p>Front-end developer based in London</p>
        </div>
    </Layout>
  )
}
