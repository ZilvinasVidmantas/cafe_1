class Ball {
  #intervalId = null;
  #isMoving = false;

  constructor(selector) {
    this.element = document.querySelector(selector);
    this.element.style.top = '0px';
    this.element.style.left = '0px';
  }

  startMovement = () => {
    if (!this.#isMoving) {
      this.#intervalId = setInterval(() => {
        const x = Number(this.element.style.left.slice(0, -2)) + 1;
        const y = Number(this.element.style.top.slice(0, -2)) + 1;

        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
      }, 10);
      this.#isMoving = true;
    }
  }

  stopMovement = () => {
    if(this.#isMoving){
      clearInterval(this.#intervalId);
      this.#intervalId = null;
      this.#isMoving = false;
    }
  }
}