import './App.css';
import AboutUser from "./pages/aboutUser/AboutUser"
import UserPage from  "./pages/userPage/UserPage"

function App() {

  const user ={
    name: 'Anna',
    age: 19
  }

  return (
    <div className="title">
      <AboutUser name={user.name} age={user.age}/>
      -------------
      <UserPage name={user.name} age={user.age}/>
    </div>
  );
}

export default App;
