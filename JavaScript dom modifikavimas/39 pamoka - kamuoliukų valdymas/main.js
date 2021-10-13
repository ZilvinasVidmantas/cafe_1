const ballManager = new BallManager(
  '#control-container',
  '#ball-container',
  '#form-new-ball'
);

ballManager.addBall('Blue', '#0000aa');
ballManager.addBall('Red', '#aa0000', 200, 50);
ballManager.addBall('Green', '#00aa00', 50, 200);
