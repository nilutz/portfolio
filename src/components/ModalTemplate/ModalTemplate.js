import React from 'react'
import Media from 'react-md/lib/Media'
import ItemTag from '../ItemTag/ItemTag'

import './ModalTemplate.scss'

export default function ModalTemplate({ data }) {
  const { markdownRemark: item } = data
  return (
    <div className="item-page md-grid md-grid--no-spacing">
      <div className="md-cell--3 left">
        <h1 className="item-header">{item.frontmatter.title}</h1>
        <Media
          aspectRatio="1-1"
          className="md-grid md-cell--phone-hidden md-cell--tablet-hidden"
          style={{
            backgroundImage: `url(${item.frontmatter.cover})`,
            height: `125px`
          }}
        />
        <div className="item-tags md-cell--phone-hidden md-cell--tablet-hidden">
          <ItemTag tags={item.frontmatter.tags} />
        </div>
      </div>

      <div className="md-cell--9">
        <div className="item-content">
          <div
            className="item-html"
            dangerouslySetInnerHTML={{ __html: item.html }}
          />
        </div>
      </div>
    </div>
  )
}

export const itemQuery = graphql`
  query ItemByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        cover
        tags
      }
    }
  }
`
