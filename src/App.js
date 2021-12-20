import EventPractice from "./EventPractice";
import MyComponents from "./MyComponents";
import Say from "./Say";

const App = () => {
  return (
    <>
      <MyComponents name="React" favoriteNumber={3} />
      <Say />
      <EventPractice />
    </>
  );
};

export default App;
