const path = require('path');

exports.createPages = ({boundActionCreators, graphql})=>{
    const { createPage } = boundActionCreators;

    const postTemplate = path.resolve('src/templates/blog-post.js');

    return graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                path
                title
                date
                author
              }
              excerpt
            }
          }
        }
      }
    `).then(res => {
      if (res.errors) {
        return Promise.reject(res.errors)
      }
      res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({ path: node.frontmatter.path, component: postTemplate })
      })
    })
}