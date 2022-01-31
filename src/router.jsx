import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyComponents from "./pages/MyComponents";
import Say from "./pages/Say";
import EventPractice from "./pages/EventPractice";
import ContextPractice from "./pages/ContextPractice";
import Main from "./pages/Main";
import Header from "./components/common/Header";
import GrandParent from "./components/contextPractices/GrandParent";
import Parent from "./components/contextPractices/Parent";
import Children from "./components/contextPractices/Children";
import ReducerPractice from "./pages/ReducerPractice";
import RefPractice from "./pages/RefPractice";
import ApiPractice from "./pages/ApiPractice";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/propPractice" element={<MyComponents />} />
        <Route path="/useStatePractice" element={<Say />} />
        <Route path="/eventPractice" element={<EventPractice />} />
        <Route path="/contextPractice" element={<ContextPractice />} />
        <Route path="/contextPractice/GrandParent" element={<GrandParent />} />
        <Route path="/contextPractice/Parent" element={<Parent />} />
        <Route path="/contextPractice/Children" element={<Children />} />
        <Route path="/reducerPractice" element={<ReducerPractice />} />
        <Route path="/refPractice" element={<RefPractice />} />
        <Route path="/apiPractice" element={<ApiPractice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
