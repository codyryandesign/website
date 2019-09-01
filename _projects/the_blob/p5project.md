---
layout: post
title:  "Perlin Noise Blob"
<!-- date:   2019-05-05 -->
thumbnail: thumbnail.png
dependencies:
    - p5
    - p5.dom
    - quicksettings
    - p5.gui
    - helpers
---

<div id="sketch-holder">
    <script type="text/javascript" src="sketch/sketch.js"></script>
</div>


<!-- Include markdown="1" to allow markdown conversion within a div element. -->
<div id="pageText" markdown="1" style="visibility:visible">

### This sketch example is in-progress and not all features have yet been implemented.

##### Try pressing ***'s'*** on your keyboard to bring up sketch manipulation options.

##### Take a snapshot of the canvas at any time by pressing ***'p'***.

##### Reload the page at any time to generate a new landscape. Just press 'CMD+R'.

This particle system is [based on an example by The Coding Train](https://www.youtube.com/watch?v=-6iIc6-Y-kk):
</div>

<button onclick="renderPageText();">Toggle Page Text</button>
<button id="fsbutton" onclick="toggleFullScreen();">Toggle Full Screen</button>
