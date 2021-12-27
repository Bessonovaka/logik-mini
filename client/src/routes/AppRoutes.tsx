import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "../pages/Error404/Error404";
import Home from "../pages/Home/Home";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Profile from "../pages/Profile/Profile";
import LoginPage from "../pages/AuthPage/LoginPage";
import SignUpPage from "../pages/AuthPage/SignUpPage";

const AppRoutes: FC = () => {
  const user = true;
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;

/**/