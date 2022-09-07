import './App.css';
import UsersPage from "./pages/usersPage/UsersPage";
import MainPage from "./pages/mainPage/MainPage";
import Menu from "./components/menu/Menu";
import ContactPage from "./pages/contactPage/ContactPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
      <BrowserRouter>
          <Menu/>
              <Routes>
                  <Route path='/' element={<MainPage/>}/>

                  <Route path='/users' element={<UsersPage/>}/>

                  <Route path='/forms' element={<ContactPage/>}/>
              </Routes>
      </BrowserRouter>
  );
}

export default App;
