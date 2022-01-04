import "./kviz.scss";
import { FC, useEffect, useState } from "react";
import berry_1 from "../../static/images/fruits/berry.png";
import berry_2 from "../../static/images/fruits/strawberry.png";
import berry_3 from "../../static/images/fruits/stoberry.png";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

interface Props {
  title: string;
  a: number;
  b: number;
  key: string;
  setScore: Function;
  score: number;
}

const Kviz: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState<string>("");
  const [wrongAnswerBtnId, setWrongAnswerBtnId] = useState<string>("");
  const [answerArr, setAnswerArr] = useState<Array<number>>([]);
  const arrayA: Array<number> = [];
  const arrayB: Array<number> = [];
  let a = props.a;
  let b = props.b;

  while (a !== 0) {
    arrayA.push(1);
    a = a - 1;
  }

  while (b !== 0) {
    arrayB.push(1);
    b = b - 1;
  }

  function buttonClick(e: any) {
    setAnswer(e.target.value);
    if (Number(e.target.value) === props.a + props.b) {
      dispatch(props.setScore(props.score + 1));
    } else {
      setWrongAnswerBtnId(e.target.id);
    }
  }

  function getRandomElement(min: number, max: number) {
    const randomNumbers = Array<number>();
    randomNumbers.push(props.a + props.b);
    for (let counter = 0; counter < 3; counter++) {
      let num;
      do {
        num = Math.floor(Math.random() * (max - min) + min);
      } while (randomNumbers.includes(num));
      randomNumbers.push(num);
    }
    randomNumbers.sort();
    return randomNumbers;
  }

  useEffect(() => {
    setAnswerArr(getRandomElement(1, 10));
  }, []);

  return (
    <div className="kviz__container">
      <h1 className="kviz__title">
        Сложи {props.a} и {props.b}:
      </h1>
      <div className="kviz__question">
        <div>
          {arrayA.map((el) => (
            <img
              key={uuidv4()}
              className="kviz__img"
              src={berry_1}
              alt="ягодка"
            />
          ))}
        </div>
        <div className="kviz__text">+</div>
        <div>
          {arrayB.map((el) => (
            <img
              key={uuidv4()}
              className="kviz__img"
              src={berry_2}
              alt="ягодка"
            />
          ))}
        </div>
      </div>
      {Number(answer) === props.a + props.b ? (
        <div className="kviz__answer">Отлично!</div>
      ) : (
        <div className="kviz__answer">
          {answerArr.map((btn, i) => (
            <button
              onClick={buttonClick}
              className={`button button_white ${
                i === Number(wrongAnswerBtnId) &&
                wrongAnswerBtnId &&
                "button_wrong"
              }`}
              value={btn}
              key={uuidv4()}
              id={String(i)}
            >
              {btn}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Kviz;
