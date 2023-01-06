---
layout: "../../layouts/BlogPostLayout.astro"
title : Site tradeoffs - SEO vs Speed vs Ease of update
date : 2021-04-23
author : kharioki
image: {
  src: "/images/tradeoffs.jpg",
  alt: "Tradeoffs"
}
description: What are some of the tradeoffs I make when deciding what frontend stack to use
draft: false
category: Web Development
---

I have been doing web development for five years now and I have never actually thought about the tradeoffs I make when deciding what frontend stack to use. So recently I came across this course that discussed some of the common tradeoffs we ignore when deciding what type of website to build. 

So for this article, I'll discuss the different types of websites and how SEO(Search Engine Optimization), Speed, and ease of update; are some tradeoffs we make when developing websites.
___

#### Types of websites

##### _Static websites_
- These are sites that use static Html pages with a little CSS and even JS.
- The pages are uploaded to a CDN/Web host.
- also known as multi-page applications

some of the drawbacks for this are:
* slow - a fresh request to the server is made for every page.
* Hard to update - a lot of rewriting the same code on every page.

:white_check_mark: SEO     :x: Speed     :x: Ease to update

___

**_Single Page Websites(SPAs)_**
- usually made with frameworks such as Vue, React, e.t.c
- Only a single server request is made for the initial Html page
- Everything else is handled by the SPA in the browser i.e routing, data, etc, making it even faster.

the tradeoff for this is:
* These webpages are not SEO friendly - initial page requests usually return a blank Html page

:x: SEO     :white_check_mark: Speed     :white_check_mark: Ease to update
___

**_Server Side Rendered(SSR)_**
- pages are rendered on the server after every request.
- this is how traditional PHP, node JS websites that use templating engines like `ejs`, work.
- the server sources data and uses templates to render Html then pages are sent back to the browser

the tradeoffs for this are:
* speed - a fresh request needs to be made for every page. server requests can take time getting data and rendering pages.

:white_check_mark: SEO     :x: Speed     :white_check_mark: Ease to update
___

**_Static Site Generator(SSG)_**
- also known as Modern site generators
- examples are Gatsby and NextJS
- static pages are completed at build-time (before deployment)
- Pages are made using React components.
- Static pages are then deployed to the web.
- After the initial request, the site behaves more like a single-page application meaning routing is handled in the browser at no extra requests.

The advantage of this method is better SEO, speed - really fast and easy to update.

:white_check_mark: SEO :white_check_mark: Speed   :white_check_mark: Ease to update

___
