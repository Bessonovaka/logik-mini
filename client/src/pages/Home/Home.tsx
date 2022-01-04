import { FC, useState } from "react";
import "./home.scss";
import Button from "../../ui/Button/Button";
import number from "../../static/images/numbers.jpg";
import { IKviz } from "../../models/IKviz";

import KvizService from "../../services/KvizService";
import { Link } from "react-router-dom";
import Kviz from "../../components/Kviz/Kviz";

interface Props {
  isAuth: boolean;
  score: number;
  setScore: Function;
}

const Home: FC<Props> = (props) => {
  const [kvizs, setKvizs] = useState<IKviz[]>([]);

  async function getKvizs(e: any) {
    try {
      const response = await KvizService.fetchKvizs();
      setKvizs(response.data);
      e.target.classList.add("display-none");
    } catch (e) {
      console.log(e);
    }
  }

  if (!props.isAuth) {
    return (
      <section className="home-page">
        <div className="home-page__wrapper">
          <section className="home-page__description">
            <p>Mini-Mimi — это математика для самых маленьких.</p>
            <p>Детям от 5 лет.</p>
            <Link to="/login" className="button button_big">
              Войти
            </Link>
          </section>
          <img
            src={number}
            alt="Картинка на обложке"
            className="home-page__img"
          />
        </div>
      </section>
    );
  } else {
    return (
      <section className="home-page">
        <Button
          title="Начать заниматься"
          className="button button_big"
          submit={getKvizs}
        />
        <div className="home-page__score">Твои баллы: {props.score}</div>
        <section className="kvizs">
          {kvizs.map((kviz) => (
            <Kviz
              key={kviz._id}
              title={kviz.title}
              a={kviz.a}
              b={kviz.b}
              setScore={props.setScore}
              score={props.score}
            />
          ))}
        </section>
      </section>
    );
  }
};
export default Home;
