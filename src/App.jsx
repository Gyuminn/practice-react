import ContextPractice from "./pages/ContextPractice";
import EventPractice from "./pages/EventPractice";
import MyComponents from "./pages/MyComponents";
import Say from "./pages/Say";

const App = () => {
  return (
    <>
      <MyComponents name="React" favoriteNumber={3} />
      <Say />
      <EventPractice />
      <ContextPractice />
    </>
  );
};

export default App;
