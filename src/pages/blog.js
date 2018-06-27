import React from 'react'
import Link from 'gatsby-link'
import "./pages.css"

const BlogPage = ({data}) => (
    <div className="blogs__container">
        <h2 className="blogs__title">Latests Posts</h2>
        {data.allMarkdownRemark.edges.map(post=>(
            <div key={post.node.id}>
                <h4>{post.node.frontmatter.title}</h4>
                <p>{post.node.frontmatter.description}</p>
                <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                <br />
                <br/>
                <Link to={post.node.frontmatter.path}>Read More</Link>
                <br />
                <br />
                <hr />
            </div>
        ))}
    </div>
)

export const pageQuery = graphql`
    query BlogIndexQuery{
        allMarkdownRemark{
            edges{
                node{
                    id
                    frontmatter{
                        path
                        title
                        date
                        author
                        description
                    }
                }
            }
        }   
             
    }
`

export default BlogPage

