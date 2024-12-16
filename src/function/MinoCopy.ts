import { Mino } from "../class/Mino";

export const MinoCopy = (mino:Mino):Mino => {
    let copymino = new Mino(mino.x,mino.y,mino.rot,mino.shape)
    return copymino
}