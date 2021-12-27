import { FC } from "react";
import "./home.scss";
import Button from "../../ui/Button/Button";
import number from "../../images/numbers.jpg";

const Home: FC = () => {
  return (
    <section className="home-page">
      <div className="home-page__wrapper">
        <section className="home-page__description">
          <p>Mini-Mimi — это математика для самых маленьких.</p>
          <p>Детям от 5 лет.</p>
          <Button title="Начать заниматься" className="button button_big" />
        </section>
        <img
          src={number}
          alt="Картинка на обложке"
          className="home-page__img"
        />
      </div>
    </section>
  );
};

export default Home;
