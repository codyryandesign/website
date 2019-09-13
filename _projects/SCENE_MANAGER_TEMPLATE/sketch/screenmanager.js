class ScreenManager {
  constructor(graphic) {
    this.mgr = new SceneManager(graphic);
  }
    display(animation) {
      this.mgr.draw();
      this.mgr.showScene(animation);
    }

}
