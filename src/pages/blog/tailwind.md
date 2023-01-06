---

title : Tailwind CSS - core concepts and JIT mode
date : 2021-09-05
author : kharioki
image: {
  src: "/images/tailwind.jpg",
  alt: "Tailwind"
}
description: It is a utility-first css framework packed with classes and can be composed to build any design, directly in your markup...
draft: false
category: Frontend
---

## What is Tailwindcss?
It is a utility-first css framework packed with classes and can be composed to build any design, directly in your markup.

> Its like bootstrap or materialize but while frameworks give you fully built components, tailwind gives you low-level utility classes to make your own components.

Example: lets say we want to build a `card` component 
![card](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s0usu2usiwlxv1qor8c9.png)

## What are the prerequisites to using tailwindcss?
To use tailwind, you'l need:
- Basic understanding of both HTML and CSS

### Using Tailwind CSS?
- You can install Tailwind CLI using npm.
- You'll need node.js installed on your computer

## How Tailwind works?
We create a source file where we import Tailwind utilities and can even write our own css. Tailwind then processes that source file into vanilla css output file at build time with all the css which we link to our html pages.

## Tailwind Core Concepts

1. **Its Constraint Based**- Provides an API for your design system.
Tailwind's utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values.
They make it easy to be consistent with color choices, spacing, typography, shadows and everything else that makes up a well-engineered design system.

2. **Build anything** - Build whatever you want, seriously
Because tailwind is so low-level, it never encourages you to build/design the came site twice. Even with the same color palette and sizing scale, its easy to build the same component with a completely different look in the next project.

3. **Performance**- Its tiny in production
Tailwind automatically removes all unused css when building for production. This means your final css bundle is the smallest it could possibly be. Usually less than 10kb

4. **Mobile first** - responsive everything
Tailwind lets you build responsive designs right into your html. You can add a screen size in front of any utility class and it will apply it at a specific breakpoint.

5. **State variants** - style different things on state changes
You can stick `hover, focus, active, disabled, focus-within, focus visible` or even tailwind's `group-hover` and would style something on these state changes.

6. **Component driven** - you can extract repeated utilities into a component.
If you're not into component frameworks, you can use Tailwinds `@apply` directive to extract repeated utility patterns into custom css classes just by copying and pasting the list of class names.

7. **Dark mode** - To enable dark mode in your configuration file throw `dark:` in front of any color utility to apply it when dark mode is active. This works for background colors, text colors, border colors and even gradients.

8. **Customization** - extend it, tweak it or change it
Use the `tailwind.config.js` to craft your own design system then let tailwind transform it into your own custom css framework.

9. **Modern features** - Tailwind provides first-class css grid suppo, composable transforms and gradients powered by css variables, support for modern state selectors like `focus-visible` e.t.c

10. **Editor Tools** - world class IDE integration
Tailwind css intellisense extension integrates perfectly with vs code providing you with intelligent autocomplete suggestions, linting, class definitions and more.
![Tailwind vscode plugin](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hp5wyiz4oi4bvgg5hhxl.png)

11. **Ready-made components with Tailwind UI** -
Tailwind UI is a collection of beautiful, fully responsive UI components, designed and developed by creators of Tailwind CSS.

_________

## Just-In-Time Mode
Just-In-Time(JIT) is a faster more powerful, on-demand engine for tailwind css v2.1+
- It is a compiler for Tailwind css that generates your styles on-demand as you author your templates instead of generating everything in advance at initial build-time.

## Why use JIT mode?
- **Lightining fast build times** - this library can compile even the biggest projects in about 800ms(with incremental builds as fast as 3ms), no matter what tool you're using. This usually takes 3 - 8s to initially compile using CLI and 30-45s in webpack.

- **Every variant is enabled out-of-the-box** - since the library generates styles on demand, you can use any variant you want, whenever you want. you can even stack them like `sm:hover:active:disabled:opacity-75`

- **Generate arbitrary styles without writing custom css** - since styles are generated on demand, you can generate a utility for any ultra-specific value using square bracket notation like `bg-[#ffa6d7]`. This works with variants too eg `md:bg-[#ffa6d7]`

- **Your CSS is identical in development and production** - you do not need to purge unused styles for production since you see the exact same css in all environments.

- **Better browser performance in development** - since development builds are as small as production builds, the browser doesn't have to parse and manage multiple megabytes of pre-generated css.

## How we use JIT mode?
To enable just-in-time mode, set the `mode` option to `jit` in the `tailwind.config.js` file.
You'll also need to configure the `purge` option in `tailwind.config.js` with all your template paths.
![jit config](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nrbng53huii6dwc7vf6z.png)
