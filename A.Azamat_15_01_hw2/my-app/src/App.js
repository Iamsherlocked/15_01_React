import './App.css';
import AboutPage from "./pages/AboutPage/AboutPage";


function App() {
const  aboutPage = {
  title: "I am title",
  body: "Lorem ipsum bla bla bla"
  }

  return (
    <div className="App">
      <AboutPage info={aboutPage}/>
    </div>
  );
}

export default App;

