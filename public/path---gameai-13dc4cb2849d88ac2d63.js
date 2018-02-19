webpackJsonp([7110925536811], {
  381: function(e, a) {
    e.exports = {
      data: {
        markdownRemark: {
          html:
            '<h3 id="game-ai-strategies-on-tictactoe-and-connect-four"><a href="#game-ai-strategies-on-tictactoe-and-connect-four" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Game AI strategies on TicTacToe and Connect Four</h3>\n<p>This projected was part of the Game AI course at Uni Bonn. Provided with the Connect Four and TicTacToe game mechanics we created an Interface and an AI based on the Minmax algorithm. Now Users can play against each other or our AI</p>\n<h4 id="abstract"><a href="#abstract" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Abstract</h4>\n<p>This report gives a quick overview of the presented and prepared projects of the Game AI course in SS 16. In detail a discussion of the games tic tac toe and connect four with strategies for playing against human and computer players. Furthermore we try to execute novel approaches to the Atari game breakout and quake II. In doing so techniques and strategies are presented, discussed and applied. [...] In total, three projects focusing on different game AI strategies had to be implemented and computed. Therefore one gained insight into specific problems and use cases. The first project targeted the games tic tac toe and connect four. A probabilistic and a heuristic strategy were used to implement an AI player moving against a random player. Secondly game mechanics and visualization for connect four where required. The next project build upon those tasks and focused on game trees and minmax computations for those games. Further- more a controller for the breakout game was implemented. Lastly a task was to look at path planning in its different forms. The third project concentrated on statistics for a 19 x 19 connect four board. Then a fuzzy controller naively controlling a paddle for the breakout game had to be implemented. In the last task a self organising map (SOM) and Bayesian imitation learning was used to generate trajectories.</p>\n<div class="md-grid">\n  <div class= "md-cell--6">\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 256px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 73.07692307692307%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAB8ElEQVQ4y81UOW/UQBj1n0qLWEEFEkeZDipEoEFABw0VBApEQIhDghRsIDGQbaBGQknIBigpKBDXro9dew6fYPvxfbOxw7KbBlEw0tNc33vf+zzjsaqqAuPPprVGEAQQ4QBi6GLo9eC73zBwvyOOFBzHQRRFEzyrLAsoFRFSSJk0ECIhYopX3U+4vbyJ+8+6uGdvYqG9hrX3X2gvG4uvYbFqmv6gjAKuK6mXpu/3BVQY4dLd15g51sa+Uzb2n36KmeNLuLa4AS1i9Ldjf+eRYIU4TuF5qoHvU0m0qYh0dfENCdk4cr6DowQWvvXkLbSMSUBN8EzJUmqa6LENzsak+YcbaJ1cwaGzq4QO9tJ44fEWIhb0pghyyXleGMu8yELc85xLvjJNcGnLuHfcnZJrnpXnOcJQ/TuHvu8hSfImQ436G87v4lBvO6zjG4dCiL8TlOOCNayiKOjO/c+HUpblLtdGjRzSJW7N2Th8rmPQmlvBTeMwMQ45doenRw7jOGsymGyeNH8Bu7j8YB17Tizj4JnnBjy+0e6ODsWZ4pAFs+xn44wRBDE8ysaC1x91SWgVsxdfYvbCCxwg0Tv2O+PeH0QYECYc8mtTFCXKsiLxDL1en1wn4EdIxzk8SvDh42d87Q0xlJlZ4xaGwrw4HMd8xi+6VBwYvkjpMwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="MinMax"\n        title=""\n        src="/static/1-af9211c09a0f9e6fa56f5624ecb0b45d-f578f.png"\n        srcset="/static/1-af9211c09a0f9e6fa56f5624ecb0b45d-727c0.png 64w,\n/static/1-af9211c09a0f9e6fa56f5624ecb0b45d-9eccb.png 128w,\n/static/1-af9211c09a0f9e6fa56f5624ecb0b45d-f578f.png 256w,\n/static/1-af9211c09a0f9e6fa56f5624ecb0b45d-ba99f.png 384w,\n/static/1-af9211c09a0f9e6fa56f5624ecb0b45d-c77e5.png 494w"\n        sizes="(max-width: 256px) 100vw, 256px"\n      />\n    </span>\n  </span>\n  </p>\n  </div>\n<div class= "md-cell--6">\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 256px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 82.15859030837005%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAAC4UlEQVQ4y22U2y9jURTGz+v4C4x/QLx5MjI8D603vPCCBy+IiBfUC0FMI6KkJFJiiLQunUbTZhqRSJo04j6oW0QEkSChdWvdfXO+1dnmZGZ28us+Z+/Vb6291tpHe3t7Awdn9Xx+fo6DgwMcHh4KR0dHMp+cnOD+/v7d3jiroRnFFJeXl7i6upI5Eong+vr6/f3u7u6fALgXjUbx/PwMjT9q8/X1VfifZ+NQto+Pj/Jut9sxNDSUiPDl5QUKipOnpyeBz8qJwmj/8PAgIg6HA06n84/g7e0tbm5u5DiKWCyGeDwuOTNi3GcqOMbGxuDz+RKCjIR5Yn6YB+aD0JjQEaFTYtzn/zj8fj+mp6clFRo9raysYHl5GWtra1hfX0c4HMbW1pY8Ly4uyj7XyPb2NnZ2drC5uYmlpSUJZHZ2FsFgMBEhvc7NzSEUCmFhYUGg+OrqKubn58WQe/yz0SmdcP3s7EzsiFSZoXs8HrjdboyOjmJkZEQqNjAwIPT392NwcBATExOYnJzE1NQUvF4vAoGAHHV/fx8bGxsSAKuuMQ80drlcUi0KsA26u7vR09Mjc29vrzgjtCUsAoV3d3dFdG9vT7pAu7i4gNVqRVtbG5qbm4W6ujrU1taiuroa5eXlqKiokLX6+nq0tLSIrc1mQ2dnp6SEx+ZNkghPT0/R1NSExsZGWCwWoaamBpWVlSJWXFyMkpISea+qqkJDQ4PYtre3o7W1FTMzM1J16rCtNN5bJVBaWirk5uYiOzsb6enpSE5ORmpqKvLz81FQUIDCwkKBzsrKyqSh2eA8KftWOz4+lgiKiopgNptgMpmQlpaGlJSPSEr6AE3ThKyszzpZyMz8hIyMDOTlmZGT80Xyq+4zW1Bj13u9P/RK+/SO/y44HN/Q1+dAV5ddz9lXdHTY9Oq7hOFhpzA+7tGjc+ut9FMEY7G43CD52ui3T++hxMX//W3A398Grqs12isbtcaCMMJfxWolxks1SBkAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Stats"\n        title=""\n        src="/static/figure_23-1d4afe6e1f5e7e40523efd3eb5cd1193-f578f.png"\n        srcset="/static/figure_23-1d4afe6e1f5e7e40523efd3eb5cd1193-727c0.png 64w,\n/static/figure_23-1d4afe6e1f5e7e40523efd3eb5cd1193-9eccb.png 128w,\n/static/figure_23-1d4afe6e1f5e7e40523efd3eb5cd1193-f578f.png 256w,\n/static/figure_23-1d4afe6e1f5e7e40523efd3eb5cd1193-ba99f.png 384w,\n/static/figure_23-1d4afe6e1f5e7e40523efd3eb5cd1193-ee138.png 454w"\n        sizes="(max-width: 256px) 100vw, 256px"\n      />\n    </span>\n  </span>\n  </p>\n  </div>\n</div>\n<h4 id="tools"><a href="#tools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tools</h4>\n<p>Python 2.7, Numpy, <a href="https://kivy.org/#home">Kivy</a></p>\n<hr>\n<h4 id="more-information"><a href="#more-information" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>More Information</h4>\n<ul>\n<li>visit the github repo: <a href="https://github.com/nilutz/Connectfour">Connect Four</a></li>\n</ul>',
          frontmatter: {
            date: "01/01/2016",
            path: "/gameai",
            title: "Connect Four Game AI",
            cover: "img/gameAi0.png.png",
            tags: ["programming", "deep learning", "machine learning"]
          }
        }
      },
      pathContext: {}
    };
  }
});
//# sourceMappingURL=path---gameai-13dc4cb2849d88ac2d63.js.map
