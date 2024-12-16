import { isCanMove } from '../App';
import { getRandomInt } from '../function/getRandomInt';
import { MinoCopy } from '../function/MinoCopy';
import { Timer } from '../function/Timer';
import { Block } from './Block';
import { Field } from './Field';
import { Mino } from './Mino';

let count: number = 0;
let filledLineList: Array<number> = [];

export class Game {
  public mino: Mino;
  public nxMinoList: Array<Mino>;
  public numberOfNxMino: number;
  public holdMino: Mino | null;
  public field: Field;
  public minoVx: number;
  public minoVy: number;
  public minoVr: number;
  public startMinoX: number;
  public startMinoY: number;
  public isFalled: boolean;
  public isHold: boolean;
  public isFinish: boolean;

  constructor() {
    this.numberOfNxMino = 4;
    this.holdMino = null;
    this.field = new Field();
    this.minoVx = 0;
    this.minoVy = 0;
    this.minoVr = 0;
    this.startMinoX = 6;
    this.startMinoY = 2;
    this.mino = this.selectMino(this.startMinoX, this.startMinoY);
    this.nxMinoList = this.randomSelectNxMIno();
    this.isFalled = false;
    this.isHold = false;
    this.isFinish = false;
  }

  public mainGame = () => {
    // console.log("MainGame");
    if (!isCanMove) {
      return;
    }

    // 処理前の時刻を取得
    Timer('start');

    count += 1;
    // console.log(`インターバルカウント：${count}`)

    this.minoVy = 1;
    this.MoveMino();

    // 落ちたらミノ追加
    if (this.isFalled) {
      this.isFalled = false;
      this.isHold = false;

      // ラインを消すか調べる
      filledLineList = this.field.findLineFilled();
      if (filledLineList.length) {
        console.log(filledLineList);
        this.field.deleteFilledLine(filledLineList);
        console.log('delete finish');
      }

      // ゲーム終了
      if (this.isFillField()) {
        this.isFinish = true;
        return;
      }
      this.selectNxMino();
      this.putMino();
    }

    // 終了時刻
    Timer('stop', 'Main');

    // if (this.isFillField()) {
    //   alert('after all');
    // }
  };

  // 衝突判定
  private isMinoMovable(mino: Mino, field: Field) {
    let blocks = mino.draw();
    return blocks.every((b: Block) => field.tileAt(b.x, b.y) === 0);
  }

  // ミノを動かす
  public MoveMino = () => {
    this.deleteMino();

    // 左右移動
    if (this.minoVx !== 0) {
      let futureMino: Mino = MinoCopy(this.mino);
      futureMino.x += this.minoVx;
      if (this.isMinoMovable(futureMino, this.field)) {
        this.mino.x += this.minoVx;
      }
    }
    this.minoVx = 0;

    // 落下処理
    if (this.minoVy !== 0) {
      let futureMino: Mino = MinoCopy(this.mino);
      futureMino.y += this.minoVy;
      if (this.isMinoMovable(futureMino, this.field)) {
        this.mino.y += this.minoVy;
      } else {
        // 落下終了
        this.isFalled = true;
      }
    }
    this.minoVy = 0;

    // 回転処理
    if (this.minoVr !== 0) {
      let futureMino: Mino = MinoCopy(this.mino);
      futureMino.rot += this.minoVr;
      if (this.isMinoMovable(futureMino, this.field)) {
        this.mino.rot += this.minoVr;
      }
    }
    this.minoVr = 0;

    this.putMino();
  };

  //ミノをフィールドに追加
  public putMino = () => {
    console.log('putMino');
    let nowMino = this.mino.draw();

    let c = 0;
    for (let b of nowMino) {
      c += 1;
      this.field.board[b.y][b.x] = this.mino.shape;
      console.log(b.x, b.y, this.mino.shape, this.mino.rot);
    }
  };

  //ミノをフィールドに追加
  public deleteMino = () => {
    console.log('deleteMino');
    const Mino = this.mino.draw();

    for (let b of Mino) {
      this.field.board[b.y][b.x] = 0;
      console.log(b.x, b.y, this.mino.shape, this.mino.rot);
    }
  };

  // ゲーム終了処理 真ん中のマスの頂上にブロックが積み重なったら終了
  public isFillField = (): boolean => {
    for (let x = 4; x < 8; x++) {
      if (this.field.tileAt(x, 1) !== 0) {
        return true;
      }
    }

    for (let x = 4; x < 8; x++) {
      let blocks: Array<Block> = this.nxMinoList[0].draw();
      for (let b of blocks) {
        if (this.field.tileAt(b.x, b.y)) {
          return true;
        }
      }
    }
    return false;
  };

  // ミノの初期位置を引数にとり、ミノを選択
  public selectMino = (x: number, y: number): Mino => {
    return new Mino(x, y, 0, getRandomInt(2, 9));
  };

  // ネクストミノを初期化
  private randomSelectNxMIno = (): Array<Mino> => {
    const list: Array<Mino> = [];
    for (let i = 0; i < this.numberOfNxMino; i++) {
      list.push(this.selectMino(this.startMinoX, this.startMinoY));
    }
    return list;
  };

  // ネクストミノを次に移す
  public selectNxMino = () => {
    let nxMino: Mino;
    let nxMinoList: Array<Mino> = [];

    this.mino = MinoCopy(this.nxMinoList[0]);
    for (let i = 0; i < this.numberOfNxMino - 1; i++) {
      nxMino = MinoCopy(this.nxMinoList[i + 1]);
      nxMinoList.push(nxMino);
    }
    nxMinoList.push(this.selectMino(this.startMinoX, this.startMinoY));
    this.nxMinoList = nxMinoList;
  };

  // ホールドしてるミノと操作してるミノを入れ替える
  public exchangeHoldMino = () => {
    if (this.isHold) {
      return;
    }

    this.deleteMino();
    this.isFalled = false;
    this.mino.x = this.startMinoX;
    this.mino.y = this.startMinoY;

    const holdMino = this.holdMino;

    this.holdMino = this.mino;

    if (holdMino === null) {
      this.selectNxMino();
    } else {
      this.deleteMino();
      let blocks = holdMino.draw();
      let flag: boolean = true;
      for (let b of blocks) {
        if (this.field.tileAt(b.x, b.y)) {
          flag = false;
          break;
        }
      }

      if (flag) {
        this.mino = holdMino;
      } else {
        this.mino = this.holdMino;
        this.holdMino = holdMino;
      }
    }

    this.isHold = true;
  };

  public resetGame = () => {
    this.mino = this.selectMino(this.startMinoX, this.startMinoY);
    this.numberOfNxMino = 4;
    this.nxMinoList = this.randomSelectNxMIno();
    this.holdMino = null;
    this.field.resetField();
    this.minoVx = 0;
    this.minoVy = 0;
    this.minoVr = 0;
    this.isFalled = false;
    this.isHold = false;
    this.isFinish = false;
  };
}
