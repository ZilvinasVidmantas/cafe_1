const ballManager = new BallManager(
  '#control-container',
  '#ball-container',
  '#form-new-ball'
);

ballManager.addBall({ name: 'Blue', color: '#0000aa' });
ballManager.addBall({ name: 'Red', color: '#aa0000', initialX: 200, initialY: 50 });
ballManager.addBall({ name: 'Green', color: '#00aa00', initialX: 50, initialY: 200 });
