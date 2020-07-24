# Portfolio site built with Gatsby & NetlifyCMS

[![Netlify Status](https://api.netlify.com/api/v1/badges/0cf49c32-bd47-4236-89ab-f832634cf394/deploy-status)](https://app.netlify.com/sites/cranky-gates-b6cb5c/deploys)

This repo contains a portfolio website that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Demo Link](https://cranky-gates-b6cb5c.netlify.app/)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Features

- A simple portfolio page with blog functionality built with Netlify CMS
- Editable Pages: Home page, About and Contact page with Netlify Form support
- Create Portfolio pieces from Netlify CMS
- Uses Bulma for styling and size is reduced by `purge-css-plugin`
- Fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatsby-image` with Netlify-CMS preview support
- Netlify deploy configuration
- Great scores on Lighthouse for SEO, Accessibility and Performance (excluding: PWA)

## Prerequisites

- Node (v10.15.3 or higher)
- Yarn

## Run locally

1. Install dependencies with Yarn:

```
yarn install
```

2. Start a development session with:

```
yarn develop
```

3. Browse to `http://localhost:8000` once development server has started
