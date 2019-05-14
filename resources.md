---
layout: page
title: Project Resources
permalink: /resources/
---

### Below is a listing of every tool and library used in the creation of this project.

#### An extra special thanks to [The Coding Train](https://thecodingtrain.com/) and its community.

#### Many of the tutorials freely available through [Dan Shiffman's work](https://shiffman.net/) and The Coding Train website serve as the foundation and inspiration for the [examples](/) on this website.

![Flow Field Snapshot](/assets/flow_field.png "Flow Field Snapshot")

- # Processing Tools:
A robust assortment of graphical rendering tools made with artists and creative coders in mind, Processing is supported in multiple languages, but example sketches for this project were written in [P5JS](https://p5js.org/), a [Javascript](https://www.javascript.com/) varient based off the original, [Java](https://www.java.com/)-based [Processing](https://processing.org/).
  - Included P5JS (Processing) [Libraries](https://p5js.org/libraries/):

    - [p5.dom](https://p5js.org/reference/#/libraries/p5.dom):
     Allows simple interaction between the HTML5 objects and the Processing canvas.

    - [quicksettings](https://github.com/bit101/quicksettings):
     Quickly create GUI panels with access to control parameters.

    - [p5.gui](https://github.com/bitcraftlab/p5.gui):
     An implementation of the [quicksettings](https://github.com/bit101/quicksettings) library in conjunction with P5JS.

    *A few more P5JS libraries may be included in the final project.*

- # Website Tools

  - [Jekyll](https://jekyllrb.com/):
  A static site generator, written in [Ruby](https://www.ruby-lang.org/en/), that quickly builds and serves all website assets.
    - __Not sure what a static site generator is?__ Check out [this handy presentation](http://nilclass.com/courses/what-is-a-static-website/) describing the key differences between dynamic and static sites.

  ![Static Site Generation](/assets/static_site_generation.png)

    - Jekyll employs the following tools:

      - [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)

      - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

      - [SCSS](https://sass-lang.com/documentation/syntax):
    Sassy CSS

      - [Liquid](https://shopify.github.io/liquid/):
    Backbone template engine used by Jekyll

      - [Markdown](https://www.markdownguide.org/):
    A light-weight markup language.

      - [FrontMatter](https://www.npmjs.com/package/front-matter):
    Extract meta-data content from documents.

      - [Rogue](http://rouge.jneen.net/):
    Language-specific code highlighter.

      - [minima Theme](https://github.com/jekyll/minima):
    Template theme base

  - [Amazon Web Services](https://aws.amazon.com/):
  Amazon S3 web services are used to host this website in the cloud.
    - A tutorial on building an scp BASH script for repetitive uploads to the host server can be found [here](https://www.inmotionhosting.com/support/website/jekyll/how-to-publish-your-jekyll-site-with-scp)

  - [Github](https://github.com/):

    - [Git](https://git-scm.com/):
    Development Version Control

    - [Github Pages](https://pages.github.com/):
    Website hosting and generation. A simple alternative to AWS with Git support built in.

- [Perlin Noise Generation](https://en.wikipedia.org/wiki/Perlin_noise):
Smooth random values with similarities between adjacent values. This is the engine behind many of the 'forces' in the project examples.

- [Boid Complex Behavioral Systems](https://www.red3d.com/cwr/boids/):
Craig Reynolds' original website on complex behavioral systems serves as inspiration for the life-like behaviors in these sketches.
