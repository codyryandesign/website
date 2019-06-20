---
layout: post
title:  "Lissajous Curve Table"
<!-- date:   2019-05-05 -->
thumbnail: thumbnail.png
dependencies:
    - p5
    - quicksettings
    - p5.gui
    - helpers
---

<div id="sketch-holder">
    <script type="text/javascript" src="sketch/sketch.js"></script>
    <script type="text/javascript" src="sketch/curve.js"></script>
</div>

<!-- Include markdown="1" to allow markdown conversion within a div element. -->
<div id="pageText" markdown="1" style="visibility:hidden">

### This sketch example is in-progress and not all features have yet been implemented.

##### Try pressing ***'s'*** on your keyboard to bring up sketch manipulation options.

##### Take a snapshot of the canvas at any time by pressing ***'p'***.

##### Reload the page at any time to generate a new landscape. Just press 'CMD+R'.

The Lissajous curve table is a visual representation of harmonic complexity. At each index further into the table the increment is increased resulting in a multitude of unique ratios between row and column circles.

See Worlfram Math World's description of Lissajous curves for further detail [here](http://mathworld.wolfram.com/LissajousCurve.html).



This particle system is [based on an example by The Coding Train](https://www.youtube.com/watch?v=-6iIc6-Y-kk).

</div>

<button onclick="renderPageText();">Toggle Page Text</button>
<button id="fsbutton" onclick="toggleFullScreen();">Toggle Full Screen</button>
