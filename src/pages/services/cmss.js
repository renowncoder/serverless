import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../../components/layout";
import Card from "../../components/card/card";

import styles from "../page.module.scss";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query cmsQuery {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/cmss/" } }) {
          edges {
            node {
              frontmatter {
                title
                path
                url
                logo
                tags
              }
              html
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <main className={styles.grid}>
          {data.allMarkdownRemark.edges.map(({ node }, i) => (
            <Card
              logo={node.frontmatter.logo}
              title={node.frontmatter.title}
              key={node.frontmatter.title}
              html={node.html}
              url={node.frontmatter.url}
            />
          ))}
        </main>
      </Layout>
    )}
  />
);
