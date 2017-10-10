webpackJsonp([0xd2a57dc1d883], {
  165: function(e, o, t) {
    'use strict'
    function n(e, o, t) {
      var n = a.map(function(t) {
        if (t.plugin[e]) {
          var n = t.plugin[e](o, t.options)
          return n
        }
      })
      return (
        (n = n.filter(function(e) {
          return typeof e !== 'undefined'
        })),
        n.length > 0 ? n : t ? [t] : []
      )
    }
    function r(e, o, t) {
      return a.reduce(function(t, n) {
        return n.plugin[e]
          ? t.then(function() {
              return n.plugin[e](o, n.options)
            })
          : t
      }, Promise.resolve())
    }
    (o.__esModule = !0), (o.apiRunner = n), (o.apiRunnerAsync = r)
    var a = [
      { plugin: t(261), options: { plugins: [] } },
      { plugin: t(262), options: { plugins: [], color: '#00695C' } },
      { plugin: t(263), options: { plugins: [] } }
    ]
  },
  166: function(e, o, t) {
    'use strict'
    var n;
    (o.components = {
      'component---src-components-modal-template-modal-template-js': t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=component---src-components-modal-template-modal-template-js!/Users/nicolutz/Dev/gastby_portfolio/portfolio/src/components/ModalTemplate/ModalTemplate.js"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      ),
      'component---src-components-tag-template-tag-template-jsx': t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=component---src-components-tag-template-tag-template-jsx!/Users/nicolutz/Dev/gastby_portfolio/portfolio/src/components/TagTemplate/TagTemplate.jsx"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      ),
      'component---src-pages-404-js': t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=component---src-pages-404-js!/Users/nicolutz/Dev/gastby_portfolio/portfolio/src/pages/404.js"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      ),
      'component---src-pages-about-js': t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=component---src-pages-about-js!/Users/nicolutz/Dev/gastby_portfolio/portfolio/src/pages/about.js"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      ),
      'component---src-pages-index-js': t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=component---src-pages-index-js!/Users/nicolutz/Dev/gastby_portfolio/portfolio/src/pages/index.js"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )
    }),
      (o.json = ((n = {
        'layout-index.json': t(
          !(function() {
            var e = new Error(
              'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
            )
            throw ((e.code = 'MODULE_NOT_FOUND'), e)
          })()
        ),
        'cellcounter.json': t(
          !(function() {
            var e = new Error(
              'Cannot find module "gatsby-module-loader?name=path---cellcounter!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/cellcounter.json"'
            )
            throw ((e.code = 'MODULE_NOT_FOUND'), e)
          })()
        )
      }),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['iotelevator.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---iotelevator!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/iotelevator.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['iotproto.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---iotproto!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/iotproto.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['motorlearning.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---motorlearning!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/motorlearning.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['pommesindex.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---pommesindex!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/pommesindex.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['sealioncounter.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---sealioncounter!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/sealioncounter.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['tags-programming.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---tags-programming!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/tags-programming.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['tags-deep-learning.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---tags-deep-learning!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/tags-deep-learning.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['tags-machine-learning.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---tags-machine-learning!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/tags-machine-learning.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['tags-front-end.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---tags-front-end!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/tags-front-end.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['tags-embedded.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---tags-embedded!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/tags-embedded.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['tags-iot.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---tags-iot!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/tags-iot.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['tags-virtual-reality.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---tags-virtual-reality!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/tags-virtual-reality.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['tags-scientific-programming.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---tags-scientific-programming!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/tags-scientific-programming.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['tags-bachelor-thesis.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---tags-bachelor-thesis!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/tags-bachelor-thesis.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['tags-back-end.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---tags-back-end!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/tags-back-end.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['404.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---404!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/404.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['about.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---about!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/about.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---index!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['layout-index.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/layout-index.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      (n['404-html.json'] = t(
        !(function() {
          var e = new Error(
            'Cannot find module "gatsby-module-loader?name=path---404-html!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/json/404-html.json"'
          )
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })()
      )),
      n)),
      (o.layouts = {
        'component---src-layouts-index-js': t(
          !(function() {
            var e = new Error(
              'Cannot find module "gatsby-module-loader?name=component---src-layouts-index-js!/Users/nicolutz/Dev/gastby_portfolio/portfolio/.cache/layouts/index.js"'
            )
            throw ((e.code = 'MODULE_NOT_FOUND'), e)
          })()
        )
      })
  },
  167: function(e, o, t) {
    'use strict'
    function n(e) {
      return e && e.__esModule ? e : { default: e }
    }
    function r(e, o) {
      if (!(e instanceof o)) { throw new TypeError('Cannot call a class as a function') }
    }
    function a(e, o) {
      if (!e) {
throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
}
      return !o || (typeof o !== 'object' && typeof o !== 'function') ? e : o
    }
    function s(e, o) {
      if (typeof o !== 'function' && o !== null) {
 throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof o
        )
}
      (e.prototype = Object.create(o && o.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        o &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, o)
            : (e.__proto__ = o))
    }
    o.__esModule = !0
    var i =
        Object.assign ||
        function(e) {
          for (var o = 1; o < arguments.length; o++) {
            var t = arguments[o]
            for (var n in t) { Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) }
          }
          return e
        },
      u = t(6),
      c = n(u),
      l = t(7),
      p = n(l),
      d = t(104),
      m = n(d),
      f = t(45),
      h = n(f),
      g = function(e) {
        var o = e.children
        return c.default.createElement('div', null, o())
      },
      y = (function(e) {
        function o(t) {
          r(this, o)
          var n = a(this, e.call(this))
          return (
            (n.state = {
              location: t.location,
              pageResources: m.default.getResourcesForPathname(
                t.location.pathname
              )
            }),
            n
          )
        }
        return (
          s(o, e),
          (o.prototype.componentWillReceiveProps = function(e) {
            var o = this
            if (this.state.location.pathname !== e.location.pathname) {
              var t = m.default.getResourcesForPathname(e.location.pathname)
              t
                ? this.setState({ location: e.location, pageResources: t })
                : m.default.getResourcesForPathname(
                    e.location.pathname,
                    function(t) {
                      o.setState({ location: e.location, pageResources: t })
                    }
                  )
            }
          }),
          (o.prototype.componentDidMount = function() {
            var e = this
            h.default.on('onPostLoadPageResources', function(o) {
              o.page.path ===
                m.default.getPage(e.state.location.pathname).path &&
                e.setState({ pageResources: o.pageResources })
            })
          }),
          (o.prototype.shouldComponentUpdate = function(e, o) {
            return (
              !o.pageResources ||
              (!(this.state.pageResources || !o.pageResources) ||
                (this.state.pageResources.component !==
                  o.pageResources.component ||
                  (this.state.pageResources.json !== o.pageResources.json ||
                    !(
                      this.state.location.key === o.location.key ||
                      !o.pageResources.page ||
                      (!o.pageResources.page.matchPath &&
                        !o.pageResources.page.path)
                    ))))
            )
          }),
          (o.prototype.render = function() {
            return this.props.page
              ? this.state.pageResources
                ? (0, u.createElement)(
                    this.state.pageResources.component,
                    i(
                      { key: this.props.location.pathname },
                      this.props,
                      this.state.pageResources.json
                    )
                  )
                : null
              : this.props.layout
                ? (0, u.createElement)(
                    this.state.pageResources && this.state.pageResources.layout
                      ? this.state.pageResources.layout
                      : g,
                    i(
                      {
                        key:
                          this.state.pageResources &&
                          this.state.pageResources.layout
                            ? this.state.pageResources.layout
                            : 'DefaultLayout'
                      },
                      this.props
                    )
                  )
                : null
          }),
          o
        )
      })(c.default.Component);
    (y.propTypes = {
      page: p.default.bool,
      layout: p.default.bool,
      location: p.default.object
    }),
      (o.default = y),
      (e.exports = o.default)
  },
  45: function(e, o, t) {
    'use strict'
    function n(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var r = t(273),
      a = n(r),
      s = (0, a.default)()
    e.exports = s
  },
  168: function(e, o, t) {
    'use strict'
    var n = t(61),
      r = {}
    e.exports = function(e) {
      var o =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ''
      return function(t) {
        var a = decodeURIComponent(t),
          s = a.slice(o.length)
        if (
          (s.split('#').length > 1 &&
            (s = s
              .split('#')
              .slice(0, -1)
              .join('')),
          s.split('?').length > 1 &&
            (s = s
              .split('?')
              .slice(0, -1)
              .join('')),
          r[s])
        ) { return r[s] }
        var i = void 0
        return (
          e.some(function(e) {
            if (e.matchPath) {
              if (
                (0, n.matchPath)(s, { path: e.path }) ||
                (0, n.matchPath)(s, { path: e.matchPath })
              ) { return (i = e), (r[s] = e), !0 }
            } else {
              if ((0, n.matchPath)(s, { path: e.path, exact: !0 })) { return (i = e), (r[s] = e), !0 }
              if ((0, n.matchPath)(s, { path: e.path + 'index.html' })) { return (i = e), (r[s] = e), !0 }
            }
            return !1
          }),
          i
        )
      }
    }
  },
  104: function(e, o, t) {
    (function(o) {
      'use strict'
      function n(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var r = t(6),
        a = (n(r), t(168)),
        s = n(a),
        i = t(45),
        u = n(i),
        c = void 0,
        l = {},
        p = {},
        d = {},
        m = {},
        f = {},
        h = [],
        g = [],
        y = {},
        v = [],
        j = {},
        _ = function(e) {
          return (e && e.default) || e
        },
        N = void 0,
        b = !0;
      (N = t(169)({
        getNextQueuedResources: function() {
          return v.slice(-1)[0]
        },
        createResourceDownload: function(e) {
          w(e, function() {
            (v = v.filter(function(o) {
              return o !== e
            })),
              N.onResourcedFinished(e)
          })
        }
      })),
        u.default.on('onPreLoadPageResources', function(e) {
          N.onPreLoadPageResources(e)
        }),
        u.default.on('onPostLoadPageResources', function(e) {
          N.onPostLoadPageResources(e)
        })
      var E = function(e, o) {
          return j[e] > j[o] ? 1 : j[e] < j[o] ? -1 : 0
        },
        O = function(e, o) {
          return y[e] > y[o] ? 1 : y[e] < y[o] ? -1 : 0
        },
        w = function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function() {}
          if (m[e]) {
 o.nextTick(function() {
              t(null, m[e])
            })
} else {
            var n =
              e.slice(0, 12) === 'component---'
                ? p.components[e] || p.layouts[e]
                : p.json[e]
            n(function(o, n) {
              (m[e] = n), t(o, n)
            })
          }
        },
        D = function(e, t) {
          f[e]
            ? o.nextTick(function() {
                t(null, f[e])
              })
            : w(e, function(o, n) {
                if (o) t(o)
                else {
                  var r = _(n());
                  (f[e] = r), t(o, r)
                }
              })
        },
        x = 1,
        C = {
          empty: function() {
            (g = []), (y = {}), (j = {}), (v = []), (h = [])
          },
          addPagesArray: function(e) {
            h = e
            var o = '';
            (o = '/portfolio'), (c = (0, s.default)(e, o))
          },
          addDevRequires: function(e) {
            l = e
          },
          addProdRequires: function(e) {
            p = e
          },
          dequeue: function(e) {
            return g.pop()
          },
          enqueue: function(e) {
            if (
              !h.some(function(o) {
                return o.path === e
              })
            ) { return !1 }
            var o = 1 / x;
            (x += 1),
              y[e] ? (y[e] += 1) : (y[e] = 1),
              C.has(e) || g.unshift(e),
              g.sort(O)
            var t = c(e)
            return (
              t.jsonName &&
                (j[t.jsonName]
                  ? (j[t.jsonName] += 1 + o)
                  : (j[t.jsonName] = 1 + o),
                v.indexOf(t.jsonName) !== -1 ||
                  m[t.jsonName] ||
                  v.unshift(t.jsonName)),
              t.componentChunkName &&
                (j[t.componentChunkName]
                  ? (j[t.componentChunkName] += 1 + o)
                  : (j[t.componentChunkName] = 1 + o),
                v.indexOf(t.componentChunkName) !== -1 ||
                  m[t.jsonName] ||
                  v.unshift(t.componentChunkName)),
              v.sort(E),
              N.onNewResourcesAdded(),
              !0
            )
          },
          getResources: function() {
            return { resourcesArray: v, resourcesCount: j }
          },
          getPages: function() {
            return { pathArray: g, pathCount: y }
          },
          getPage: function(e) {
            return c(e)
          },
          has: function(e) {
            return g.some(function(o) {
              return o === e
            })
          },
          getResourcesForPathname: function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function() {}
            b &&
              navigator &&
              navigator.serviceWorker &&
              navigator.serviceWorker.controller &&
              navigator.serviceWorker.controller.state === 'activated' &&
              (c(e) ||
                navigator.serviceWorker.getRegistrations().then(function(e) {
                  for (
                    var o = e,
                      t = Array.isArray(o),
                      n = 0,
                      o = t ? o : o[Symbol.iterator]();
                    ;

                  ) {
                    var r
                    if (t) {
                      if (n >= o.length) break
                      r = o[n++]
                    } else {
                      if (((n = o.next()), n.done)) break
                      r = n.value
                    }
                    var a = r
                    a.unregister()
                  }
                  window.location.reload()
                })),
              (b = !1)
            var n = c(e)
            if (!n) { return void console.log("A page wasn't found for \"" + e + '"') }
            if (((e = n.path), d[e])) {
 return (
                o.nextTick(function() {
                  t(d[e]),
                    u.default.emit('onPostLoadPageResources', {
                      page: n,
                      pageResources: d[e]
                    })
                }),
                d[e]
              )
}
            u.default.emit('onPreLoadPageResources', { path: e })
            var r = void 0,
              a = void 0,
              s = void 0,
              i = function() {
                if (r && a && (!n.layoutComponentChunkName || s)) {
                  d[e] = { component: r, json: a, layout: s }
                  var o = { component: r, json: a, layout: s }
                  t(o),
                    u.default.emit('onPostLoadPageResources', {
                      page: n,
                      pageResources: o
                    })
                }
              }
            return (
              D(n.componentChunkName, function(e, o) {
                e &&
                  console.log(
                    'Loading the component for ' + n.path + ' failed'
                  ),
                  (r = o),
                  i()
              }),
              D(n.jsonName, function(e, o) {
                e && console.log('Loading the JSON for ' + n.path + ' failed'),
                  (a = o),
                  i()
              }),
              void (
                n.layoutComponentChunkName &&
                D(n.layoutComponentChunkName, function(e, o) {
                  e &&
                    console.log('Loading the Layout for ' + n.path + ' failed'),
                    (s = o),
                    i()
                })
              )
            )
          },
          peek: function(e) {
            return g.slice(-1)[0]
          },
          length: function() {
            return g.length
          },
          indexOf: function(e) {
            return g.length - g.indexOf(e) - 1
          }
        }
      e.exports = C
    }.call(o, t(84)))
  },
  271: function(e, o) {
    e.exports = [
      {
        componentChunkName:
          'component---src-components-modal-template-modal-template-js',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'cellcounter.json',
        path: '/cellcounter'
      },
      {
        componentChunkName:
          'component---src-components-modal-template-modal-template-js',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'iotelevator.json',
        path: '/iotelevator'
      },
      {
        componentChunkName:
          'component---src-components-modal-template-modal-template-js',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'iotproto.json',
        path: '/iotproto'
      },
      {
        componentChunkName:
          'component---src-components-modal-template-modal-template-js',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'motorlearning.json',
        path: '/motorlearning'
      },
      {
        componentChunkName:
          'component---src-components-modal-template-modal-template-js',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'pommesindex.json',
        path: '/pommesindex'
      },
      {
        componentChunkName:
          'component---src-components-modal-template-modal-template-js',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'sealioncounter.json',
        path: '/sealioncounter'
      },
      {
        componentChunkName:
          'component---src-components-tag-template-tag-template-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'tags-programming.json',
        path: '/tags/programming/'
      },
      {
        componentChunkName:
          'component---src-components-tag-template-tag-template-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'tags-deep-learning.json',
        path: '/tags/deep-learning/'
      },
      {
        componentChunkName:
          'component---src-components-tag-template-tag-template-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'tags-machine-learning.json',
        path: '/tags/machine-learning/'
      },
      {
        componentChunkName:
          'component---src-components-tag-template-tag-template-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'tags-front-end.json',
        path: '/tags/front-end/'
      },
      {
        componentChunkName:
          'component---src-components-tag-template-tag-template-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'tags-embedded.json',
        path: '/tags/embedded/'
      },
      {
        componentChunkName:
          'component---src-components-tag-template-tag-template-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'tags-iot.json',
        path: '/tags/iot/'
      },
      {
        componentChunkName:
          'component---src-components-tag-template-tag-template-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'tags-virtual-reality.json',
        path: '/tags/virtual-reality/'
      },
      {
        componentChunkName:
          'component---src-components-tag-template-tag-template-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'tags-scientific-programming.json',
        path: '/tags/scientific-programming/'
      },
      {
        componentChunkName:
          'component---src-components-tag-template-tag-template-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'tags-bachelor-thesis.json',
        path: '/tags/bachelor-thesis/'
      },
      {
        componentChunkName:
          'component---src-components-tag-template-tag-template-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'tags-back-end.json',
        path: '/tags/back-end/'
      },
      {
        componentChunkName: 'component---src-pages-404-js',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: '404.json',
        path: '/404'
      },
      {
        componentChunkName: 'component---src-pages-about-js',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'about.json',
        path: '/about'
      },
      {
        componentChunkName: 'component---src-pages-index-js',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'index.json',
        path: '/'
      },
      {
        componentChunkName: 'component---src-pages-404-js',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: '404-html.json',
        path: '/404.html'
      }
    ]
  },
  169: function(e, o) {
    'use strict'
    e.exports = function(e) {
      var o = e.getNextQueuedResources,
        t = e.createResourceDownload,
        n = [],
        r = [],
        a = function() {
          var e = o()
          e && (r.push(e), t(e))
        },
        s = function(e) {
          switch (e.type) {
            case 'RESOURCE_FINISHED':
              r = r.filter(function(o) {
                return o !== e.payload
              })
              break
            case 'ON_PRE_LOAD_PAGE_RESOURCES':
              n.push(e.payload.path)
              break
            case 'ON_POST_LOAD_PAGE_RESOURCES':
              n = n.filter(function(o) {
                return o !== e.payload.page.path
              })
              break
            case 'ON_NEW_RESOURCES_ADDED':
          }
          setTimeout(function() {
            r.length === 0 && n.length === 0 && a()
          }, 0)
        }
      return {
        onResourcedFinished: function(e) {
          s({ type: 'RESOURCE_FINISHED', payload: e })
        },
        onPreLoadPageResources: function(e) {
          s({ type: 'ON_PRE_LOAD_PAGE_RESOURCES', payload: e })
        },
        onPostLoadPageResources: function(e) {
          s({ type: 'ON_POST_LOAD_PAGE_RESOURCES', payload: e })
        },
        onNewResourcesAdded: function() {
          s({ type: 'ON_NEW_RESOURCES_ADDED' })
        },
        getState: function() {
          return { pagesLoading: n, resourcesDownloading: r }
        },
        empty: function() {
          (n = []), (r = [])
        }
      }
    }
  },
  0: function(e, o, t) {
    'use strict'
    function n(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var r =
        Object.assign ||
        function(e) {
          for (var o = 1; o < arguments.length; o++) {
            var t = arguments[o]
            for (var n in t) { Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) }
          }
          return e
        },
      a = t(165),
      s = t(6),
      i = n(s),
      u = t(135),
      c = n(u),
      l = t(61),
      p = t(267),
      d = t(82),
      m = n(d),
      f = t(246),
      h = n(f),
      g = t(45),
      y = n(g),
      v = t(271),
      j = n(v),
      _ = t(272),
      N = n(_),
      b = t(167),
      E = n(b),
      O = t(166),
      w = n(O),
      D = t(104),
      x = n(D)
    t(239),
      (window.___emitter = y.default),
      x.default.addPagesArray(j.default),
      x.default.addProdRequires(w.default),
      (window.asyncRequires = w.default),
      (window.___loader = x.default),
      (window.matchPath = l.matchPath)
    var C = (0, m.default)(),
      U = N.default.reduce(function(e, o) {
        return (e[o.fromPath] = o), e
      }, {}),
      R = function(e) {
        var o = U[e]
        return o != null && (C.replace(o.toPath), !0)
      }
    R(window.location.pathname),
      (0, a.apiRunnerAsync)('onClientEntry').then(function() {
        function e(e) {
          window.___history ||
            ((window.___history = e),
            e.listen(function(e, o) {
              R(e.pathname) ||
                (0, a.apiRunner)('onRouteUpdate', { location: e, action: o })
            }))
        }
        function o(e, o) {
          var t = o.location.pathname,
            n = (0, a.apiRunner)('shouldUpdateScroll', {
              prevRouterProps: e,
              pathname: t
            })
          if (n.length > 0) return n[0]
          if (e) {
            var r = e.location.pathname
            if (r === t) return !1
          }
          return !0
        }
        (0, a.apiRunner)('registerServiceWorker').length > 0 && t(170)
        var n = function(e) {
          function o(t) {
            t.page.path === x.default.getPage(e).path &&
              (y.default.off('onPostLoadPageResources', o),
              clearTimeout(n),
              window.___history.push(e))
          }
          var t = U[e]
          if ((t && (e = t.toPath), window.location.pathname !== e)) {
            var n = setTimeout(function() {
              y.default.off('onPostLoadPageResources', o),
                y.default.emit('onDelayedLoadPageResources', { pathname: e }),
                window.___history.push(e)
            }, 1e3)
            x.default.getResourcesForPathname(e)
              ? (clearTimeout(n), window.___history.push(e))
              : y.default.on('onPostLoadPageResources', o)
          }
        };
        (window.___navigateTo = n),
          (0, a.apiRunner)('onRouteUpdate', {
            location: C.location,
            action: C.action
          })
        var u = (0, a.apiRunner)('replaceRouterComponent', { history: C })[0],
          d = function(e) {
            var o = e.children
            return i.default.createElement(l.Router, { history: C }, o)
          }
        x.default.getResourcesForPathname(window.location.pathname, function() {
          var t = function() {
              return (0, s.createElement)(
                u || d,
                null,
                (0, s.createElement)(
                  p.ScrollContext,
                  { shouldUpdateScroll: o },
                  (0, s.createElement)((0, l.withRouter)(E.default), {
                    layout: !0,
                    children: function(o) {
                      return (0, s.createElement)(l.Route, {
                        render: function(t) {
                          e(t.history)
                          var n = o || t
                          return x.default.getPage(n.location.pathname)
                            ? (0, s.createElement)(
                                E.default,
                                r({ page: !0 }, n)
                              )
                            : (0, s.createElement)(E.default, {
                                location: { page: !0, pathname: '/404.html' }
                              })
                        }
                      })
                    }
                  })
                )
              )
            },
            n = (0, a.apiRunner)('wrapRootComponent', { Root: t }, t)[0];
          (0, h.default)(function() {
            return c.default.render(
              i.default.createElement(n, null),
              typeof window !== 'undefined'
                ? document.getElementById('___gatsby')
                : void 0,
              function() {
                (0, a.apiRunner)('onInitialClientRender')
              }
            )
          })
        })
      })
  },
  272: function(e, o) {
    e.exports = []
  },
  170: function(e, o, t) {
    'use strict'
    function n(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var r = t(45),
      a = n(r),
      s = '/';
    (s = '/portfolio/'),
      'serviceWorker' in navigator &&
        navigator.serviceWorker
          .register(s + 'sw.js')
          .then(function(e) {
            e.addEventListener('updatefound', function() {
              var o = e.installing
              console.log('installingWorker', o),
                o.addEventListener('statechange', function() {
                  switch (o.state) {
                    case 'installed':
                      navigator.serviceWorker.controller
                        ? window.location.reload()
                        : (console.log('Content is now available offline!'),
                          a.default.emit('sw:installed'))
                      break
                    case 'redundant':
                      console.error(
                        'The installing service worker became redundant.'
                      )
                  }
                })
            })
          })
          .catch(function(e) {
            console.error('Error during service worker registration:', e)
          })
  },
  240: function(e, o, t) {
    'use strict'
    function n(e) {
      return e
    }
    function r(e, o, t) {
      function r(e, o) {
        var t = v.hasOwnProperty(o) ? v[o] : null
        b.hasOwnProperty(o) &&
          u(
            t === 'OVERRIDE_BASE',
            'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.',
            o
          ),
          e &&
            u(
              t === 'DEFINE_MANY' || t === 'DEFINE_MANY_MERGED',
              'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
              o
            )
      }
      function a(e, t) {
        if (t) {
          u(
            typeof t !== 'function',
            "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."
          ),
            u(
              !o(t),
              "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."
            )
          var n = e.prototype,
            a = n.__reactAutoBindPairs
          t.hasOwnProperty(c) && j.mixins(e, t.mixins)
          for (var s in t) {
 if (t.hasOwnProperty(s) && s !== c) {
              var i = t[s],
                l = n.hasOwnProperty(s)
              if ((r(l, s), j.hasOwnProperty(s))) j[s](e, i)
              else {
                var p = v.hasOwnProperty(s),
                  f = typeof i === 'function',
                  h = f && !p && !l && t.autobind !== !1
                if (h) a.push(s, i), (n[s] = i)
                else if (l) {
                  var g = v[s]
                  u(
                    p && (g === 'DEFINE_MANY_MERGED' || g === 'DEFINE_MANY'),
                    'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.',
                    g,
                    s
                  ),
                    g === 'DEFINE_MANY_MERGED'
                      ? (n[s] = d(n[s], i))
                      : g === 'DEFINE_MANY' && (n[s] = m(n[s], i))
                } else n[s] = i
              }
            }
}
        } else;
      }
      function l(e, o) {
        if (o) {
 for (var t in o) {
            var n = o[t]
            if (o.hasOwnProperty(t)) {
              var r = t in j
              u(
                !r,
                'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
                t
              )
              var a = t in e
              u(
                !a,
                'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
                t
              ),
                (e[t] = n)
            }
          }
}
      }
      function p(e, o) {
        u(
          e && o && typeof e === 'object' && typeof o === 'object',
          'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
        )
        for (var t in o) {
 o.hasOwnProperty(t) &&
            (u(
              void 0 === e[t],
              'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.',
              t
            ),
            (e[t] = o[t]))
}
        return e
      }
      function d(e, o) {
        return function() {
          var t = e.apply(this, arguments),
            n = o.apply(this, arguments)
          if (t == null) return n
          if (n == null) return t
          var r = {}
          return p(r, t), p(r, n), r
        }
      }
      function m(e, o) {
        return function() {
          e.apply(this, arguments), o.apply(this, arguments)
        }
      }
      function f(e, o) {
        var t = o.bind(e)
        return t
      }
      function h(e) {
        for (var o = e.__reactAutoBindPairs, t = 0; t < o.length; t += 2) {
          var n = o[t],
            r = o[t + 1]
          e[n] = f(e, r)
        }
      }
      function g(e) {
        var o = n(function(e, n, r) {
          this.__reactAutoBindPairs.length && h(this),
            (this.props = e),
            (this.context = n),
            (this.refs = i),
            (this.updater = r || t),
            (this.state = null)
          var a = this.getInitialState ? this.getInitialState() : null
          u(
            typeof a === 'object' && !Array.isArray(a),
            '%s.getInitialState(): must return an object or null',
            o.displayName || 'ReactCompositeComponent'
          ),
            (this.state = a)
        });
        (o.prototype = new E()),
          (o.prototype.constructor = o),
          (o.prototype.__reactAutoBindPairs = []),
          y.forEach(a.bind(null, o)),
          a(o, _),
          a(o, e),
          a(o, N),
          o.getDefaultProps && (o.defaultProps = o.getDefaultProps()),
          u(
            o.prototype.render,
            'createClass(...): Class specification must implement a `render` method.'
          )
        for (var r in v) o.prototype[r] || (o.prototype[r] = null)
        return o
      }
      var y = [],
        v = {
          mixins: 'DEFINE_MANY',
          statics: 'DEFINE_MANY',
          propTypes: 'DEFINE_MANY',
          contextTypes: 'DEFINE_MANY',
          childContextTypes: 'DEFINE_MANY',
          getDefaultProps: 'DEFINE_MANY_MERGED',
          getInitialState: 'DEFINE_MANY_MERGED',
          getChildContext: 'DEFINE_MANY_MERGED',
          render: 'DEFINE_ONCE',
          componentWillMount: 'DEFINE_MANY',
          componentDidMount: 'DEFINE_MANY',
          componentWillReceiveProps: 'DEFINE_MANY',
          shouldComponentUpdate: 'DEFINE_ONCE',
          componentWillUpdate: 'DEFINE_MANY',
          componentDidUpdate: 'DEFINE_MANY',
          componentWillUnmount: 'DEFINE_MANY',
          updateComponent: 'OVERRIDE_BASE'
        },
        j = {
          displayName: function(e, o) {
            e.displayName = o
          },
          mixins: function(e, o) {
            if (o) for (var t = 0; t < o.length; t++) a(e, o[t])
          },
          childContextTypes: function(e, o) {
            e.childContextTypes = s({}, e.childContextTypes, o)
          },
          contextTypes: function(e, o) {
            e.contextTypes = s({}, e.contextTypes, o)
          },
          getDefaultProps: function(e, o) {
            e.getDefaultProps
              ? (e.getDefaultProps = d(e.getDefaultProps, o))
              : (e.getDefaultProps = o)
          },
          propTypes: function(e, o) {
            e.propTypes = s({}, e.propTypes, o)
          },
          statics: function(e, o) {
            l(e, o)
          },
          autobind: function() {}
        },
        _ = {
          componentDidMount: function() {
            this.__isMounted = !0
          }
        },
        N = {
          componentWillUnmount: function() {
            this.__isMounted = !1
          }
        },
        b = {
          replaceState: function(e, o) {
            this.updater.enqueueReplaceState(this, e, o)
          },
          isMounted: function() {
            return !!this.__isMounted
          }
        },
        E = function() {}
      return s(E.prototype, e.prototype, b), g
    }
    var a,
      s = t(4),
      i = t(54),
      u = t(1),
      c = 'mixins';
    (a = {}), (e.exports = r)
  },
  246: function(e, o, t) {
    !(function(o, t) {
      e.exports = t()
    })('domready', function() {
      var e,
        o = [],
        t = document,
        n = t.documentElement.doScroll,
        r = 'DOMContentLoaded',
        a = (n ? /^loaded|^c/ : /^loaded|^i|^c/).test(t.readyState)
      return (
        a ||
          t.addEventListener(
            r,
            (e = function() {
              for (t.removeEventListener(r, e), a = 1; (e = o.shift());) e()
            })
          ),
        function(e) {
          a ? setTimeout(e, 0) : o.push(e)
        }
      )
    })
  },
  260: function(e, o) {
    'use strict'
    e.exports = function(e, o) {
      e.addEventListener('click', function(e) {
        if (
          e.button !== 0 ||
          e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.defaultPrevented
        ) { return !0 }
        for (var t = null, n = e.target; n.parentNode; n = n.parentNode) {
if (n.nodeName === 'A') {
            t = n
            break
          }
}
        if (!t) return !0
        if (t.target && t.target.toLowerCase() !== '_self') return !0
        if (t.pathname === window.location.pathname && t.target.hash !== '') { return !0 }
        if (t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i) !== -1) { return !0 }
        var r = document.createElement('a')
        r.href = t.href
        var a = document.createElement('a')
        return (
          (a.href = window.location.href),
          r.host !== a.host ||
            (e.preventDefault(), o(t.getAttribute('href')), !1)
        )
      })
    }
  },
  261: function(e, o, t) {
    'use strict'
    function n(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var r = t(259),
      a = t(260),
      s = n(a);
    (0, s.default)(window, function(e) {
      (0, r.navigateTo)(e)
    })
  },
  262: function(e, o, t) {
    'use strict'
    function n(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var r = t(274),
      a = n(r)
    o.onClientEntry = function(e) {
      var o =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { color: '#29d' }
      window.___emitter.on('onDelayedLoadPageResources', function() {
        a.default.configure(o), a.default.start()
      }),
        window.___emitter.on('onPostLoadPageResources', function() {
          a.default.done()
        })
      var t =
          '#nprogress {\n    pointer-events: none;\n}\n#nprogress .bar {\n    background: ' +
          o.color +
          ';\n    position: fixed;\n    z-index: 1031;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 2px;\n}\n#nprogress .peg {\n    display: block;\n    position: absolute;\n    right: 0px;\n    width: 100px;\n    height: 100%;\n    box-shadow: 0 0 10px ' +
          o.color +
          ', 0 0 5px ' +
          o.color +
          ';\n    opacity: 1.0;\n    -webkit-transform: rotate(3deg) translate(0px, -4px);\n    -ms-transform: rotate(3deg) translate(0px, -4px);\n    transform: rotate(3deg) translate(0px, -4px);\n}\n#nprogress .spinner {\n    display: block;\n    position: fixed;\n    z-index: 1031;\n    top: 15px;\n    right: 15px;\n}\n#nprogress .spinner-icon {\n    width: 18px;\n    height: 18px;\n    box-sizing: border-box;\n    border: solid 2px transparent;\n    border-top-color: ' +
          o.color +
          ';\n    border-left-color: ' +
          o.color +
          ';\n    border-radius: 50%;\n    -webkit-animation: nprogress-spinner 400ms linear infinite;\n    animation: nprogress-spinner 400ms linear infinite;\n}\n.nprogress-custom-parent {\n    overflow: hidden;\n    position: relative;\n}\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n    position: absolute;\n}\n@-webkit-keyframes nprogress-spinner {\n    0% {\n        -webkit-transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n    }\n}\n@keyframes nprogress-spinner {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n',
        n = document.createElement('style');
      (n.id = 'nprogress-styles'),
        (n.innerHTML = t),
        document.head.appendChild(n)
    }
  },
  263: function(e, o, t) {
    'use strict'
    var n = function(e) {
      setTimeout(function() {
        var o = window.location.hash.replace('#', '')
        if (o !== '') {
          var t = document.getElementById(o)
          if (t) {
            var n = t.offsetTop
            window.scrollTo(0, n - e)
          }
        }
      }, 10)
    };
    (o.onClientEntry = function(e, o) {
      var t = 0
      o.offsetY && (t = o.offsetY)
    }),
      (o.onRouteUpdate = function(e, o) {
        var t = 0
        o.offsetY && (t = o.offsetY), n(t)
      })
  },
  269: function(e, o) {
    'use strict'
    var t = {
        childContextTypes: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
      },
      n = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
      },
      r = Object.defineProperty,
      a = Object.getOwnPropertyNames,
      s = Object.getOwnPropertySymbols,
      i = Object.getOwnPropertyDescriptor,
      u = Object.getPrototypeOf,
      c = u && u(Object)
    e.exports = function e(o, l, p) {
      if (typeof l !== 'string') {
        if (c) {
          var d = u(l)
          d && d !== c && e(o, d, p)
        }
        var m = a(l)
        s && (m = m.concat(s(l)))
        for (var f = 0; f < m.length; ++f) {
          var h = m[f]
          if (!(t[h] || n[h] || (p && p[h]))) {
            var g = i(l, h)
            try {
              r(o, h, g)
            } catch (e) {}
          }
        }
        return o
      }
      return o
    }
  },
  273: function(e, o) {
    function t(e) {
      return (
        (e = e || Object.create(null)),
        {
          on: function(o, t) {
            (e[o] || (e[o] = [])).push(t)
          },
          off: function(o, t) {
            e[o] && e[o].splice(e[o].indexOf(t) >>> 0, 1)
          },
          emit: function(o, t) {
            (e[o] || []).map(function(e) {
              e(t)
            }),
              (e['*'] || []).map(function(e) {
                e(o, t)
              })
          }
        }
      )
    }
    e.exports = t
  },
  274: function(e, o, t) {
    var n, r
    !(function(a, s) {
      (n = s),
        (r = typeof n === 'function' ? n.call(o, t, o, e) : n),
        !(void 0 !== r && (e.exports = r))
    })(this, function() {
      function e(e, o, t) {
        return e < o ? o : e > t ? t : e
      }
      function o(e) {
        return 100 * (-1 + e)
      }
      function t(e, t, n) {
        var r
        return (
          (r =
            c.positionUsing === 'translate3d'
              ? { transform: 'translate3d(' + o(e) + '%,0,0)' }
              : c.positionUsing === 'translate'
                ? { transform: 'translate(' + o(e) + '%,0)' }
                : { 'margin-left': o(e) + '%' }),
          (r.transition = 'all ' + t + 'ms ' + n),
          r
        )
      }
      function n(e, o) {
        var t = typeof e === 'string' ? e : s(e)
        return t.indexOf(' ' + o + ' ') >= 0
      }
      function r(e, o) {
        var t = s(e),
          r = t + o
        n(t, o) || (e.className = r.substring(1))
      }
      function a(e, o) {
        var t,
          r = s(e)
        n(e, o) &&
          ((t = r.replace(' ' + o + ' ', ' ')),
          (e.className = t.substring(1, t.length - 1)))
      }
      function s(e) {
        return (' ' + (e.className || '') + ' ').replace(/\s+/gi, ' ')
      }
      function i(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
      }
      var u = {}
      u.version = '0.2.0'
      var c = (u.settings = {
        minimum: 0.08,
        easing: 'ease',
        positionUsing: '',
        speed: 200,
        trickle: !0,
        trickleRate: 0.02,
        trickleSpeed: 800,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: 'body',
        template:
          '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
      });
      (u.configure = function(e) {
        var o, t
        for (o in e) { (t = e[o]), void 0 !== t && e.hasOwnProperty(o) && (c[o] = t) }
        return this
      }),
        (u.status = null),
        (u.set = function(o) {
          var n = u.isStarted();
          (o = e(o, c.minimum, 1)), (u.status = o === 1 ? null : o)
          var r = u.render(!n),
            a = r.querySelector(c.barSelector),
            s = c.speed,
            i = c.easing
          return (
            r.offsetWidth,
            l(function(e) {
              c.positionUsing === '' &&
                (c.positionUsing = u.getPositioningCSS()),
                p(a, t(o, s, i)),
                o === 1
                  ? (p(r, { transition: 'none', opacity: 1 }),
                    r.offsetWidth,
                    setTimeout(function() {
                      p(r, {
                        transition: 'all ' + s + 'ms linear',
                        opacity: 0
                      }),
                        setTimeout(function() {
                          u.remove(), e()
                        }, s)
                    }, s))
                  : setTimeout(e, s)
            }),
            this
          )
        }),
        (u.isStarted = function() {
          return typeof u.status === 'number'
        }),
        (u.start = function() {
          u.status || u.set(0)
          var e = function() {
            setTimeout(function() {
              u.status && (u.trickle(), e())
            }, c.trickleSpeed)
          }
          return c.trickle && e(), this
        }),
        (u.done = function(e) {
          return e || u.status ? u.inc(0.3 + 0.5 * Math.random()).set(1) : this
        }),
        (u.inc = function(o) {
          var t = u.status
          return t
            ? (typeof o !== 'number' &&
                (o = (1 - t) * e(Math.random() * t, 0.1, 0.95)),
              (t = e(t + o, 0, 0.994)),
              u.set(t))
            : u.start()
        }),
        (u.trickle = function() {
          return u.inc(Math.random() * c.trickleRate)
        }),
        (function() {
          var e = 0,
            o = 0
          u.promise = function(t) {
            return t && t.state() !== 'resolved'
              ? (o === 0 && u.start(),
                e++,
                o++,
                t.always(function() {
                  o--, o === 0 ? ((e = 0), u.done()) : u.set((e - o) / e)
                }),
                this)
              : this
          }
        })(),
        (u.render = function(e) {
          if (u.isRendered()) return document.getElementById('nprogress')
          r(document.documentElement, 'nprogress-busy')
          var t = document.createElement('div');
          (t.id = 'nprogress'), (t.innerHTML = c.template)
          var n,
            a = t.querySelector(c.barSelector),
            s = e ? '-100' : o(u.status || 0),
            l = document.querySelector(c.parent)
          return (
            p(a, {
              transition: 'all 0 linear',
              transform: 'translate3d(' + s + '%,0,0)'
            }),
            c.showSpinner ||
              ((n = t.querySelector(c.spinnerSelector)), n && i(n)),
            l != document.body && r(l, 'nprogress-custom-parent'),
            l.appendChild(t),
            t
          )
        }),
        (u.remove = function() {
          a(document.documentElement, 'nprogress-busy'),
            a(document.querySelector(c.parent), 'nprogress-custom-parent')
          var e = document.getElementById('nprogress')
          e && i(e)
        }),
        (u.isRendered = function() {
          return !!document.getElementById('nprogress')
        }),
        (u.getPositioningCSS = function() {
          var e = document.body.style,
            o =
              'WebkitTransform' in e
                ? 'Webkit'
                : 'MozTransform' in e
                  ? 'Moz'
                  : 'msTransform' in e ? 'ms' : 'OTransform' in e ? 'O' : ''
          return o + 'Perspective' in e
            ? 'translate3d'
            : o + 'Transform' in e ? 'translate' : 'margin'
        })
      var l = (function() {
          function e() {
            var t = o.shift()
            t && t(e)
          }
          var o = []
          return function(t) {
            o.push(t), o.length == 1 && e()
          }
        })(),
        p = (function() {
          function e(e) {
            return e
              .replace(/^-ms-/, 'ms-')
              .replace(/-([\da-z])/gi, function(e, o) {
                return o.toUpperCase()
              })
          }
          function o(e) {
            var o = document.body.style
            if (e in o) return e
            for (
              var t, n = r.length, a = e.charAt(0).toUpperCase() + e.slice(1);
              n--;

            ) { if (((t = r[n] + a), t in o)) return t }
            return e
          }
          function t(t) {
            return (t = e(t)), a[t] || (a[t] = o(t))
          }
          function n(e, o, n) {
            (o = t(o)), (e.style[o] = n)
          }
          var r = ['Webkit', 'O', 'Moz', 'ms'],
            a = {}
          return function(e, o) {
            var t,
              r,
              a = arguments
            if (a.length == 2) {
for (t in o) { (r = o[t]), void 0 !== r && o.hasOwnProperty(t) && n(e, t, r) }
} else n(e, a[1], a[2])
          }
        })()
      return u
    })
  },
  4: function(e, o) {
    'use strict'
    function t(e) {
      if (e === null || void 0 === e) {
 throw new TypeError(
          'Object.assign cannot be called with null or undefined'
        )
}
      return Object(e)
    }
    function n() {
      try {
        if (!Object.assign) return !1
        var e = new String('abc')
        if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) { return !1 }
        for (var o = {}, t = 0; t < 10; t++) { o['_' + String.fromCharCode(t)] = t }
        var n = Object.getOwnPropertyNames(o).map(function(e) {
          return o[e]
        })
        if (n.join('') !== '0123456789') return !1
        var r = {}
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function(e) {
            r[e] = e
          }),
          Object.keys(Object.assign({}, r)).join('') === 'abcdefghijklmnopqrst'
        )
      } catch (e) {
        return !1
      }
    }
    var r = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      s = Object.prototype.propertyIsEnumerable
    e.exports = n()
      ? Object.assign
      : function(e, o) {
          for (var n, i, u = t(e), c = 1; c < arguments.length; c++) {
            n = Object(arguments[c])
            for (var l in n) a.call(n, l) && (u[l] = n[l])
            if (r) {
              i = r(n)
              for (var p = 0; p < i.length; p++) { s.call(n, i[p]) && (u[i[p]] = n[i[p]]) }
            }
          }
          return u
        }
  },
  84: function(e, o) {
    function t() {
      throw new Error('setTimeout has not been defined')
    }
    function n() {
      throw new Error('clearTimeout has not been defined')
    }
    function r(e) {
      if (l === setTimeout) return setTimeout(e, 0)
      if ((l === t || !l) && setTimeout) { return (l = setTimeout), setTimeout(e, 0) }
      try {
        return l(e, 0)
      } catch (o) {
        try {
          return l.call(null, e, 0)
        } catch (o) {
          return l.call(this, e, 0)
        }
      }
    }
    function a(e) {
      if (p === clearTimeout) return clearTimeout(e)
      if ((p === n || !p) && clearTimeout) { return (p = clearTimeout), clearTimeout(e) }
      try {
        return p(e)
      } catch (o) {
        try {
          return p.call(null, e)
        } catch (o) {
          return p.call(this, e)
        }
      }
    }
    function s() {
      h &&
        m &&
        ((h = !1), m.length ? (f = m.concat(f)) : (g = -1), f.length && i())
    }
    function i() {
      if (!h) {
        var e = r(s)
        h = !0
        for (var o = f.length; o;) {
          for (m = f, f = []; ++g < o;) m && m[g].run();
          (g = -1), (o = f.length)
        }
        (m = null), (h = !1), a(e)
      }
    }
    function u(e, o) {
      (this.fun = e), (this.array = o)
    }
    function c() {}
    var l,
      p,
      d = (e.exports = {})
    !(function() {
      try {
        l = typeof setTimeout === 'function' ? setTimeout : t
      } catch (e) {
        l = t
      }
      try {
        p = typeof clearTimeout === 'function' ? clearTimeout : n
      } catch (e) {
        p = n
      }
    })()
    var m,
      f = [],
      h = !1,
      g = -1;
    (d.nextTick = function(e) {
      var o = new Array(arguments.length - 1)
      if (arguments.length > 1) { for (var t = 1; t < arguments.length; t++) o[t - 1] = arguments[t] }
      f.push(new u(e, o)), f.length !== 1 || h || r(i)
    }),
      (u.prototype.run = function() {
        this.fun.apply(null, this.array)
      }),
      (d.title = 'browser'),
      (d.browser = !0),
      (d.env = {}),
      (d.argv = []),
      (d.version = ''),
      (d.versions = {}),
      (d.on = c),
      (d.addListener = c),
      (d.once = c),
      (d.off = c),
      (d.removeListener = c),
      (d.removeAllListeners = c),
      (d.emit = c),
      (d.prependListener = c),
      (d.prependOnceListener = c),
      (d.listeners = function(e) {
        return []
      }),
      (d.binding = function(e) {
        throw new Error('process.binding is not supported')
      }),
      (d.cwd = function() {
        return '/'
      }),
      (d.chdir = function(e) {
        throw new Error('process.chdir is not supported')
      }),
      (d.umask = function() {
        return 0
      })
  }
})
// # sourceMappingURL=app-e614b01f832cc4a83cfa.js.map
