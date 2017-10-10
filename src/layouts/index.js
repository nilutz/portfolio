import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import config from '../../data/SiteConfig'
import Helmet from 'react-helmet'
import Footer from '../components/Footer/Footer'

import 'font-awesome/scss/font-awesome.scss'
import './index.scss'

const footerLinks = config.userLinks

const Header = () => (
  <div
    className="header"
    style={{
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.09rem'
      }}
    >
      <h1 style={{ margin: 0 }} className="header-container">
        <Link
          to="/"
          style={{
            textDecoration: 'none'
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            textDecoration: 'none',
            float: 'right'
          }}
        >
          About
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>{config.siteTitle} </title>
      <meta name="description" content={config.siteDescription} />
      <meta name="keywords" content={config.siteKeywords} />
    </Helmet>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
    <Footer userLinks={footerLinks} />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
