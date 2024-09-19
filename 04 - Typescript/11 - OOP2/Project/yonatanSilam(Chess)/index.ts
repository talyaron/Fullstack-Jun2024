class Square {
  color: string;
  occupied: boolean;
  piece?: Piece;
  html: HTMLElement;
  constructor(color: string, occupied = false) {
    this.color = color;
    this.occupied = occupied;
  }
}

// regular piece
class Piece {
  color: boolean; //true for white,false for black
  imageUrl: string;
  constructor(color: boolean, image: string) {
    this.color = color;
    this.imageUrl = image;
  }
  canIMove(row: number, colum: number) {}
  getPosition() {}
}
class Solider extends Piece {
  constructor(color: boolean, image: string) {
    super(color, image);
  }
  getPosition() {}

  canIMove(row: number, colum: number) {
    fixBackground();
    //black
    if (!this.color) {
      if (!board[row + 1][colum].occupied) {
        board[row + 1][colum].html.style.backgroundColor = "red";
      }
      if (board[row + 1][colum + 1].piece?.color) {
        board[row + 1][colum + 1].html.style.backgroundColor = "red";
      }
      if (board[row + 1][colum - 1].piece?.color) {
        board[row + 1][colum - 1].html.style.backgroundColor = "red";
      }
      //white
    } else {
      if (!board[row - 1][colum].occupied) {
        board[row - 1][colum].html.style.backgroundColor = "red";
      }
      if (
        !board[row - 1][colum - 1].piece?.color &&
        board[row - 1][colum - 1].piece?.color != undefined
      ) {
        board[row - 1][colum - 1].html.style.backgroundColor = "red";
      }
      if (
        !board[row - 1][colum + 1].piece?.color &&
        board[row - 1][colum + 1].piece?.color != undefined
      ) {
        board[row - 1][colum + 1].html.style.backgroundColor = "red";
      }
    }
  }
}
class Steeple extends Piece {
  constructor(color: boolean, image: string) {
    super(color, image);
  }
  canIMove(row: number, colum: number) {
    fixBackground();
    if (this.color) {
      for (let i = colum + 1; i < 8; i++) {
        if (
          (!board[row][i].piece?.color &&
            board[row][i].piece?.color != undefined) ||
          !board[row][i].occupied
        ) {
          board[row][i].html.style.backgroundColor = "red";
          if (
            !board[row][i].piece?.color &&
            board[row][i].piece?.color != undefined
          )
            break;
        } else {
          break;
        }
      }
      for (let i = colum - 1; i >= 0; i--) {
        if (
          (!board[row][i].piece?.color &&
            board[row][i].piece?.color != undefined) ||
          !board[row][i].occupied
        ) {
          board[row][i].html.style.backgroundColor = "red";
          if (
            !board[row][i].piece?.color &&
            board[row][i].piece?.color != undefined
          )
            break;
        } else {
          break;
        }
      }
      for (let i = row - 1; i >= 0; i--) {
        if (
          (!board[i][colum].piece?.color &&
            board[i][colum].piece?.color != undefined) ||
          !board[i][colum].occupied
        ) {
          board[i][colum].html.style.backgroundColor = "red";
          if (
            !board[i][colum].piece?.color &&
            board[i][colum].piece?.color != undefined
          )
            break;
        } else {
          break;
        }
      }
      for (let i = row + 1; i < 8; i++) {
        if (
          (!board[i][colum].piece?.color &&
            board[i][colum].piece?.color != undefined) ||
          !board[i][colum].occupied
        ) {
          board[i][colum].html.style.backgroundColor = "red";
          if (
            !board[i][colum].piece?.color &&
            board[i][colum].piece?.color != undefined
          )
            break;
        } else {
          break;
        }
      }
    } else {
      for (let i = colum + 1; i < 8; i++) {
        if (
          (board[row][i].piece?.color &&
            board[row][i].piece?.color != undefined) ||
          !board[row][i].occupied
        ) {
          board[row][i].html.style.backgroundColor = "red";
          if (
            board[row][i].piece?.color &&
            board[row][i].piece?.color != undefined
          )
            break;
        } else {
          break;
        }
      }
      for (let i = colum - 1; i >= 0; i--) {
        if (
          (board[row][i].piece?.color &&
            board[row][i].piece?.color != undefined) ||
          !board[row][i].occupied
        ) {
          board[row][i].html.style.backgroundColor = "red";
          if (
            board[row][i].piece?.color &&
            board[row][i].piece?.color != undefined
          )
            break;
        } else {
          break;
        }
      }
      for (let i = row - 1; i >= 0; i--) {
        if (
          (board[i][colum].piece?.color &&
            board[i][colum].piece?.color != undefined) ||
          !board[i][colum].occupied
        ) {
          board[i][colum].html.style.backgroundColor = "red";
          if (
            board[i][colum].piece?.color &&
            board[i][colum].piece?.color != undefined
          )
            break;
        } else {
          break;
        }
      }
      for (let i = row + 1; i < 8; i++) {
        if (
          (board[i][colum].piece?.color &&
            board[i][colum].piece?.color != undefined) ||
          !board[i][colum].occupied
        ) {
          board[i][colum].html.style.backgroundColor = "red";
          if (
            board[i][colum].piece?.color &&
            board[i][colum].piece?.color != undefined
          )
            break;
        } else {
          break;
        }
      }
    }
  }
}
class Horseman extends Piece {
  constructor(color: boolean, image: string) {
    super(color, image);
  }
}
class Runner extends Piece {
  constructor(color: boolean, image: string) {
    super(color, image);
  }
}
class Queen extends Piece {
  constructor(color: boolean, image: string) {
    super(color, image);
  }
}
class King extends Piece {
  constructor(color: boolean, image: string) {
    super(color, image);
  }
}
//create the board
const board: Square[][] = [];
function main() {
  try {
    const game = document.querySelector("#game");
    if (!game) throw new Error("not find #game");
    for (let i = 0; i < 8; i++) {
      const rowArray: Square[] = [];
      for (let n = 0; n < 8; n++) {
        const isGreen = (i + n) % 2 === 0;
        const color = isGreen ? "green" : "white";
        rowArray.push(new Square(color));
      }
      board.push(rowArray);
    }
    //put pieces
    putSteeple(false, 0, 0);
    putHorseman(false, 0, 1);
    putRunner(false, 0, 2);
    putQueen(false, 0, 3);
    putKing(false, 0, 4);
    putRunner(false, 0, 5);
    putHorseman(false, 0, 6);
    putSteeple(false, 0, 7);

    putSteeple(true, 7, 0);
    putHorseman(true, 7, 1);
    putRunner(true, 7, 2);
    putQueen(true, 7, 3);
    putKing(true, 7, 4);
    putRunner(true, 7, 5);
    putHorseman(true, 7, 6);
    putSteeple(true, 7, 7);

    putSolider(false, 4, 6);
    putSolider(true, 2, 5);
    putSteeple(true, 4, 3);

    for (let i = 0; i < board[1].length; i++) {
      putSolider(false, 1, i);
    }
    for (let i = 0; i < board[6].length; i++) {
      putSolider(true, 6, i);
    }
    for (let i = 0; i < 8; i++) {
      for (let n = 0; n < 8; n++) {
        const square = document.createElement("div");
        square.addEventListener("click", () => active(i, n));
        const isGreen = (i + n) % 2 === 0;
        const color = isGreen ? "green" : "beige";
        square.classList.add(`${color}`);

        if (board[i][n].occupied) {
          const img = document.createElement("img");
          img.src = board[i][n].piece?.imageUrl || "";
          square.appendChild(img);
        }
        board[i][n].html = square;
        game.appendChild(square);
      }
    }
  } catch (e) {
    console.error(e);
  }
}
function active(row: number, colum: number) {
  const piece = board[row][colum].piece;
  piece?.canIMove(row, colum);
  console.log(board[row][colum].piece);
}

