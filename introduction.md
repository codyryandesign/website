---
layout: page
title: Introduction
permalink: /introduction/
---
## Introduction To This Site

A web-based portfolio of randomized generative art examples alongside exposed interface variables that provide the user with the means to experiment with and manipulate the state of each example. Through interacting with each piece the user will more-fully appreciate and understand the process of making computer-aided generative art, and enjoy creating something uniquely their own.

In addition to the challenge of incorporating interactive javascript content into a browser interface, this project was also my introduction into static-site generation and front-end toolsets which allow me to present this content in a clean and organized manner.

## Site Overview

This site is an initial attempt to provide anyone with access to a modern internet browser the means to interact with, observe, and record their experiences with complex behavioral systems, such as flow fields, generative art, and vector mathematics, within a responsive graphical environment.

The graphical presentation and user input operations of this application will be updated and displayed in real-time to provide the user a greater sense of control and feedback from the program than one would attain from static images or diagrams describing these types of systems. In essence, this application is a real-time learning and testing playground for the user.

## Site Navigation:

- [Introduction To This Site](#introduction-to-this-site)
- [Site Overview](#site-overview)
- [Site Navigation](#site-navigation)
- [Definitions and Terminology](#definitions-and-terminology): An overview of project-specific definitions and key terminology.
- [Frequently Asked Questions](#frequently-asked-questions): A FAQ for general queries about the project and website.
- [System Overview](#system-overview): An overview of the system's organization and file structures.
  - [Static Site Generation](#static-site-generation)
    - [What Is A Static-Site?](#why-use-a-static-website?): A brief introduction to static-site design.
    - [Static v Dynamic Sites](#static-v-dynamic-sites): A comparison of static and dynamic websites.
    - [What Is a Static-Site Generator?](#what-is-a-static-site-generator):
      - [Jekyll](#jekyll): Jekyll, a static-site generator.
        - [Jekyll Tool-Set](#jekyll-tool-set): A full list of Jekyll's tools can be found in the [resource section](/resources/#jekyll-toolset).
        - [Jekyll File Structure](#jekyll-file-structure): An explanation of Jekyll's file organization.
          - [\_config.yml](#_config.yml)
          - [\_projects](#_projects)
          - [\_site](#_site)
          - [Site Pages](#site-pages)
            - [gallery.md](#gellery.md)
            - [introduction.md](#introduction.md)
            - [resources.md](#resources.md)
            - [system_overview.md](#system_overview)
          - [Gemfile](#gemfile)
          - [gemfile.lock](#gemfile.lock)
          - [assets](#assets)
          - [\_layouts](#_layouts)
          - [\_includes](#_includes)
          - [\_data](#_data)
          - [\_site](#_site)
  - [P5JS Project File Structure](#sketch-file-structure): An explanation of a typical P5JS project's file structure.
    - [p5.js](#p5.js):
    - [p5.dom](#p5.dom):
    - [sketch.js](#sketch.js):
    - [quicksettings.js](#quicksettings.js):
    - [p5.gui](#p5.gui):
    - [Example Custom Classes](#example-custom-classes):
      - [Particle.js](#particle.js): A generic example of a Particle class.
      - [Boundary.js](#boundary.js): A generic example of a Boundary class.  
- [Sketch Gallery](/): Home Page For All Sketches
  - [Sketch Layout and Controls](#sketch-layout-and-controls): A description of a typical sketch page on this site.
    - [Sketch Title](#sketch-title)
    - [Interactivity Options](#interactivity-options)
      - [GUI Controls](#gui-controls): A Description of GUI Interaction
        - GUI visibility can be toggled by pressing **s** on your keyboard.
        - GUI panel(s) can be moved around the screen by dragging the title bar of the GUI panel.
        - GUI panel(s) can be collapsed to a discrete form by double-clicking the title bar of the GUI panel.
        - Sketch variables can be changed by interacting with named sliders, color pickers, and buttons.
      - [Mouse Interaction](#mouse-interaction): A Description of Mouse Interaction
        - If specified in the sketch, the mouse can be used as another form of interaction. See each sketch for specifics on mouse effects.
      - [Capturing The Canvas](#capturing-the-canvas): A screenshot of the canvas can be taken at any time by pressing **p**.
      - [Reloading Randomized Conditions](#reloading-randomized-conditions): A simple reload of the web-page will result in a newly rendered scene based on randomized values.
    - [Canvas Window](#canvas-window):
        - A DOM element that is embedded into the HTML code and renders the scene at 60 frames per-second.
    - [Sketch Description](#sketch-description): A description of the general behavior of the sketch.
    - [Sketch Manipulation Suggestions](#sketch-manipulation-suggestions): A few examples of how the sketch might be interacted with.
    - [GUI Variable Descriptions](#gui-variable-descriptions): A listing of interactable sketch variables accessed from within the GUI panel.
    - [Mouse Interaction Descriptions](#mouse-interaction-descriptions): A listing of interactive input through the mouse.
  - [Sketches](#sketches): All available sketches.
    - [2D Ray-Casting](/projects/ray_casting/p5project.html): A light and shadow simulation utilizing a 2D ray-casting technique.
    - [Fireworks!](/projects/fireworks/p5project.html): A simulation of fireworks shooting into the sky under the effects of gravitational and wind forces.
    - [Flowfield](/projects/flow_field/p5project.html): Swarms of particles are propelled across a field of vector forces.
    - [Perlin Noise Blob](/projects/the_blob/p5project.html): An oozing blob is drawn using Perlin noise coordinates.
    - [Lissajous Curve Table](/projects/lissajous_curve_table/p5project.html): A visualization of harmonic-resonance.
  - [Website Hosting Services](#website-hosting-services):
    - [AWS](#aws): Amazon web services are used to host this site utilizing:
      - [S3 Linux environment](#s3-linux-environment): Virtualization of a Linux environment on an S3 machine.
      - [Apache Web server](#apache-web-server): An open-source HTTP web-server.
      - [Version Control](#version-control):
        - [GitHub](#github): Github is used to maintain version control of the project.
- [Resources and References](/resources): A listing of all resources, sources, and inspiration utilized in the production of this website.

## Definitions and Terminology:

## Frequently Asked Questions:

## System Overview:

This project is a full-stack development, utilizing a cloud-hosted linux environment on [AWS S3](https://aws.amazon.com/s3/), an [Apache](https://httpd.apache.org/) web server, version-control through [GitHub](https://github.com/codyryandesign/website), a static-site generator, [Jekyll](https://jekyllrb.com/), and sketch renderings built in The [Processing Foundation's](https://processing.org/) [P5JS](https://p5js.org/) with additional features added through community [library extensions](https://p5js.org/libraries/).  

This project utilizes a number of libraries and toolsets across multiple languages. A complete list of resources used for this project can be found [here](/resources/).

- ### Static Site Generation:
  - #### What Is A Static Site?  
A static site is one or more HTML documents stored on a server and delivered to the User when they visit the website. Static site documents are presented to the User in a mostly unaltered format from how they are stored within the server. Because static-site files do not need to be created or changed on the fly, static-sites often load faster and react more quickly to User navigation needs.
  - #### What Is A Dynamic Site?  
A dynamic site is in many ways the opposite of a static site. Instead of delivering content to the User as it is stored on the server, content in generated, based on User needs and interactions, by a server-side scripting language (like [PHP](https://php.net/)).
  - #### Static v Dynamic Sites  
  For more information on how static and dynamic sites differ, check out [this handy presentation](http://nilclass.com/courses/what-is-a-static-website/#1) by Nilclass outlining the key differences between the two implementations.
    - Take-aways:
      - Static Sites Are:
        - Flexible
        - Cheap
        - Very efficient
        - Incredibly fast
        - Best-fit for content that rarely changes over time
        - Easily transferrable between hosting services
        - More Secure
      - Dynamic Sites Are:
        - Pages are created through run-time server-side scripting
        - Can utilize popular and familiar web-tools, like Wordpress.
        - Slower compared to static sites

  - #### What Is A Static-Site Generator?
One of the biggest complaints when it comes to managing a static site is page-management and updates. In earlier implementations of static sites, before dynamic sites were around, there was constant maintenance and updating of static website pages when changes were required. If you wanted to make the same change to every page on your site, you would have to manually edit the HTML of each page.  
In order to address this issue, many tools have been created that allow for many static site pages to be generated quickly and easily through a templating process. The output from a static-site generator is ultimately just static HTML files and assets, and can easily be transferred to a host service. For this website, I decided to use a Ruby-based SSG called Jekyll to quickly build site assets from a minimal code-base.
    - Jekyll, A Static-Site Generator
      - Jekyll's Toolset:
        - HTML5
        : The most-recent implementation of the [Hyper-text Markup Language](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) standard for communicating between computers on the internet.
        - CSS
        : A [declarative styling language](https://developer.mozilla.org/en-US/docs/Web/CSS) for specifying how HTML content should be rendered on the page.
        - SCSS
        : Sometimes referred to as [SASS](https://sass-lang.com/documentation/syntax), SCSS extends the capabilities of CSS.
        - Liquid
        : A Ruby-native [templating language](https://shopify.github.io/liquid/) created by Shopify and used as part of Jekyll's theming tool-set.
        - Markdown
        : A lightweight [HTML markup language](https://daringfireball.net/projects/markdown/basics) that uses plain text conversion to make the process of writing for the web easier. The entirety of this website overview is written in Markdown and converted to HTML on build.
        - kramdown
        : A [Markdown converter](https://kramdown.gettalong.org/quickref.html#tables) written in Ruby.
        - FrontMatter
        : A [meta-data parser](https://www.npmjs.com/package/front-matter) for page-specific variables that stores data in a YAML or JSON format. Jekyll uses Frontmatter to detect what content for a page should be displayed, how pages might be ordered in a list, and how the layout of a page should be formatted, among other potential uses.
        - Rogue
        : A quick and simple [sytax-highlighting](http://rouge.jneen.net/) tool for embedded code snippets displayed on web pages.

          It can take something like this:  
          ```
          <div id="sketch-holder">
            <script type="text/javascript" src="sketch/sketch.js"></script>
          </div>
          ```
            and transform it into this:

            ``` html
            <div id="sketch-holder">
              <script type="text/javascript" src="sketch/sketch.js"></script>
            </div>
            ```
        - minima Theme
        : The [base theme](https://github.com/jekyll/minima) assets for building Jekyll's default site. This site utilizes an extension of the minima theme by [Benjamin Habert](https://github.com/BenjaminHabert/jekyll-p5-portfolio) to include support for P5JS sketches.

      - Jekyll's File Structure:
        -  \_config.yml
        : Settings and configuration preferences for site-wide setup.
        - \_layouts  
        : This folder contains a template for specifying the layout of the gallery page.   
        - \_includes  
        : This folder contains additional layout snippets used for repeating implementations of page headers, footers, gallery image positioning, and included dependencies.
        - #### \_data  
        : This folder contains the list of dependencies any sketch can utilize as needed. This is especially useful for multiple sketches that utilize the same dependencies.  
        - \_projects  
        : Each sub-folder within the projects folder contains a P5JS sketch, it's associated .js helper files, and a Markdown document that builds to HTML. See the [P5JS Project File Structure](#p5js-project-file-structure) section for more details.
        - \_site  
        : When Jekyll builds the site, this folder is populated with all the static files needed to implement the static site. This folder can then be uploaded to a web host and deployed.
        - Site Pages  
        The individual sections of the site.
          - gallery.md:  
          A basic home page for selecting from available sketches.
          - introduction.md:  
          A page dedicated to introducing and explaining the functionalities and goals of this project. You are currently viewing this page.
          - resources.md:  
          A page listing all relevant resources, references, and inspiration utilized in the creation of this website project.
        - assets:  
        This folder contains default assets and the SCSS styling for the minima theme.
        - Gemfile:  
        A Ruby file containing a list of gems needed for the project to execute properly.
        - gemfile.lock:  
        A container for housing all gems specified in the Gemfile.
- ### Processing P5JS:

  - #### P5JS Project File Structure:
    - #### [p5.js](https://p5js.org/)
    A Javascript library, based off the original Java library [Processing](http://processing.org/), made for artists, designers and creative coders with a robust toolset for drawing in 2D and 3D on the web.
    - #### [p5.dom](https://p5js.org/reference/#/libraries/p5.dom)
    A library extension for P5JS that allows for easy DOM element manipulation through the browser.
    - #### sketch.js
    The main file for executing sketch processes.
    - #### [quicksettings.js](https://github.com/bit101/quicksettings)

    - #### [p5.gui](https://github.com/bitcraftlab/p5.gui)
    A P5JS-compatible library extension of quicksettings that allows for quick, clean GUI panel generation from minimal code. 
    - Example Custom Classes:
      - Particle.js
      :
      - Boundary.js
      :
- ### Sketch Gallery

  - #### Sketch Layout and Controls:
    - Sketch Title:
    - Sketch Description:
    - Interactivity Options:
      - GUI Controls:

        - Toggling GUI Visibility:

        - Moving GUI Panels Within Window:

        - Collapsing GUI Panels:

        - Manipulating Sketch Variables:

    - The Canvas Window:  

      - Mouse Interactions With The Canvas:

      - Reloading Randomized Conditions:

      - Capturing The Canvas:

    - Sketch Manipulation Suggestions:  
    ##### Sketch-specific suggestions on how to manipulate GUI variables and interact with the canvas. These suggestions merely guide the viewer towards particular experiences with the sketch, and are only a fraction of possible sketch alterations.

|[return to top of page](#)|
|:------------------------:|
| [view project resources](/resources) |
