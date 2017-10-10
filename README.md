# Static Portfolio

Private Portfolio, old and current projects on a single static react app. Visit [nilutz.github.com/portfolio](https://nilutz.github.io/portfolio/)

## What's inside?

overengineering at its best:

* [Gatsby](https://www.gatsbyjs.org/)
* [styled-components](https://www.styled-components.com/)
* GraphQL
* Markdown
* [React-md](https://react-md.mlaursen.com/)
* [Font-Awesome](http://fontawesome.io/)
* [Gatsby material starter](https://github.com/Vagr9K/gatsby-material-starter)


## Getting Started

similiar to [Gatsby material starter](https://github.com/Vagr9K/gatsby-material-starter). 

## Deploy

#### First time

```shell
git checkout -b gh-pages
```

This will create a new branch gh-pages and check you out to the new gh-pages branch with a single command.

```shell

git rm -rf

git commit -am “First commit to gh-pages branch”

git push origin 'git subtree — split — prefix public gh-pages':gh-pages — force
```


#### After that 
copy to package.json as a script:

  `"deploy:subtree": "git push origin 'git subtree split --prefix public master':gh-pages --force",`

now run 
 
```shell
npm run build:pp

npm run deploy:subtree
```
for each new build and deploying 

or if master has changed commit that and run subtree command for both changes to take effect