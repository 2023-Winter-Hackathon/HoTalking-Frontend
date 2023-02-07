import { Routes, Route } from "react-router-dom";
import Header from "../components/common/header";
import Write from "../components/common/wrtie";
import Home from "../components/home";
import Detail from "../components/common/detail";
import AuthLoadingPage from "../pages/auth/authLoadingPage";
function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write/>}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="/callback" element={<AuthLoadingPage />} />
      </Routes>
    </>
  );
}

export default Router;
