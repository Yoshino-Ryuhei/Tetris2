import { Block } from './Block';

export class Mino {
  public x: number;
  public y: number;
  public rot: number;
  public shape: number;

  constructor(x: number, y: number, rot: number, shape: number) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.shape = shape;
  }

  public calcBlocks = (): Array<Block> => {
    // Tミノ
    let blocks: Array<Block> = [];

    switch (this.shape) {
      case 2:
        blocks = [
          new Block(-1, 0),
          new Block(0, 0),
          new Block(1, 0),
          new Block(0, -1),
        ];
        break; //Tミノ
      case 3:
        blocks = [
          new Block(-1.5, -0.5),
          new Block(-0.5, -0.5),
          new Block(0.5, -0.5),
          new Block(1.5, -0.5),
        ];
        break; //Iミノ
      case 4:
        blocks = [
          new Block(-0.5, -0.5),
          new Block(0.5, -0.5),
          new Block(-0.5, 0.5),
          new Block(0.5, 0.5),
        ];
        break; //Oミノ
      case 5:
        blocks = [
          new Block(1, 0),
          new Block(0, 0),
          new Block(-1, 0),
          new Block(-1, -1),
        ];
        break; //Jミノ
      case 6:
        blocks = [
          new Block(-1, 0),
          new Block(0, 0),
          new Block(1, 0),
          new Block(1, -1),
        ];
        break; //Lミノ
      case 7:
        blocks = [
          new Block(-1, 0),
          new Block(0, 0),
          new Block(0, -1),
          new Block(1, -1),
        ];
        break; //Sミノ
      case 8:
        blocks = [
          new Block(1, 0),
          new Block(0, 0),
          new Block(0, -1),
          new Block(-1, -1),
        ];
        break; //Zミノ
    }

    // 回転数を正の方向（左回転）に統一&一回転にする
    let rot = (400000 + this.rot) % 4;

    // 回転する
    for (let r = 0; r < rot; r++) {
      // 90度回転
      blocks = blocks.map((b) => new Block(-b.y, b.x));
    }

    return blocks;
  };

  public draw = (): Array<Block> => {
    let blocks = this.calcBlocks();
    blocks.forEach((b) => {
      b.x += this.x;
      b.y += this.y;
      b.x = Math.floor(b.x);
      b.y = Math.floor(b.y);
    });
    return blocks;
  };
}
