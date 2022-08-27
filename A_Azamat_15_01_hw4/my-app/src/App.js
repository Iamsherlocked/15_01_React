import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import UsersPage from "./pages/usersPage/UsersPage";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import ProductsPage from "./pages/productsPage/ProductsPage";

function App() {

  return (
    <div className="title">
      {/*<MainPage/>*/}
      {/*  <UsersPage/>*/}
      {/*  <PortfolioPage/>*/}
        <ProductsPage/>
    </div>
  );
}

export default App;
