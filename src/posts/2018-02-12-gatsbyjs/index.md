---
title: Gatsby.js
subtitle: A blog re-write with Gatsby.js, React.js and GraphQL
date: "2018-03-05T22:11:03.284Z"
path: "/gatsby-js-rewrite/"
cover: "./gatsby.png"
---

I just finished a rewrite of my blog using Gatsby.js.  I went with this because it is based on React.js and GraphQL.  I have been working a lot with React recently, and would like to learn more about GraphQL.  That makes for a nice combination of reasons to try out Gatsby.js.  This article gives a short overview, and why I think it was a useful exercise.

I am not much of a designer, so I started looking at a number of different [Gatsby Starters](https://www.gatsbyjs.org/docs/gatsby-starters/#gatsby-starters).  There are several that look good.  However, I realized by taking one that is already full-features, I would be cheating myself out of learning how things work under the hood.  Since that is part of the reason I wanted to do this, I kept looking.  I did notice that several of the starters used site templates from [HTML5Up](https://html5up.net/).  That led me to a template that I could start with.

I decided to go with [Future Imperfect](https://html5up.net/future-imperfect).  I started with the [gatsby-starter-blog-no-styles](https://github.com/noahg/gatsby-starter-blog-no-styles) starter and began moving over parts of the HTML from the site template.  This is where React.js really shines due to the component model.  Writing React components feels elegant.  I haven't perfected my structure, but you can take a look at the source to see how I broke things out.  

I moved over the SASS from the site template with only a few minor changes.  The changes fixed some CSS selectors that needed to change because of the element structure in React.  I didn't move over any of the JS from the site template, although I may decide to do so in the future.  

Most of the starter project is the same.  There was one feature from more advanced starters that I could not live without.  That is, the cover image with each post.  I used the approach that [Hunter](https://hunterchang.com/gatsby-featured-images/) suggests to incorporate an image.  

One other change I needed to make was to add Disqus support.  I used the [disqus-react](https://github.com/disqus/disqus-react) component to show the comment count, and embed the discussion frame.  When you run `gatsby build` you will get an error that window is not defined.  You can see the workaround I found for this below, along with a link to the [stackoverflow question](https://stackoverflow.com/questions/48128022/gatsbyjs-build-show-error-window-is-not-defined-aos).  Notice that the `Discussion` component returns null if the window and other paramters are not defined.  I use this approach alot in React to cut down on branching logic.  Just include the component, pass the parameters, and if the component decides it cannot be displayed, return null.  That makes the component composable without a lot of checks to see if it can render. 

```JavaScript
/**
 * This stateless, functional component wraps the DiscussionEmbed component.
 * Disqus is loaded only if window is available.  This fixes a problem when building
 * the HTML in gatsby.  Based on the answer in this thread.
 * https://stackoverflow.com/questions/48128022/gatsbyjs-build-show-error-window-is-not-defined-aos 
 * @param {string} disqusShortname - disqus name
 * @param {object} disqusConfig - configuration for disqus comment thread
 */
const Discussion = ({disqusShortname, disqusConfig}) => {
  if ((typeof window != "undefined") && disqusShortname && disqusConfig) {

    const Disqus = require('disqus-react');

    return (
      <Disqus.DiscussionEmbed 
        shortname={disqusShortname} config={disqusConfig} />
    );
  } else {
    return null;
  }
}

```

## Conclusions
If you read this far, I hope you learned something useful.  If nothing else, I would recommend that you try this approach yourself.  I was able to learn quite a bit about GraphQL, and learn about some React components that I would not have seen otherwise. I also learned a lot from decomposing the design and moving it over.  

Please comment below if you have any questions about the conversion.