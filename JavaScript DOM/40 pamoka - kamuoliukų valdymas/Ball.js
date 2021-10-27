class Ball {
  #intervalId = null;
  #isMoving = false;

  constructor({ color, initialX = 0, initialY = 0 }) {
    this.element = document.createElement('div');
    this.element.className = 'ball';
    this.element.style.background = `radial-gradient(#fff, ${color} 60%)`;
    this.element.style.top = `${initialY}px`;
    this.element.style.left = `${initialX}px`;
  }

  toggleMovement = () => {
    if (!this.#isMoving) {
      this.startMovement();
    } else {
      this.stopMovement();
    }
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
    if (this.#isMoving) {
      clearInterval(this.#intervalId);
      this.#intervalId = null;
      this.#isMoving = false;
    }
  }
}
