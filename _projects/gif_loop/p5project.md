<!-- ---
layout: post
title:  "GIF Loops"
date:   2019-05-06
thumbnail: thumbnail.png
dependencies:
    - p5
    - p5.dom
    - p5.sound
    - quicksettings
    - p5.gui
    - helpers
--- -->

<div id="sketch-holder">
<!-- PUT SCRIPTS HERE IN LOAD ORDER -->
    <script type="text/javascript" src="sketch/particle.js"></script>
    <script type="text/javascript" src="sketch/sketch.js"></script>
</div>

<div id="pageText" markdown="1" style="visibility:hidden">
<!-- PUT PAGE TEXT HERE -->
</div>

<button onclick="renderPageText();">Toggle Page Text</button>
<button id="fsbutton" onclick="toggleFullScreen();">Toggle Full Screen</button>
