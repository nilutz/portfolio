webpackJsonp([96034285751364],{401:function(e,a){e.exports={data:{markdownRemark:{html:'<h3 id="deep-learning-on-cell-data-set"><a href="#deep-learning-on-cell-data-set" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deep Learning on Cell Data Set</h3>\n<p>This project is fork from the original "NOAA Fisheries Steller Sea Lion Population Count" Kaggle Challenge <a href="https://github.com/rdinse/sea-lion-counter">Sea Lion Counter</a>. We modified the original version which can now be used on Cell Datasets(<a href="www.robots.ox.ac.uk/%7Evgg/research/counting/cells.zip">VGG</a> and BM<em>dataset</em>MICCAI2015). The model is based on an Inception-v4 network (pre-trained on ImageNet; Szegedy et al., 2016) and Count-ception (Cohen et al., 2017).</p>\n<div class="md-grid">\n    <div class="md-cell--6 item">\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 256px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEoUlEQVQ4yw2T6VMTdxjHfzmEnBuSbO5jkyXZzSa7GzbJJptwJSQBcwgy4YhAAlgdDSCI9UgVAUdsrYIKigfSKVVHSutIa48Zx6uHU7Wddmynb/qiL9vX/RO6f8DzfD/zPUAo+ClJbtP0Nkl+aTZfVyhGBIJhAHp0+mmbbUEsbgMgDAAlk4X1+t0ikRMIDAKhWiBQCAVSEArNBIN3XK4VveE9o2mCorbM5lmL5TzmXrJaj8PassEwoFLllcpWHDulg2MAGAT8PdAAIAeRyLNweFmj2ScUDkLQAb//UUPD1ZaWH/z+TbP5oNl8BUXf1WrLABAGQ8FiqSiVBK8vEJqkUgtob78+MfFnNntXC1dFor1y2RDLfj45+W9Ly/N4fD2RuK9WZ7y+WQhKisWhurpGBKmoVM1yeb3dfhJw3Nbc3H9TU68IYk2hqABQpOlrpdLfgcByQ8O5VOqZw9FL0+v+hotyebtIRKJoj9NZgOEoBHHAai3nchup1BcMs6lS7QOg12is6PVjAPQrlF2x2GeBwE2ns2wxTzmd+wKBk7HobZI87MYmVaoQ4P0oFF51dDzluDWSXAsETmcyb2nqQq2kz2iawfFLJHkdgkbq6rLJ5Obw8K+x2AUtHPZ4+F9TgHeSYa4R3pvBwLmurpe7dv2STG7h2LrFMm+zLatUB0TiOABtsK7Q3/dTT89DhSKm0fTh+AmKOg4kkla7vegjrzY3P6xU/urs/Npk2qtQlHfU7BEJ0yy7zDBXAEir1T2NjWtu18coOo3jCyi632g8wkc139S0jeNLDsdYNrs6Nva2UHjCces+8mwgONfb+yKVelxTk9DrSx7PMYdjxOH40Omcq63NKxR5sKvzNcPM4/i4w7HEsjPV6j+53FY0uloa+i2dfkZR5zFs3Oc7m0pvZrNPvd4zUmlaKmkTi1sBaOKVN1h2gGVXCeKS1ztZLD63Woe12kI+/yQaXZZIyvzBzswbjvsqEjlHEBsIMg7DR12u82p1ia/n6VDoZiZzJxI5YjZ3Dwy8YNkFjaYrlf4Ow04BEDGZDlPkUYZZ5JPHsLlw+J7LNY0gi7DuGIjHF73eQ8XiR+XyzzheLPb/GItdhqCOSIQHOalUTOD4kXD4AcOseDxLCDLNcQ+CwSWzmd9Pnq/nJy5XR3t6aXBwDYbj0WiVIEYxbDIW2/b7102mlf7+h/n8Sxju5quu0RxCkNFS6fempttCYQZQ1H4UHQyFKoHAmcbG2dbWzVzuDU0vmkx7eJM9ntGBgT+6u79H0SrLfms0HhAK29uSjxKJb2j6MnC7D7a08mndaGmu8jwMcwLDivX1B43G3UZjub7+gs933OGcR5D3I5H7JHlNKumVyfrc7jku+hpgGI96orNzNR7fsFh6AXDKZA0EcTEUvOXGZijqslY7xKuJRO0IMkHTWxA0DAR8w2ZDoXvA6RzhuEmbPczzU+SoSORRq8Pp9CaGHZNIoiS1guM3pNI8AEmd7h0UvatU9hkM4zT9mB88gGHCZsvJ5aTdHvP7P5DLcas1mUjcslhyANA1tY0yeV4o6gBg544d3SrVkA6umowLEFSsqen7H5+4MbZBqcMZAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="VGG CellDataset dryrun"\n        title=""\n        src="/portfolio/static/cellcounter1-c743aae3d7e35d8f5f6661919b4875f2-f578f.png"\n        srcset="/portfolio/static/cellcounter1-c743aae3d7e35d8f5f6661919b4875f2-727c0.png 64w,\n/portfolio/static/cellcounter1-c743aae3d7e35d8f5f6661919b4875f2-9eccb.png 128w,\n/portfolio/static/cellcounter1-c743aae3d7e35d8f5f6661919b4875f2-f578f.png 256w"\n        sizes="(max-width: 256px) 100vw, 256px"\n      />\n    </span>\n  </span>\n  \n</div></p>\n<div class="md-cell--6 item">\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 256px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAADcklEQVQ4y02U2VMaSxjFG1CI7IICwzpsMyzDsO+XJQaImVGMhQY0oK+plIWvqUpVHu5ffn+YpOp2KdX0cr7znXMa0Wk2tXK5WqnomhaLRl0ul0UcRigUSsTjR0dHb9/EyckJKzabTfwdFotFtJvNZqORz+XYC0ciVU2LShIo+Xw+Ho8Hg8FwKOTzej1ut6ooZ2dn4v+j3zmMQCAAks/nq+l6rVqdjsd8RqPRmCRlMxkgKBQOh+OxmMfjsVqtHIaL+LhY7F9eDMM4CwZh5XS5uu32fr8fjcfTyeRiOvX5/eVSyev10sKp3y8nkxChu1QyKQa93r+/fr2+vhaLRZbgUtX1592uUa/Xq9XFbJZKpVCEObugZzKZtCzDBThBY6Zpzj58qNdqh+9C0Dn9M3G73cPBABROo0ImnQZw0O8jrZLPe32+g6qr1epysYBCRdMajYZ5eVmpVBwORyQSQSQWAfX7/RR4en4eDAaULRQK6XRasAF2qVjk2u3NzfLqanZxwZ1YLJZMJNj9bQ86P3z5cn93B/lgIMABvVIR7xyOZDKJ1ZPR6OXbt5vlMiJJED4+PkbVVqtVq9W4TOXhcIijkC+qKmUj4bDodjqj4RAkOZUyDWP//fvdatXv9crlMv6v7+/ns9mx3R46Py8WCrIsp9/+gHaj7ufra2RQVTUjy9T5+ePHtWmiyvN2+3E+hxvaAATElWGUSqV3b+NP8vpdfG3zT9vsPW42v4MFBPU5p5VKSNjt9brdLmeSqRT957LZ09NT0W61Oq2W+ekTe0Rq+/AAFhuUpSbokiRpmoaRrUZDURTa5CbmnxPV99MpBR82m93Tk6Kq6/W63+8jMoVYR7mCqsKLy0y4g6P4AuLhYRiLRTaXW8zn269fSSg3iRoViAc555Fs1uulaQaCQXjxBFKy/LTb/TMcWqxWQQZIHOSb9TpLk/H42jDQCcOQlGrbx8fPt7c4RH1ig38EAb51XRdKLscbwMPxaIQ3uEqr2WyWczjJk4I83mAkjRAHJDxxOjkz7PVEXlEwZrlcvp9MCPDh3TudpULhIE8+r+s6eYKh1WajYRpBDn4tyAVkBfYCmUgkoEoLHCNMSMA28WYF5oenKwTyQsTt8fDzwMsD6BBabpJYQkobTHjxs+mUbHPBbrc7nU4QmRMMXhIQUiRCfWL3H1JEsOiqLPHaAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="VGG CellDataset dryrun"\n        title=""\n        src="/portfolio/static/cellcounter2-93afa4ca906ddeef42ec567111c60ece-f578f.png"\n        srcset="/portfolio/static/cellcounter2-93afa4ca906ddeef42ec567111c60ece-727c0.png 64w,\n/portfolio/static/cellcounter2-93afa4ca906ddeef42ec567111c60ece-9eccb.png 128w,\n/portfolio/static/cellcounter2-93afa4ca906ddeef42ec567111c60ece-f578f.png 256w"\n        sizes="(max-width: 256px) 100vw, 256px"\n      />\n    </span>\n  </span>\n  \n</div></p>\n</div>\n<div class="md-grid">\n    <div class="md-cell--12 item">\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 256px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEeklEQVQ4yw2T6VMaBxjG98/sMU07bZpmckw1sWlIYtSYeKCCymBA7vsGWY6VhYVlBRZhOZbDBZFD7puVwzSZfOjOPPN+fOad328eQPHWSCJ5wpmuJG+TAcrAdnUr/cmQ7rSHVbLuZMOmNVDDMiMcf1mToRTJkpKkxPG8PBnmY4B9F0I5KLwNB6Vhwk1GPWSnORz3Js1yt9ca2YU+xXur69CHi/GSJn2tJW902YIqXZSlriVJwM3xQgc+ZNsHcxHhssbABhvlzqBLN8rd22Jb9sage23WrdnU78zGNbv/KEAZyYopfyUlkgIcuMk2WtV+ypbWvTRuPuAd/CGMechWfdCq9XN+KgamL1QRyyp4/Ehq34H0LGuYi2VOohcHKKkkgEq+3m0OBvWhjmXZ+Olo9zeB5IUWl+O4JBJzpObz+8X8S4NqQ4cI/6ksaiVqSDkmjlLQVSvXAlqVbr8z6hS7epZ5/Ycjzp+n4mfy0LY/Koi0yz16fNeudb9++8Zc0bJq3KNpelbN1tvNwXy+AKbTWa89pGw5eAtWs8zKFf3HH7knz5XyJT2JUfeLL81KZz69DxpxwSNZKXidcpAJI9EudkpEFUi5M5gkHNjxKVa0spda5nn273zBsgY3Jaw8dxYvzunFsDmOnWdTljTMQVw8n/WNNfU5mmKA2dYcYd6F+QMoW9HxH0u3fj3Z/4Vv2QO/fv/uNYT2Hp5q16x5f4Gmp/3mUPPGLHuru6NnfnUI2YYBkA3BBz7tB1D8t8b0j0X5ynT4QCh5oU74ck4eomJZGH4Wjms4oIvJinhZj55ilcuKdt1m3QAB6VuTet2WdGWS7kxIhYuX1OpXxgSSy8VLN7Gqc9/LVEuWNKSDhI59jiM4dBoS/CVXrxggjhfgLamoePluPJvPFtPZwnMaMG05Br0Jo7Bd68V1sZQsHmD7PbyA59BPYVRUdwnuQta1M+e6G0CVodndfNyd9Bv9xezeK8Msx9AdPW83Bv3GkNASBUOGEF3q3lshLnIDFyN8zPbJeZOoVcJVwLYPNUudQWdUztbKuVvxO4NhzzmdzGfTBYVQ7h0oIbkMijDLpgPcOw+LQkwidoIezXxmDIDEKMj1eDUXGBg748ObPx8JnipReTioioAfIUKIQ5suPw+FuF70wB9TxZPapOvESwauIlAcgAWoed2heGXkLynYD09Eyxrjqg09Dmqe68KicEQckr1U27bdyJH/UhbDBaGIDE+6SAbKf/dfAfe2R/baZNh11sjbYWuc0BDwlse9c+5edYbkYZjrNX2wC1dUwUM0rSQYt4olLWORnsyZ5QEw1yf6V59A8qPJdNQeMzLOP0HIPmLdcFhWz06eKQw7ToZL1pbJWkjHhkOxokM/X9RzjeZ1GygEiiFdDBL6m4VO3JLgPZb6RFgGpar5hptzLniiVK5aPcdI6SwfEUeiDuIqUYY+B+zvQd/WOYCeRSi8RF3exPVx+Wu99J0x6kllo4VBd1zArqUv9GcfncwYKDDHUBx1J5PRrJ5twIeIk2X/H1eJZ9sAa6udAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="BM dataset"\n        title=""\n        src="/portfolio/static/cellcounter_bm-4984a28c27e732c8bc1264fa994ac32d-f578f.png"\n        srcset="/portfolio/static/cellcounter_bm-4984a28c27e732c8bc1264fa994ac32d-727c0.png 64w,\n/portfolio/static/cellcounter_bm-4984a28c27e732c8bc1264fa994ac32d-9eccb.png 128w,\n/portfolio/static/cellcounter_bm-4984a28c27e732c8bc1264fa994ac32d-f578f.png 256w,\n/portfolio/static/cellcounter_bm-4984a28c27e732c8bc1264fa994ac32d-ba99f.png 384w,\n/portfolio/static/cellcounter_bm-4984a28c27e732c8bc1264fa994ac32d-7fbd7.png 512w,\n/portfolio/static/cellcounter_bm-4984a28c27e732c8bc1264fa994ac32d-0e8bc.png 768w,\n/portfolio/static/cellcounter_bm-4984a28c27e732c8bc1264fa994ac32d-a8203.png 1200w"\n        sizes="(max-width: 256px) 100vw, 256px"\n      />\n    </span>\n  </span>\n  \n</div></p>\n</div>\n<h4 id="tools"><a href="#tools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tools</h4>\n<p>Python 3, Numpy, Tensorflow, OpenCV, Pandas, ...</p>\n<h4 id="results"><a href="#results" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Results</h4>\n<p>... in progress</p>\n<hr>\n<h4 id="more-information"><a href="#more-information" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>More Information</h4>\n<ul>\n<li>visit the fork on github of sea-lion-counter: <a href="https://github.com/nilutz/sea-lion-counter">Cell-counter</a></li>\n<li>or the original <a href="https://github.com/rdinse/sea-lion-counter">Sea Lion Counter</a></li>\n</ul>',frontmatter:{date:"28/09/2017",path:"/cellcounter",title:"Cellcounter",cover:"img/cellcounter0.png",tags:["programming","deep learning","machine learning"]}}},pathContext:{}}}});
//# sourceMappingURL=path---cellcounter-b961295f703d513d7637.js.map