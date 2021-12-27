import "./profile.scss";
import avatar from "../../images/avatar.svg";

const Profile = () => {
  return (
    <section className="profile-page">
      <div className="dashboard">
        <div className="dashboard__left">
          <div className="ava">
            <img src={avatar} alt="avatar" className="ava__img" />
            <p className="ava__name">Аноним</p>
          </div>
        </div>
        <div className="dashboard__center">
          <h2>Статистика</h2>
          <div className="box">
            <div className="box_circle_progress">
              <div className="percent">
                <div className="circle">
                  <h3>0%</h3>
                </div>
              </div>
              <h3 className="text">Общий прогресс</h3>
            </div>
            <div className="box_circle_progress">
              <div className="percent">
                <div className="circle">
                  <h3>0</h3>
                </div>
              </div>
              <h3 className="text">Достижения</h3>
            </div>
            <div className="box_circle_progress">
              <div className="percent">
                <div className="circle">
                  <h3>0</h3>
                </div>
              </div>
              <h3 className="text">Уроки</h3>
            </div>
          </div>
        </div>
        <div className="dashboard__right"></div>
      </div>
    </section>
  );
};

export default Profile;
