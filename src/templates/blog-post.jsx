import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";
import Content, { HTMLContent } from "../components/Content";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import React from "react";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(
                    (tag) =>
                      tag && (
                        <li key={`tag${tag}`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      )
                  )}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post?.html}
        contentComponent={HTMLContent}
        description={post?.frontmatter?.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post?.frontmatter?.title}`}</title>
            <meta
              name="description"
              content={`${post?.frontmatter?.description}`}
            />
          </Helmet>
        }
        tags={post?.frontmatter?.tags}
        title={post?.frontmatter?.title}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
