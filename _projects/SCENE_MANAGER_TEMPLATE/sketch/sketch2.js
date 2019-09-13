function setup() {
  rectMode(CENTER);
  const DISPLAY_WIDTH = displayWidth;
  const DISPLAY_HEIGHT = displayHeight;
  //canvas =createCanvas(DISPLAY_WIDTH, DISPLAY_HEIGHT);
  main = createGraphics(DISPLAY_WIDTH, DISPLAY_HEIGHT/3);
  main.parent('sketch-holder');
  screen1 = new ScreenManager(main);
}

function draw() {

  screen1.display(Animation2);
}

function Animation2()
{
    this.y = 0;
    this.jump = 40;
    this.draw = function()
    {
        background("teal");
        line(0, this.y, width, this.y);
        this.y++;
        if ( this.y > height )
            this.y = 0;
    }
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}
