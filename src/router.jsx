import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MyComponents from "./pages/MyComponents";
import Say from "./pages/Say";
import EventPractice from "./pages/EventPractice";
import ContextPractice from "./pages/ContextPractice";
import Main from "./pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/propPractice" element={<MyComponents />} />
        <Route path="/useStatePractice" element={<Say />} />
        <Route path="/eventPractice" element={<EventPractice />} />
        <Route path="/contextPractice" element={<ContextPractice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
