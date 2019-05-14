---
layout: post
title:  "Fireworks!"
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
    <script type="text/javascript" src="sketch/firework.js"></script>
    <script type="text/javascript" src="sketch/particle.js"></script>
</div>

Rockets soar into the sky, exploding when their velocity is equal to the gravitational force. When each rocket explodes, an array of particles is generated at the rocket's position, and shoot off in every direction before fading away. When all particles have faded completely they are destroyed.

Sketch Manipulation Descriptions:
- backgroundC:
##### Set the color for the background the to be rendered by using a simple color-picker interface.

- backgroundA:
##### Adjust the Alpha transparency of the background.

- rocketSpawnChance:
##### Sets the probability value for how often a rocket object will be spawned. Higher values result in more rockets.
  - ##### Frame rate will decrease as more rockets explode.

- rocketSize:
##### Adjust the size of the rocket objects.

- explosionSize:
##### Adjust the size of each rocket's maximum explosion area.

- particleDecay:
##### Adjust how quickly the explosion particles fade away.
  - ##### When particles have faded below background Alpha values, the particles are destroyed.

- gravityAmount:
##### Adjust the force of gravity on the rocket particles.

- windAmount:
##### Adjust the force and direction of wind on the rocket particles and explosion particles.

- particleVeloctiy:
##### Adjust how much velocity the explosion particles have when they detonate.

- angleMult:
##### Multiple the 'angleVal' by a factor of this value.

- targetMagnitude:
##### Tune the strength of the mouse force applied to the particles when the screen is clicked.

- zoffAdjust:
##### Adjust the rate of noise change in the z-axis. The greater the rate of change, the more erratic the particles will be.

- incAdjust:
##### Adjust the rate of noise change in the x and y-axis. The greater the rate of change, the more erratic the particles will be.

- showFlowField:
##### Render the flow field on the canvas, with each vector in the field rendered as a line pointing towards its angle of rotation.

- enableFlowField:
##### Enable or disable the flow field vector forces color preferences.

- mouseFollowEnabled:
##### Enable or disable the mouse position as a vector force applied to the particles.

This particle system is [based on an example from The Coding Train](https://thecodingtrain.com/CodingChallenges/027-fireworks.html).
