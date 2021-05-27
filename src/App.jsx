import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
const App = () => {
  console.log("start");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    //下記のstate（num)を更新すると頭から実行される
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    //下記のstate（faceShowFlag)を更新すると頭から実行される
    setFaceShowFlag(!faceShowFlag);
  };
  /**
   * 最初だけ実行する
   */
  useEffect(() => {
    console.log("最初だけ実行");
  }, []);

  /**
   * useEffectの中身は、numの値だけ関心を持たせる
   */
  useEffect(() => {
    console.log("useEffect!!");
    //下記の条件分岐はnumの値だけに関心を持って欲しい
    if (num > 0) {
      if (num % 3 === 0) {
        //faceShowFlagがfalseのときに右側を実行
        faceShowFlag || setFaceShowFlag(true);
      } else {
        //faceShowFlagがtrueのとき右側を実行
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //numの値だけに感心を持って欲しいため
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};
export default App;
