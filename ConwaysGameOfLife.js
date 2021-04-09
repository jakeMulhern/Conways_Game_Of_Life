const x = [['X', 'X', 'X'], [0,0,0], ['X', 'X', 'X']];


function gameOfLife(dish) {
  let refer = [];

  for (let i = 0; i < dish.length; i++) {
    refer[i] = [...dish[i]];
  }

  for (let i = 0; i < refer.length; i++) {
    for (let j = 0; j < refer[i].length; j++) {
      let liveNeighbors = 0;
      let currentCell = refer[i][j];

      // Check top & bottom neighbors
      for (let k = j - 1; k <= j + 1; k++) {
        if (k >= 0 && k < dish[i].length) {
          // top
          if (i - 1 >= 0) {
            if (refer[i - 1][k] === 0) {
              liveNeighbors++;
            }
          }

          // bottom
          if (i + 1 < dish.length) {
            if (refer[i + 1][k] === 0) {
              liveNeighbors++;
            }
          }
        }
      }

      // left neighbor
      if (j - 1 >= 0) {
        if (refer[i][j - 1] === 0) {
          liveNeighbors++;
        }
      }

      // right neighbor
      if (j + 1 < refer[i].length) {
        if (refer[i][j + 1] === 0) {
          liveNeighbors++;
        }
      }

      if (currentCell === 0) {
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          dish[i][j] = 'X';
        }
      } else {
        if (liveNeighbors === 3) {
          dish[i][j] = 0;
        }
      }

    }
  }

  return dish;
}

gameOfLife(x);