export default {
  ballObj: {
    x: 20, y: 200,
    dx: 5, dy: 5,
    rad: 10, speed: 5
  },
  brickObj: {
    x: 0.5, y: 50,
    width: 800 / 10 - 1, height: 20,
    density: 2, colors: ['blue', 'lightblue']
  },
  player: {
    name: 'jdk', lives: 5,
    score: 0, level: 1
  },
  paddleProps: {
    height: 20, width: 100,
    x: 100, color: 'orange'
  }
}