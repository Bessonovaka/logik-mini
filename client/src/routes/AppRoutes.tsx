import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "../pages/Error404/Error404";
import Home from "../pages/Home/Home";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Profile from "../pages/Profile/Profile";
import AuthPage from "../pages/AuthPage/AuthPage";
import { checkAuth } from "../store/action-creators/user";
import { setScores } from "../store/action-creators/user";
import { useDispatch, connect, ConnectedProps } from "react-redux";
import { RootState } from "../store/reducers/index";
import "./app.scss";

interface Props extends PropsFromRedux {
  isAuth: boolean;
  registrateFailed: boolean;
}

const AppRoutes = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, []);
  if (props.isLoading) {
    return <div>Загрузка ...</div>;
  }

  return (
    <Router>
      <div className="app">
        <Header isAuth={props.isAuth} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isAuth={props.isAuth}
                score={props.score}
                setScore={setScores}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/login"
            element={
              <AuthPage
                isAuth={props.isAuth}
                registrateFailed={props.registrateFailed}
                title="Авторизация"
              />
            }
          />
          <Route
            path="/signup"
            element={
              <AuthPage
                registrateFailed={props.registrateFailed}
                isAuth={props.isAuth}
                title="Регистрация"
              />
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const mapState = (state: RootState) => ({
  isAuth: state.user.isAuth,
  isLoading: state.user.isLoading,
  registrateFailed: state.user.registrateFailed,
  score: state.user.score,
});

const mapDispatch = {
  checkAuth: () => ({ type: "CHECK_AUTH" }),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AppRoutes);
