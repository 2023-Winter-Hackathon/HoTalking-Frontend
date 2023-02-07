import { Routes, Route } from "react-router-dom";
import Header from "../components/common/header";
import Write from "../components/common/wrtie";
function Router() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/write" element={<Write/>}/>
      </Routes>
    </>
  );
}

export default Router;
