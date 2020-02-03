import React from "react";
import { graphql } from "gatsby";
import PostLink from "../components/post-link";

const BlogPage = ({
  data: {
    allMarkdownRemark: {edges},
  }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node}/>)
return (<div>
  {Posts}
</div>
)}

export default BlogPage


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`