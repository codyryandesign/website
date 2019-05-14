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

## System Overview:

This project is a full-stack development, utilizing a cloud-hosted linux environment on [AWS S3](https://aws.amazon.com/s3/), an [Apache](https://httpd.apache.org/) web server, a static-site generator, [Jekyll](https://jekyllrb.com/), and sketch renderings built in The [Processing Foundation's](https://processing.org/) [P5JS](https://p5js.org/) with additional features added through community [library extensions](https://p5js.org/libraries/).  


This project utilizes a number of libraries and toolsets across multiple languages. A complete list of resources used for this project can be found [here](/resources/).
