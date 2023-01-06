---
layout: "../../layouts/BlogPostLayout.astro"
title : Configuring my VS Code Editor
date : 2021-06-19
author : kharioki
image: {
  src: "/images/vscode.jpg",
  alt: "VS Code"
}
description: How I configure my VS Code editor to improve my productivity and coding skills
draft: false
category: Programming
---

I have been meaning to write this article about how I configure my favorite IDE; VS Code. I'm writing this because I recently changed my PC and I had to sit through hours of configuration process all over again. I hope to use this post next time to get started quickly. I also hope this post helps you configure your VS Code in a way that it improves your productivity and coding skills.

Okay, here we go...

___________
## VS Code
- it is a free code editor redefined and optimized for building and debugging modern web and cloud applications.
- it is lightweight but powerful and runs on your desktop and is available for windows, macOS and linux.
- it comes with built in support for javascript, typescript and NodeJS and has a rich ecosystem of extensions for more than a dozen other languages (c#, c++, Java, Python, PHP, Go, Dart among others)

**Setup** - it is as easy as downloading from the visual studio code site and you'll get started in a matter of minutes.
**Cross-platform** - runs on macOS, windows and linux
**Monthly updates** -enjoy new features and bug fixes every month with new releases. You may enable auto-updating if you want.
**Insiders build** - if you want to use the same version the vs-code dev team uses on daily basis, you can install the insiders build from the site. 
**Portable** - VS Code has support for portable mode. Data created and maintained by VS Code lives near itself and can be moved across environments e.g by USB drive.
__________

##Extensions
Okay, so this is the main focus of this post.

> Disclaimer: I will only cover the few extensions that I have been using on a daily basis for the last 4 years.

### Marketplace
- you can find all extensions for the visual studio family here at the [marketplace](https://marketplace.visualstudio.com/).
- You may also install them from your vscode editor. Simply use the command <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>X</kbd> for windows or <kbd>shift</kbd>+<kbd>command</kbd>+<kbd>X</kbd> for macOS.

Lets now look at my favorite extensions...
___________

## Themes
- Although VSCode comes with a few theme options out-of-the-box, I like to configure my own. 

### Noctis -> by Liviu Schera

This is my favorite theme. I actually prefer light theme for my IDE (_that being said_)
![Come beat me](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ahs1ja6qlyxi4mi6laws.jpeg)
Noctis is a collection of light and dark themes with a well balanced blend of warm and cold medium contrast colors.
Noctis has 11 versions as of this writing( 8 dark, 3 light). 

> My favorite is Noctis Lux.

![noctis](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/67cv0xf4dk1kgyt5qila.png)
_________

## Tools & Languages
- There are hundreds of extensions that provide language support. these are the ones I use all the time.

### ESLint 
It integrates ESLint javascript into VSCode.
For those new to ESLint, it is a pluggable javascript linter. It statically analyzes your code to quickly find problems.
You'll need to have installed ESLint either locally or globally. You can do that by `npm install eslint` in the workspace or `npm install -g eslint` for global install.
I will not dive into eslint and what it can do, you can read all about it [here](eslint.org).
For those who love redundancy and making your life harder on purpose, you can install **TSLint** extension too for typescript linting.
- However this is not necessary as ESLint has typescript support and will automatically use/read your `tsconfig.json` rules

### Beautify 
Beautify, unpack or deobfuscate javascript, HTML or make JSON readable.
This extension simply beautifies your code. 
VSCode uses _js-beautify_ internally, but it lacks the ability to modify the style you wish to use. This extension enables running js-beautify in VSCode.

> as usual you can read and play around with js-beautify [here](beautifier.io)

### Auto-Close Tag 
Increase your coding productivity with AI code completions that automatically add HTML/XML close tag.
This extension 
- automatically adds closing tag when you type in the closing bracket of opening tag
- automatically close self-closing tags
- use keyboard shortcuts to add close tags manually

### Better Comments 
This extension helps you create more human friendly comments in your code. You'll be able to categorize your comments into:
- Alerts
- Queries
- Todos
- Highlights

> _Tip: when working with react-native, flutter, android studio reads your comments and makes it easy to navigate your codebase on the terminal_

### Rainbow Brackets 
In simple terms, this extension puts same rainbow color on matching pair of brackets and any isolated right brackets are highlighted in red.
Works for round brackets, square brackets, and squiggly brackets.

> I have found this particularly useful when debugging.

___________
## Syntax snippets

### ES7 React/Redux/GraphQL/React-Native snippets
Simply put snippets are more like syntax shortcuts.
This extension provides snippets for react, redux, react-native and graphql in javascript and typescript with es7 syntax.
provides syntax shortcuts for these languages/file extensions
- javascript(.js)
- javascript react(.jsx)
- typescript(.ts)
- typescript react(.tsx)

examples of snippets are 
`imp` -> `import moduleName from 'module'`
`ime` -> `import * as alias from 'module'`
`fre` -> `arrayName.forEach(element => {})`
`sto` -> `setTimeout(() => {}, delayTime)`

> React 17 is also supported. Just prefix the snippet with _ (underscore) e.g
`_rmc` -> generates a memoized react component.

### Javascript (ES6) Code Snippets
this extension contains code snippets for javascript in ES6 syntax for vscode javascript and typescript
provides syntax shortcuts for these languages/file extensions
- javascript(.js)
- javascript react(.jsx)
- typescript(.ts)
- typescript react(.tsx)
- HTML (.html)
- Vue (.vue)

### React Native Tools
If you build lots of mobile apps with react native like me, you'll definitely love this extension. It provides debugging and integrated commands for react native.
As usual to use this extension you'll need to:
- have setup a react native dev environment
- have your react native project root folder open in VSCode.
With this extension, you can run commands such as:
- launch Android emulator
- Run Android emulator
- Run iOS simulator
- Run expo
- Start, Stop or Restart packager
- Reload app
- Start or Stop logcart
- Run or Stop network inspector, and many more...

### Flutter
When I am not building mobile apps with react native, I like to use Flutter (its younger, badder sister).
This extension adds support for effectively editing, refactoring, running and reloading flutter mobile apps and support for Dart language snippets too.

> As usual this extension will require you to have flutter dev environment setup, dart language extension and an open flutter project.

__________
## Git stuff

### GitLens - Git supercharged
This is an open-source extension for VSCode created, developed and maintained by Eric Amodio.
It helps you better understand code.
Simply glance into whom, why and when a line or code block was changed.
Go back through history to see how code evolved.
It is powerful, rich and highly customizable.
Main features include:
- revision navigation - (backwards and forwards) through history
- current line blame - an annotation at the end of line showing (on hover) commit and author who last modified.
- side bar views - commits, repositories, file history, line history, branches, remotes, stashes and contributors view.
- interactive rebase editor
- rich remote provider - integrations with your git provider; Github, Gitlab, Gitea, Bitbucket, Azure DevOps for issue and pull requests linking.

### Git blame
If you just want to know who to blame for the changes in the code and do not want all the other amazing functionality of GitLens, then use this extension.

> I use both gitlens and git blame.

### gitignore
I love this extension.
This extension lets you pull `.gitignore` templates from [Github's gitignore repository](https://github.com/github/gitignore)

__________

## Intellisense

Intellisense is a general term for various code editing features including code completion, parameter info, quick info and member lists. 
VSCode intellisense is provided for Javascript, Typescript, JSON, HTML, CSS, SCSS and Less out of the box.
Intellisense features are powered by a language service. A language provides intelligent code completions based in language semantics and an analysis of your source code. If a language service knows possible completions, the intellisense suggestions will pop up as you type. If you continue typing characters, the list of members(variables, methods, etc) is filtered to only include members containing your typed characters. Pressing <kbd>Tab</kbd> or <kbd>Enter</kbd> will insert the selected member.

> That being said, here are some extensions I install to increase the scope of my editor's intellisense.

### npm intellisense
This extension autocompletes npm modules in import statements.
By default NPM Intellisense scans only dependencies installed.
You can set `scanDevDependencies` to `true` to enable it to scan devDependencies too. 
```
{
  "npm-intellisense.scanDevDependencies": true,
}
``` 

### Path intellisense
This extension autocompletes filenames.
Path intellisense removes the file extension by default if the statement is an import statement.

### Pylance
This extension provides fast, feature-rich language support for Python.
It works alongside Python in VSCode and is powered by Microsoft's static type checking tool; Pyright.

> _Cool fact: The **Pylance** name is a small ode to Monty Python Lancelot who was the first knight to answer the bridgekeeper's question in the Holy Grail_

Pylance provides some awesome features:
- Docstrings
- Signature hhelp
- Parameter suggestions
- Code ccompletion
- Auto Imports
- Jupyter notebooks compatibility
- Semantic highlighting

### Jest
Test like a pro with this intellisense support for Facebook's Jest.
Features include:
- start jest automatically when you're in root folder project with jest installed
- show fails inside problem inspector
- adds syntax highlighting to snapshot files
- show test coverage info
- help debug jest tests in vscode
- support multiple test run modes.

_________

## HTML, CSS, Markdown stuff

### Live Server
If you write or build with HTML a lot, you may wanna check out this extension.
This extension allows you to launch a development local server with live reload features for static and dynamic pages.
Some cool features include:
- Quick development live server with live browser reload
- Start or Stop server by a single click from status bar
- customizable port number, server root, default browser
- support for any browser
- remote connection through WLAN (can test with mobile phone)
- use a preferable host name
- SVG support
- https support
- CORS enabled
- multi-root workspace supported

### Markdown Preview Enhanced
If you write markdown blogs or even use markdown on gatsby, this extension is for you.
Markdown Preview Enhanced is an extension that provides you with many useful functionalities such as: 
- automatic scroll sync, 
- math typesetting, 
- mermaid, 
- PlantUML, 
- pandoc, 
- PDF export, 
- code chunk, 
- presentation writer, etc.

### HTML CSS Support
Naturally support for emmet snippets is built right into vscode.

> If the only Emmet you know is the amazing actor in the tv series 'switched at birth' played by the talented Sean Berdy; then that is not the Emmet we are referring to. I'm talking about Emmet the _set of plug-ins for text editors that allow for high-speed coding and editing in HTML, XML, XSLT, and other structured code formats via content assist._

Emmet abbreviations and snippet expansions are enabled by default in `html, haml, pug, slim, jsx, xml, xsl, css, scss, sass, less, etc`.
However I have noticed that sometimes this doesn't workas expected which is why I use this extension. 
This extension provides features like:
- HTML `id` and `class` attribute completion
- support linked and embedded style sheets
- support template inheritance - amazing when you're doing `ejs` templating
- validate css selectors on demand

### Color Highlight
This extension highlights and styles css or web colors in your editor.

### Rainbow CSV
If you're a 10X dev like me, then you've played around with CSV files several times and you'll wanna have this extension for the next time.
This extension provides features like:
- highlight columns in comma (.csv), tab (.tsv), semicolon and pipe separated files in different colors.
- provide info about column on hover
- CSVLint - automatic consistency check for CSV files
- multi-cursor column edit - superhero style
- Align columns with spaces and shrink (trim spaces)
- Run queries in SQL-like language - avengers style.

### Sass
Sass: Syntatically Awesome Style Sheets - _cool name for a pet, huh?_
This extension provides indented sass syntax highlighting, autocomplete and formatter.

### SVG Viewer
This extension allows you to view SVGs in your vscode. 
But there's more:
You can export SVG to PNG(even with explicit size), convert SVG to URI Scheme and copy to clipboard among other features.

### vscode-styled-components
This extension uses CSS grammar built on top of language-scss and language-css to provide syntax highlighting and intellisense support for styled components.

### vscode-icons
If you want to easily distinguish files in your project with icons, then you can install this extension.

And now...
___________

## The Really Cool S*#t

### Thunder Client
This is my favorite extension of them all.
![Thunder client](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7m8uxtj6upqjf03theay.png)

This extension provides a Rest API Client for vscode and a GUI based Http client.
Check this out :)
![thunder vscode](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2v7gazp863p71jc6v12h.jpeg)


### WakaTime
Wakatime provides metrics, insights and time tracking automatically generated from your coding activity.
To use it you'll need to register with wakatime to get your own unique api-key that you enter when you install this extension.
I like this extension because every Monday morning I receive a detailed report of my coding activity for the past week. _Check this out_
![wakatime report](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hak6inbs6e2xso7qxc94.png)

> see, I only use vscode. 

_______
## Extras

* **Fonts** - I use Fira Code and Operator Mono. checkout this [blog](https://morioh.com/p/8d67fa70adb6) by Rakesh on how to install these fonts
* **vscode-shortcuts** - again, checkout this [post](https://dev.to/macmacky/my-vscode-shortcuts-settings-and-extensions-for-productivity-3chd) for some shortcuts.

I hope you enjoyed this long post. I enjoyed writing it. In the rare occurence that I discover/create a new cool extension, I will include it here in the future.