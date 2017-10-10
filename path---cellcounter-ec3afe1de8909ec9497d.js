webpackJsonp([96034285751364],{369:function(a,e){a.exports={data:{markdownRemark:{html:'<h3 id="deep-learning-on-cell-data-set"><a href="#deep-learning-on-cell-data-set" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deep Learning on Cell Data Set</h3>\n<p>This project is fork from the original "NOAA Fisheries Steller Sea Lion Population Count" Kaggle Challenge <a href="https://github.com/rdinse/sea-lion-counter">Sea Lion Counter</a>. We modified the original version which can now be used on Cell Datasets(<a href="www.robots.ox.ac.uk/~vgg/research/counting/cells.zip">VGG</a> and BM<em>dataset</em>MICCAI2015). The model is based on an Inception-v4 network (pre-trained on ImageNet; Szegedy et al., 2016) and Count-ception (Cohen et al., 2017).</p>\n<div class="md-grid">\n    <div class="md-cell--6 item">\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 256px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEpUlEQVQ4yw2T23MSdxSAfwQFsoCwCyy73JYFFpbLLre9QBLJxTSEkICGBDBGpTG25tokJibeYqtJtJq2ikabi9pW09Rpq7aOHavT8TKjM/WhfeiM04c+tP9Jd+a8nzPf9x0Qi92LRu+Hw4/8/sc4fkujOQxkhwAoa7UTJLkA1eYAqAOAUykjON6pVAYBMMkAAmQaGYAAx8153N/4fJdheA6GRzluzW4/g+MnaHrR7Z5FkL1GU1EPZ3S6hMNxzGLJyeVWAMwyYARAA3j+14b6yzh+pBY6qFINC8IPodBXicTLhoaHRuM0QSybzQs4NqhUJrQ7Gm22cZVKkMkIAHD5NitIp1crlT8Khbt6/aRCcXD79koyubq3/K8o/sbz683NayRZcjgGUXS3Wl2n1QoOR8Vuz8m32QniMAgE7i4v/zfw/p84tgHD47KafeHwcrn8N8/fZNmFpqYnicSM1foFTVdxPANABMNyFNVjNDUajfXA6x3LZr9rb7+/M3ULw4YAKGo0w05iClL3w/o98fg1r3ctEum32aYRZISmh3buvMowc07nCAw3AcTQm88/yWZfJRJfe72f+Xyni8XHLFuVy/ei6Ecez3Wfb8NgmDAaO6PRxUrlWS63haJZl7uPJE8Cvb7AcXcY5stg8IIg/L5//9PW1mfB4CpJfmIyLcLwKaMhLZen1ep0Ov39vn1v3e5DCNLico2Hw1OgRp6yWHqdxGo2e3N09F1z81OPZw6CDqhUQypVu8dzkvadr1UVtNoOlr3KcZsYNkZRswRxyucbklQda2m5zYYXafp0V9ftSuVNqXQ3Gl0xmmYparpQeJDPv9DpeqDaTiY07XCMORwLFPUpDPepNd0gk3ksileCwSkMuxKLzczO/pPLvU6l1ovFN11dz5PJ9VDorMUyzQs39nQ/isWWduzo0evblMpGABKAYR6K4gGWvRCPL3u9M6XS81BoSlpVKv3c1LSlUOx3Oqfz+V8E4YUoSlCksyd0ugGHYx6GPwTJ5IlA4FJr6wYvzFptxUrlQTy+gMCF+voHlHdFqajDsbGGhnmGqUoKKOqsKK67XMcp6hzpXAKp1EVJT1/fWi73E0UNDA6+3LVrE4Iyce58KPSxWl0miEmavi4I0lSt1kmevxePV+32Yai2H0iQfL6Ozs4bAwNbGNaeSs1FIh9YrGVB3BT42y73UmPjRrH3mYM4ihgGccs4io50dPyYz9+Ty7ulPEcCgR5RPByLXWCZyWi02tj0KhJdp32zKlWfixwsFl8Xi38Fg2NSLU5iHoD3pOC7u98xzDHg9x8liLlk8lIqdZTjLtYlbyQSx2n/MIK0oWib1XoqFlsJBje83ovJ5P1YtApBRZ2u4vOdY5i3gKKaE4mJ3t5rmcwtqViNlldrRJqe8fuvhkJnIpF5FD0AQblt8gLhHA2FvsXxyZqaPWbzwfr6a4D2VzjuZDic5/kTJLlbJiMhKCKKn9P0ik7XFo5cCQTvKBS9ADQjSLfNtqXVjCNI2WTaFMXnAMMaSLLdYGDt9haWvWQ2s9K7tLWtSCwAoCFNO2ruV6l2A5BWKvMoOoqiR2y20xbLpMEw/D8RoTRUk8RRIQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="VGG CellDataset dryrun"\n        title=""\n        src="/portfolio/static/c743aae3d7e35d8f5f6661919b4875f2-f578f.png"\n        srcset="/portfolio/static/c743aae3d7e35d8f5f6661919b4875f2-727c0.png 64w,\n/portfolio/static/c743aae3d7e35d8f5f6661919b4875f2-9eccb.png 128w,\n/portfolio/static/c743aae3d7e35d8f5f6661919b4875f2-f578f.png 256w"\n        sizes="(max-width: 256px) 100vw, 256px"\n      />\n    </span>\n  </span>\n  \n</div></p>\n<div class="md-cell--6 item">\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 256px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAADeklEQVQ4y02UWW/aWBiGHWgSTCDs+2oDXlhsFmOgFGgYorAEaEoCTKJUhMllpbmsNH+hF/OX50kqzcwRsmwfvu1532Oh3Ww2Go26Yei6nkgkLi4uhPfl9XikfN4lir8ez8/P2eUq/H9ZrVapUNBU1R8I+P1+27LS6XQiHtc1TZblYCAQDod5f3l5mc1kiHc6nf8Fd9rtfr8fj8dFUXS5XF3brlYqH7vdwadPoVAol83Go1F2qen1etOp1L/F37JMb26Oh8Nms/H7fKfvq9fr/b7fd1jt9m9XV3lJymQy4UhEdLs9Xm8uk6E1h9Mp5XJCTdf//vnz+PKSjMdp7+TkxDTN/W5nt9tmrXY1GnW63XQyqasq9SnIVSmVIuFwMBQSSoqymM+n0+lwOIy9b194PNlczu12QwEiqqKY9TrVmF9V1cFwaNRqlKWSEAwG1+v1crFgTv4Hue12axgGI0UikaIsa4oCM+ZvmObL4bBaraLRKCwLkiT4fL62ZdWqYKr0bPvb8/PNZFIplyVJojdAkN3hcCDhbDp9fnqSZDkQDBZkuW6agtPhSCYS+Wz2drH48/t3CBWLRXp2gVUUC4UC7SADqPBCu9WKxWKlYhEVFEURADMZjw3TpOH1cvnH4QCtVqMRDYcBc7/ZfFmv6c4tinQHdmjznoHf7DSfzbqdDn0mYjGs9tePH3er1Wgw2N/fkwvZiEklk8i2ubtrNZuoTa6zs7M3reu1GopybTabpHzc7Rjee3m53e0+j0bIns/nKd5m2TYp4rGYz+ulBfwofOz1yrp+PZmwm0ql4NlqtUAy6Pe1UolgLIkFqY/sZKdNaMEF5wvIy7RPj49oAIPX19fxeAwwFEYAbnK5HA6hJmHJ9/4ty6Ly25n5slwi/er29ng84p7BYFCv12mhY9uwlCVpNByifDabRTO6iEWj8/n8br3+gLdrFWCVyWo1mzTWqNfHoxHxmqZxTlB7v93y08tlXVHy+FkQkPP+69dqtSqUNY2sUKUC55GbXqdDZCAQwGFwBgEFmBYLkpqM0EZ8g2AU73a7Dw8Ps9kMsB6PBwEJJimQaAEzclpxK8PzhtEwHFaBogDqjmVxkiBBMKcKSNxXVJUKeLBWLp+dntItvWRSKbJzg4U4+QI5oILv+VA0DINH9m6urwFBAIl48+sDwDUaiXCwSQF2Qv4BKR2yX2Y7644AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="VGG CellDataset dryrun"\n        title=""\n        src="/portfolio/static/93afa4ca906ddeef42ec567111c60ece-f578f.png"\n        srcset="/portfolio/static/93afa4ca906ddeef42ec567111c60ece-727c0.png 64w,\n/portfolio/static/93afa4ca906ddeef42ec567111c60ece-9eccb.png 128w,\n/portfolio/static/93afa4ca906ddeef42ec567111c60ece-f578f.png 256w"\n        sizes="(max-width: 256px) 100vw, 256px"\n      />\n    </span>\n  </span>\n  \n</div></p>\n</div>\n<div class="md-grid">\n    <div class="md-cell--12 item">\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 256px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEaUlEQVQ4yxWTaVMaaRDH53Nu1SaV5EWOzbUxltHEmMQQCQZZBJRj5JKbEQcY7jkYDrkGBhgHEAblHm7U7AfY2ap+009199P9718D+g17BWOLEYajOiW05txHhq3xcnrL92ftSg+RRJ2ffaZ1Jyknr20Mayy2zBVWm6+Z6KQqAQQPYklFgpDF8SMyCxdL8drwZrKYrLpNfjZauuUh2643oiLiKvLKQnN2pulgWtZKy1C+AouAfy+M7IVRMYbKccOm2/XLz9X6k8FCSB5cTwwfHJ4dn2Xb4/gCO7bh2H6s7qpybpZR52htFriuD0fdaQGm3R88Px8cSR4fUxgz7Ez43owlGsUQg4IkIgrJn+nxwzj01ZuSJ1ldISmLs/YywDFdoc/ZcGF57/r+p/LXYy34ty2tS+eMuQxcvF3cC9atD8OH+OFTMO8pXmNcAcy1oo1euQcMO+MZv+g3RrY1p/jhsfwpePT8JCnBaX1hwPGr+d1stPh99++CX4GvLZPeTHDbpZtei19NVsBydjsdLtizSkwc0687bFuQ6A+Z7PmJec1VTTWW07t+e3S3vM/4KM0LI5doZuxZJsCMbyYtugNQ/gquJnExevLOontrdn4833+kUv5lFN5dB742071f/p4PV4UIU/ZWwzIU16fsa46yKnsJFgD/j2Du+MK5A5s3XOoXRvHDI/kzEJJ45/wqARcOXxlt2x4Wqwu6TIfL03Wnadu5GK9iJjLxTxzwSkIxKebaC5xuQp4t2LIBKR7pDGu2LEK79hDTFmTZhmBZUGCGq3ZNmxChTXCZtnvXd/7dD5h3zizf4Ly3JFjKmlW90Ds2oCLJshTXr/O+nxFUhmlemRmk6j+IwtIQeoAdvTRa3zswZRyQvzJxla7Qya0gLL9MWDNCRL897tQHg+tx4iRZNZcIASFtklCnKpFKXJe4MGRt605kNwSQ5vR8tFxNb5eT1XJ2R1jTnsOwwLZAjrB8ykrVHGUKzDk+eaIHeJtoUWAG+gxzxQ4bawBukX/cm/Vaw1qhdUW3wW2nSxoUqszGy2a8GZZFc+qLtCXj/uqDfvhxZZxyUMUoMx+vCE8aQE6IkBIN6vFMqBTUEXsPlOAbK6FPxkDSKwpW9PmoOELICJ84mDwgSrZiTp/zHYZp9DIXo4GgAv3/7r7Aqtcm0QO5es3q2w1kdBnnmiunvUhrUrr108DPCKmIZwy5pDJRsFMlf1mYSCAHwPYx86ezU9F5jx0Iml1ClcBu8GzHi4qimIYI7AWEY9C8M5MK8tJOR76HwTfmMlab8ss5fwtE5bjmvZUmat3WaNKfB2XRiDiM7qP2zbOAJCx5oj6Xhv3SCO0sMTBDSDHwrTmhTY2a/LgzBZp4k/JVQxqsx/RzLkr50hA5Jkro5eh6GpCGDO8cth04osBrZ5ULVTIfohv0DaLAkF0k9MkHRF1kCb9sV3t5W9727Rzcsudj5UapPWjzdaJh+gAJ/2fdhSs/G7dcCMwKOg/ZUUAaQz56/wOGMGeOgfSELwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="BM dataset"\n        title=""\n        src="/portfolio/static/4984a28c27e732c8bc1264fa994ac32d-f578f.png"\n        srcset="/portfolio/static/4984a28c27e732c8bc1264fa994ac32d-727c0.png 64w,\n/portfolio/static/4984a28c27e732c8bc1264fa994ac32d-9eccb.png 128w,\n/portfolio/static/4984a28c27e732c8bc1264fa994ac32d-f578f.png 256w,\n/portfolio/static/4984a28c27e732c8bc1264fa994ac32d-ba99f.png 384w,\n/portfolio/static/4984a28c27e732c8bc1264fa994ac32d-7fbd7.png 512w,\n/portfolio/static/4984a28c27e732c8bc1264fa994ac32d-0e8bc.png 768w,\n/portfolio/static/4984a28c27e732c8bc1264fa994ac32d-a8203.png 1200w"\n        sizes="(max-width: 256px) 100vw, 256px"\n      />\n    </span>\n  </span>\n  \n</div></p>\n</div>\n<h4 id="tools"><a href="#tools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tools</h4>\n<p>Python 3, Numpy, Tensorflow, OpenCV, Pandas, ...</p>\n<h4 id="results"><a href="#results" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Results</h4>\n<p>... in progress</p>\n<hr>\n<h4 id="more-information"><a href="#more-information" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>More Information</h4>\n<ul>\n<li>visit the fork on github of sea-lion-counter: <a href="https://github.com/nilutz/sea-lion-counter">Cell-counter</a></li>\n<li>or the original <a href="https://github.com/rdinse/sea-lion-counter">Sea Lion Counter</a></li>\n</ul>',frontmatter:{date:"28/09/2017",path:"/cellcounter",title:"Cellcounter",cover:"img/cellcounter0.png",tags:["programming","deep learning","machine learning"]}}},pathContext:{}}}});
//# sourceMappingURL=path---cellcounter-ec3afe1de8909ec9497d.js.map