import './App.css';

function AboutUs () {
  return(
     <div>
       <h1>Contact</h1>
       <p>+996555 555 555</p>
     </div>
  )
}

function Portfolio () {
  return(
      <ul>
        <li>Microsoft devoloper</li>
        <li>Facebook devoloper</li>
        <li>Apple devoloper</li>
      </ul>
  )
}


function App() {
  return (
    <div className="App">
      <AboutUs/>
      <Portfolio/>
    </div>
  );
}

export default App;

