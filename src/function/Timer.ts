import { roundWithScale } from "./roundWithScale";

let startTime:number;
let endTime:number;


// デバック用　処理時間計測
export const Timer = (prop:"start" | "stop", coment?:string) => {
    switch (prop){
        case "start":
            startTime = performance.now();
            break;
        case "stop":
            endTime = performance.now();
            console.log(coment + `: ${roundWithScale(endTime-startTime, 3)}ms`);
            break;
        default:
            break;
    }

}