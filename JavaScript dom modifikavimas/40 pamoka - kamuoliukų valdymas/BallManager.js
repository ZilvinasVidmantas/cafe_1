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

    const row = document.createElement('div');
    row.className = 'row g-1';

    const fields = [
      { name: 'name', tag: 'input', type: 'text' },
      { name: 'speed', tag: 'input', type: 'text' },
      { name: 'color', tag: 'input', type: 'color' },
      { name: 'initial x', tag: 'input', type: 'number' },
      { name: 'initial y', tag: 'input', type: 'number' },
      { tag: 'button' },
    ].map(({ name, tag, type }) => {
      const col = document.createElement('div');
      col.className = 'col-4';
      const element = document.createElement(tag);
      switch (tag) {
        case 'input':
          element.className = 'form-control form-control-sm';
          element.type = type;
          element.id = name;
          element.name = name;

          const label = document.createElement('label');
          label.innerHTML = `<small>${name[0].toUpperCase() + name.slice(1)}</small>`;
          label.setAttribute('for', name);
          col.appendChild(label);
          col.appendChild(element);
          break;
        case 'button':
          element.className = 'btn btn-sm btn-primary w-100';
          element.innerHTML = 'Create';

          col.classList.add('d-flex', 'align-items-end');
          col.appendChild(element);
          break;
      }
      return col;
    });
    fields.forEach(field => row.appendChild(field));
    this.formNewBall.appendChild(row);
  }

  addBall = (name, color, startX, startY) => {
    const ball = new Ball(color, startX, startY);
    this.ballContainer.appendChild(ball.element);

    // ↓↓↓ kamuoliuko valdymo forma
    const container = document.createElement('div');

    const separator = document.createElement('hr');
    separator.className = 'my-2';
    container.appendChild(separator);

    const header = document.createElement('h3');
    header.className = 'h6';
    header.innerHTML = `${name} ball control`;
    container.appendChild(header);

    const layoutContainer = document.createElement('div');
    layoutContainer.className = 'd-flex justify-content-between';
    container.appendChild(layoutContainer);

    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'd-flex w-75 gap-1';
    layoutContainer.appendChild(controlsContainer);
    
    const btnDelete = document.createElement('button');
    btnDelete.innerHTML = '✕';
    btnDelete.className = 'btn btn-sm btn-danger align-self-end';
    btnDelete.addEventListener('click', ()=> console.log('Trinimas'));
    layoutContainer.appendChild(btnDelete);

    const speedField = document.createElement('div');
    speedField.className = 'w-50';
    controlsContainer.appendChild(speedField);

    const inputSpeedId = `ball-${name}-speed`;

    const labelSpeed = document.createElement('label');
    labelSpeed.innerHTML = '<small>Speed</small>';
    labelSpeed.setAttribute('for', inputSpeedId);
    speedField.appendChild(labelSpeed);
    
    const inputSpeed = document.createElement('input');
    inputSpeed.type = 'number';
    inputSpeed.id = inputSpeedId;
    inputSpeed.className = 'form-control form-control-sm';
    speedField.appendChild(inputSpeed);

    const colorField = document.createElement('div');
    colorField.className = 'w-50';
    controlsContainer.appendChild(colorField);

    const inputColorId = `ball-${name}-color`;

    const labelColor = document.createElement('label');
    labelColor.innerHTML = '<small>Color</small>';
    labelColor.setAttribute('for', inputColorId);
    colorField.appendChild(labelColor);
    
    const inputColor = document.createElement('input');
    inputColor.type = 'color';
    inputColor.id = inputColorId;
    inputColor.className = 'form-control form-control-sm';
    colorField.appendChild(inputColor);

    const btnStart = document.createElement('button');
    btnStart.innerHTML = 'Start';
    btnStart.className = 'btn btn-sm btn-success align-self-end';
    btnStart.addEventListener('click', BallManager.btnHandlerFactoryFunction(ball, btnStart));
    controlsContainer.appendChild(btnStart);

    this.controlContainer.appendChild(container);
  }
}