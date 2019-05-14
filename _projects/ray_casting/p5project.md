---
layout: post
title:  "2D Ray Casting"
date:   2019-05-06
thumbnail: thumbnail.png
dependencies:
    - p5
    - quicksettings
    - p5.gui
---


##### Try pressing ***'s'*** on your keyboard to bring up sketch manipulation options.

##### Take a snapshot of the canvas at any time by pressing ***'p'***.

##### Reload the page at any time to generate a new landscape. Just press 'CMD+R'.

<!-- {%highlight html %}
<div id="sketch-holder">
  <script type="text/javascript" src="sketch/sketch.js"></script>
</div>
{% endhighlight %} -->

<div id="sketch-holder">
    <script type="text/javascript" src="sketch/sketch.js"></script>
    <script type="text/javascript" src="sketch/boundary.js"></script>
    <script type="text/javascript" src="sketch/particle.js"></script>
    <script type="text/javascript" src="sketch/ray.js"></script>
</div>

Particle objects cast rays out as they dance around a randomized landscape, creating dynamic play with light and shadow as they move. If a particle object passes through a wall, there is a chance for it to change color.

## GUI Variable Descriptions

<!-- variable|definition
    rayA| Adjust the alpha transparency of the rays.
    boundaryC| Set the **color** for the boundaries to be rendered by using a simple color-picker interface.
    numRays| Change the number of **ray objects** each particle sends out. Default is 360. -->

- backgroundC:
##### Set the color for the background the to be rendered by using a simple color-picker interface.

- backgroundA:
##### Adjust the Alpha transparency of the background.

- rayC:
##### Set the ***color*** for the casted rays to be rendered by using a simple color-picker interface.

- rayS:
##### Set the **saturation** for the casted rays to be rendered by using a simple color-picker interface. If **rayColorEnabled** is true, the particles have a chance of picking a random saturation level between **rayS** and 100 as seen below.
{%highlight js %}
random(rayS, 100);
{% endhighlight %}

- rayA:
##### Adjust the Alpha transparency of the rays.

- boundaryC:
##### Set the **color** for the boundaries to be rendered by using a simple color-picker interface.

- numRays:
##### Change the number of **ray objects** each particle sends out. Default is 360.

- rayColorEnabled:
##### Enable or disable 'rayC' **color** preferences.

- mouseFollowEnabled:
##### If enabled, one of the particles will follow the mouse around the scene.

This 2D ray cast system is [based on an example by The Coding Train](https://www.youtube.com/watch?v=-6iIc6-Y-kk).

Another excellent tutorial on ray casting [by Red Blob Games is available here](https://www.redblobgames.com/articles/visibility/).

A third tutorial on ray casting [by ncase is available here](https://ncase.me/sight-and-light/).
