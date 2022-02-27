import Announcment from "./components/Announcment";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch ,Route,Routes } from 'react-router-dom';
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Products from "./components/Products";

const App = () => {
  return <>
  <Router>    
    <Announcment/>
    <NavBar/>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/login' element={<LogIn />}/>
      <Route path='/register' element={<Register />} />
      <Route path='/products' element={<Products />} />
      <Route path='/cart' element={<Cart />}/>
    </Routes>
    <Newsletter/>
    <Footer/>
    </Router>
    </>;
};

export default App;