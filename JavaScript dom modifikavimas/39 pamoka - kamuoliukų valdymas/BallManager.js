class BallManager {
  static btnHandlerFactoryFunction = (ball, btn) => {
    return () => {
      if (btn.classList.contains('btn-success')) {
        btn.classList.replace('btn-success', 'btn-danger');
        btn.innerHTML = 'Stop';
      } else {
        btn.classList.replace('btn-danger', 'btn-success');
        btn.innerHTML = 'Start';
      }
      ball.toggleMovement();
    }
  };

  constructor(controlContainerSelector, ballContainerSelector, formNewBallSelector) {
    this.controlContainer = document.querySelector(controlContainerSelector);
    this.ballContainer = document.querySelector(ballContainerSelector);
    this.formNewBall = document.querySelector(formNewBallSelector);
    this.createNewBallForm();
  }

  createNewBallForm = () => {
    const separator = document.createElement('hr');
    separator.className = 'my-2';
    this.formNewBall.appendChild(separator);

    const formHeader = document.createElement('h3');
    formHeader.className = 'h5 mt-1';
    formHeader.innerHTML = 'Create new ball';
    this.formNewBall.appendChild(formHeader);
    // 1. Užžymėkite formoje kad nesate atlikę užduoties
    // 2. Pasidarykite 10 min pertrauka
    // 3. Tęskite toliau ir pabaikite
    // 4. Pažymėkite formoje, kad atlikote formavimą
  }

  addBall = (name, color, startX, startY) => {
    const ball = new Ball(color, startX, startY);
    this.ballContainer.appendChild(ball.element);
    const ballControlsContainer = document.createElement('div');

    const separator = document.createElement('hr');
    separator.className = 'my-2';

    const ballControlsHeader = document.createElement('h3');
    ballControlsHeader.innerHTML = `${name} ball control`;
    ballControlsHeader.className = 'h6';

    const ballControlsBtn = document.createElement('button');
    ballControlsBtn.innerHTML = 'Start';
    ballControlsBtn.className = 'btn btn-sm btn-success';
    ballControlsBtn.addEventListener('click', BallManager.btnHandlerFactoryFunction(ball, ballControlsBtn))

    ballControlsContainer.appendChild(separator);
    ballControlsContainer.appendChild(ballControlsHeader);
    ballControlsContainer.appendChild(ballControlsBtn);

    this.controlContainer.appendChild(ballControlsContainer);
  }
}