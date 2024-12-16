type Props = {
    func:() => void;
    time:number;
}

export const loopSetTimeOut = (props:Props) :void => {
    const {func, time} = props;
    func();
    setTimeout(loopSetTimeOut,time,props);
}