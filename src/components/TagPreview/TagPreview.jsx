import React, { Component } from 'react'
import Link from 'gatsby-link'
import Media from 'react-md/lib/Media'

import './TagPreview.scss'

class TagPreview extends Component {
  render() {
    const { taginfo } = this.props

    /* eslint no-undef: "off" */
    // const cover = taginfo.cover.startsWith("/")
    //   ? __PATH_PREFIX__ + taginfo.cover
    //   : taginfo.cover;

    const pre = __PATH_PREFIX__.concat('/')
    const precover = pre.concat(taginfo.cover)

    return (
      <div className="tag-preview md-grid">
        <div className="md-cell md-cell--4">
          <Link style={{ textDecoration: 'none' }} to={taginfo.path}>
            <Media
              style={{
                backgroundImage: `url(${precover})`,
                height: `89px`
              }}
              className="tag-preview-cover"
            />
          </Link>
        </div>

        <div className="md-cell md-cell--8">
          <h2>{taginfo.title}</h2>
          <p> {taginfo.excerpt}</p>
          <p> added: {taginfo.date}</p>
        </div>
      </div>
    )
  }
}

export default TagPreview
