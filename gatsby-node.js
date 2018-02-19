const path = require('path')
const _ = require('lodash')
const webpackLodashPlugin = require('lodash-webpack-plugin')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const itemTemplate = path.resolve(
      `src/components/ModalTemplate/ModalTemplate.js`
    )
    const tagTemplate = path.resolve(
      'src/components/TagTemplate/TagTemplate.jsx'
    )

    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const tagSet = new Set()
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag)
            })
          }

          createPage({
            path: _.kebabCase(node.frontmatter.path),
            component: itemTemplate,
            context: {}
          })
        })

        const tagList = Array.from(tagSet)
        tagList.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag
            }
          })
        })
      })
    )
  })
}

/*
 * Remove trailing slashes
 * from https://github.com/DSchau/blog/blob/master/gatsby-node.js

exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators;

  return new Promise(resolve => {
    const oldPath = page.path;
    page.path = page.path === `/` ? page.path : page.path.replace(/\/$/, ``);

    if (page.path !== oldPath) {
      deletePage({ path: oldPath });
      createPage(page);
    }
    resolve();
  });
};
*/
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null)
  }

  config.loader('html-loader', { test: /\.html$/, loader: 'html' }, null)
}
