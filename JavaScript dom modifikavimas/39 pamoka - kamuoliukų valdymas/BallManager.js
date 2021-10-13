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

  constructor(controlContainerSelector, ballContainerSelector) {
    this.controlContainer = document.querySelector(controlContainerSelector);
    this.ballContainer = document.querySelector(ballContainerSelector);
    this.createNewBallForm();
  }

  createNewBallForm = () => {
    // Va Čia
  }

  addBall = (name, color, startX, startY) => {
    const ball = new Ball(color, startX, startY);
    this.ballContainer.appendChild(ball.element);
    const ballControlsContainer = document.createElement('div');

    const separator = document.createElement('hr');

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