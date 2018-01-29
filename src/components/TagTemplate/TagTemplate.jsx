import React from "react";
import TagPreview from "../TagPreview/TagPreview";
import _ from "lodash";

export default class TagTemplate extends React.Component {
  getPostList() {
    const tagList = [];
    this.props.data.allMarkdownRemark.edges.forEach(Edge => {
      tagList.push({
        path: Edge.node.frontmatter.path,
        tags: Edge.node.frontmatter.tags,
        cover: Edge.node.frontmatter.cover,
        title: Edge.node.frontmatter.title,
        date: Edge.node.frontmatter.date,
        excerpt: Edge.node.excerpt
      });
    });
    return tagList;
  }

  render() {
    const tag = this.props.pathContext.tag;
    const tagList = this.getPostList();
    return (
      <div className="tag-template">
        <h1> {_.capitalize(tag)} Projects</h1>
        {tagList.map(tagitem => (
          <TagPreview key={tagitem.title} taginfo={tagitem} />
        ))}
      </div>
    );
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
