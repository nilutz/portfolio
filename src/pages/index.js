import React from "react";
import Media, { MediaOverlay } from "react-md/lib/Media";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Link from "gatsby-link";

import styled from "styled-components";

const HoverableMediaOverlay = styled(MediaOverlay)`
  display: None;
  height: 100%;
`;

const HoverableMedia = styled(Media)`
  &:hover ${HoverableMediaOverlay} {
    display: block;
  }
`;

export default function Index({ data }) {
  const { edges: items } = data.allMarkdownRemark;
  return (
    <div className="md-grid gridster">
      {items
        .filter(item => item.node.frontmatter.title.length > 0)
        .map(({ node: item }) => {
          return (
            <div
              className="md-cell md-cell--3-desktop md-cell--2--tablet md-cell--4-phone front-item"
              key={item.id}
            >
              <Link to={item.frontmatter.path}>
                <HoverableMedia
                  aspectRatio="1-1"
                  className="md-grid"
                  style={{
                    backgroundImage: `url(${item.frontmatter.cover})`,
                    height: `125px`
                  }}
                >
                  <HoverableMediaOverlay>
                    <CardTitle title={item.frontmatter.title} />
                  </HoverableMediaOverlay>
                </HoverableMedia>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export const itemListQuery = graphql`
  query ItemList {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date
            path
            tags
            cover
          }
        }
      }
    }
  }
`;
