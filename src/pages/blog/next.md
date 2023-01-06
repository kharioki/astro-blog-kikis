---

title : NextJS - Getting Started
date : 2021-04-16
author : kharioki
image: {
  src: "/images/next.jpg",
  alt: "NextJS"
}
description: NextJS is a framework for creating pre-rendered React websites.
draft: false
category: Frontend
---

## What is NextJS? ##

NextJS is a framework for creating pre-rendered React websites.
> NextJS offers us both **SSR**(*Server SIde Rendering*) and **SSG**(*Static Site Generation*)

*At this point lemme describe these terms...*

**SSR** - React components are rendered into Html pages on the server on each request
**SSG** - Components are rendered onto Html pages at build time

This means react components are already rendered into Html pages before they reach the browser. 
- on the flip side, without Next JS react renders components into the browser -> Client-Side Rendering. 

_So what are the benefits of SSG & SSR?_
* Pre-rendering improves performance
* Better SEO(Search engine optimization) - response from the server is a fully rendered Html page meaning there are no blank pages.

_So what are the prerequisites to building with Next JS?_
* A basic to a good understanding of React.
* NodeJS installed on your pc - preferably version 10.13 and newer.

_nice to have_
* a good understanding of git version control.

##### Some resources
while I might not dive into building a simple web app with NextJs, I found a thread of amazing tutorials you can learn from.

{% twitter 1381973201098436610 %}

#### Some interesting concepts of NextJs

**Code splitting** - by default NextJs already code splits our application. This way only the javascript code needed for the current page is served from the server and the next page is served when navigated to.

**getStaticProps**, ** getServerSideProps**, and **getStaticPaths** - when you build your next app for production, next is gonna prefetch any code in the background that might be needed when the user clicks on a link in the page. It does this by looking at all the link components on the current page and prefetches all the code for any of those pages. `getStaticProps` fetches data at runtime, `getStaticPaths` - specifies dynamic routes to pre-render pages based on data. `getServerSideProps` - fetches data on each request.

**CSS support out-of-the-box** - NextJs extends the concept of import beyond javascript allowing you to import CSS files from a javascript file. In development, expressing stylesheets this way allows your styles to be hot reloaded as you edit them, this means you can maintain the application state. In production, all CSS files will be automatically concatenated into a single minified `.css` file.

**Optimized Image component** - another cool concept introduced in NextJs v10; the `Image` component extends the Html `<img/> element` and optimizes it by allowing for resizing, optimizing, and serving images in modern formats like WebP when the browser supports it. The neat thing about it is; this component comes with lazy loading enabled by default. That means your page speed isn't penalized for images outside the viewport. Images load as they are scrolled into the viewport.

**Incremental Static Regeneration** - NextJs generates and regenerates new pages on the fly when data is updated. Say we update data in the backend for a web app; there's no change on the first visit after the content is changed. The page visit however triggers NextJs to re-fetch the page data in the background. The static page is regenerated ready for the next visit.

**Fallback pages** - these are placeholder pages/content whilst NextJs fetches data for the page. Say you visit a new page that was created by adding content to the data. The best practice is to have a fallback page show instead of a 404 page. Once the data is fetched, NextJs pumps it into the page component so the page can be rendered.

#### If you're not yet sold on NextJs, there's more...
**Fast refresh** - this feature gives you instantaneous feedback on edits made to your components. It is enabled by default in the latest versions.

**Better error handling** - If you make a syntax error during development, you can fix it and save the file again. The error will disappear automatically, without losing the component state.

**Typescript** - NextJs provides typescript support out-of-the-box.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dmqex6c11lshvrxdfjij.jpeg)


Go ahead and try NextJs, then lemme know how your experience was. 
You can find a few examples of NextJs apps on my github. here's an example. 

{% github  kharioki/kikis-recipes %}

And here's the production version of the same.
[Kiki's Recipes](https://kikis-recipes.vercel.app/)