function fixBackground() {
  for (let i = 0; i < 8; i++) {
    for (let n = 0; n < 8; n++) {
      const isGreen = (i + n) % 2 === 0;
      const color = isGreen ? "green" : "beige";
      board[i][n].html.style.backgroundColor = color;
    }
  }
}

function putSteeple(color: boolean, row: number, colum: number) {
  const imgBlack: string =
    "./chessPicecs/צילום_מסך_2024-09-15_230859-removebg-preview.png";
  const imgWhite: string = "./chessPicecs/צריח_לבן-removebg-preview.png";

  const img = color ? imgWhite : imgBlack;
  const steeple = new Steeple(color, img);
  board[row][colum].piece = steeple;
  board[row][colum].occupied = true;
}

function putHorseman(color: boolean, row: number, colum: number) {
  const imgBlack: string = "./chessPicecs/פרש_שחור-removebg-preview.png";
  const imgWhite: string = "./chessPicecs/פרש_לבן-removebg-preview.png";

  const img = color ? imgWhite : imgBlack;
  const steeple = new Horseman(color, img);
  board[row][colum].piece = steeple;
  board[row][colum].occupied = true;
}

function putRunner(color: boolean, row: number, colum: number) {
  const imgBlack: string = "./chessPicecs/רץ_שחור-removebg-preview.png";
  const imgWhite: string = "./chessPicecs/רץ_לבן-removebg-preview.png";

  const img = color ? imgWhite : imgBlack;
  const steeple = new Runner(color, img);
  board[row][colum].piece = steeple;
  board[row][colum].occupied = true;
}

function putQueen(color: boolean, row: number, colum: number) {
  const imgBlack: string = "./chessPicecs/מלכה_שחורה-removebg-preview.png";
  const imgWhite: string = "./chessPicecs/מלכה_לבנה_-removebg-preview.png";

  const img = color ? imgWhite : imgBlack;
  const steeple = new Queen(color, img);
  board[row][colum].piece = steeple;
  board[row][colum].occupied = true;
}

function putKing(color: boolean, row: number, colum: number) {
  const imgBlack: string = "./chessPicecs/מלך_שחור-removebg-preview.png";
  const imgWhite: string = "./chessPicecs/מלך_לבן-removebg-preview.png";

  const img = color ? imgWhite : imgBlack;
  const steeple = new King(color, img);
  board[row][colum].piece = steeple;
  board[row][colum].occupied = true;
}

function putSolider(color: boolean, row: number, colum: number) {
  const imgBlack: string = "./chessPicecs/חייל_שחור-removebg-preview.png";
  const imgWhite: string = "./chessPicecs/חייל_לבן-removebg-preview.png";
  if (row <= board.length && row <= board[row].length) {
    const img = color ? imgWhite : imgBlack;
    const steeple = new Solider(color, img);
    board[row][colum].piece = steeple;
    board[row][colum].occupied = true;
  }
}
// putSolider(false,2,0);
console.log(board);
