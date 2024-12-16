import { useEffect, useState } from 'react';
import './App.css';

import { Game } from './class/Game';
import { TetrisPage } from './components/page/TetrisPage';
import { OperationInstruction } from './components/page/OperationInstruction';
import { PrimaryButton } from './components/atom/PrimaryButton';

let falltime: number = 1000;
let Tetris = new Game();
let gameTimer: NodeJS.Timer;
let gameTimer2: NodeJS.Timer;
let isFirstClick: boolean = true;
export let isCanMove: boolean = false;

function App() {
  const [newGame, setNewGame] = useState(Tetris.field.board);
  const [newNextMino, setNewNextMino] = useState(Tetris.nxMinoList);
  const [isChange, setIsChange] = useState(false);

  const setNewGameField = () => {
    let newGameField: Array<Array<number>> = [];

    Tetris.field.board.forEach((row: Array<number>) => {
      let newrow = [...row];
      newGameField.push(newrow);
    });
    setNewNextMino(Tetris.nxMinoList);
    setNewGame(newGameField);
  };

  function mainGameInterval() {
    if (!isCanMove || Tetris.isFinish) {
      alert('Game Over!');
      isCanMove = false;
      clearInterval(gameTimer);
      return;
    }
    Tetris.mainGame();
    setNewGameField();
  }

  const keyEventListener = (e: KeyboardEvent): void => {
    if (!isCanMove || Tetris.isFinish) {
      return;
    }
    isCanMove = false;

    switch (e.key) {
      case 'ArrowLeft':
        Tetris.minoVx = -1;
        break;
      case 'ArrowRight':
        Tetris.minoVx = 1;
        break;
      case 'ArrowDown':
        Tetris.minoVy = 1;
        break;
      case 'a':
        Tetris.minoVr = 1;
        break;
      case 'd':
        Tetris.minoVr = -1;
        break;
      case 'w':
        Tetris.exchangeHoldMino();
        break;
      default:
        break;
    }
    isCanMove = true;
    Tetris.MoveMino();
    setNewGameField();
  };

  useEffect(() => {
    document.body.addEventListener('keydown', keyEventListener);
    return () => {
      document.body.removeEventListener('keydown', keyEventListener);
    };
  }, []);

  useEffect(() => {
    if (isCanMove) {
      gameTimer = setInterval(mainGameInterval, falltime);
      return () => {
        clearInterval(gameTimer);
      };
    }
  }, [isCanMove]);

  const onGameStart = () => {
    isCanMove = true;

    // キー操作割り当て
    // s:左回転　f:右回転　→:右移動 ←:左移動 ↓:落下
    if (isFirstClick) {
      isFirstClick = false;
    }

    Tetris.selectNxMino();
    Tetris.putMino();
    setNewGameField();
    setNewNextMino(Tetris.nxMinoList);
  };

  const onGameReset = () => {
    isCanMove = false;
    Tetris.resetGame();
    clearInterval(gameTimer);
    clearInterval(gameTimer2);

    setNewGameField();
    setNewNextMino(Tetris.nxMinoList);
    alert('Game Reset');
  };

  const onClickLeft = () => {
    if (isCanMove) {
      Tetris.minoVx += -1;
      Tetris.MoveMino();
      setNewGameField();
    }
  };
  const onClickRight = () => {
    if (isCanMove) {
      Tetris.minoVx += 1;
      Tetris.MoveMino();
      setNewGameField();
    }
  };
  const onClickDown = () => {
    if (isCanMove) {
      for (let i = 0; i < 20; i++) {
        Tetris.minoVy += 1;
        Tetris.MoveMino();
      }
      setNewGameField();
    }
  };
  const onClickRotate = () => {
    if (isCanMove) {
      Tetris.minoVr += 1;
      Tetris.MoveMino();
      setNewGameField();
    }
  };
  const onClickHold = () => {
    if (isCanMove) {
      Tetris.exchangeHoldMino();
    }
  };
  const onClickChange = () => {
    setIsChange(true);
  };
  return (
    <>
      {isChange ? (
        <TetrisPage
          newGame={newGame}
          holdMino={Tetris.holdMino}
          nxMinoList={newNextMino}
          onGameStart={onGameStart}
          onGameReset={onGameReset}
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
          onClickDown={onClickDown}
          onClickRotate={onClickRotate}
          onClickHold={onClickHold}
        />
      ) : (
        <>
          <OperationInstruction />
          <PrimaryButton title={"Let's Start Tetris"} onClick={onClickChange} />
        </>
      )}
    </>
  );
}

export default App;
