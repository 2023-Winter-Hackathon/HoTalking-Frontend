import { Routes, Route } from "react-router-dom";
import Header from "../components/common/header";
import Home from "../components/home";
import AuthLoadingPage from "../pages/auth/authLoadingPage";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<AuthLoadingPage />} />
      </Routes>
    </>
  );
}

export default Router;
