
import './App.css';
import ResponsiveAppBar from './components/Header/ResponsiveAppBar';
// import MainPage from './components/mainpage/MainPage';
import FavorateFood from './components/mainpage/FavorateFood';
import React from "react";
import Login from './components/login/Login';
import Restaurent from './components/Restaurent/Restaurent';
import Food from './components/Food/Food';
import OrderDining from './components/order/OrderDining';
import GetApp from './components/footer/GetApp';
import Footer from './components/footer/Footer';
import OrderOnline from './components/order/OrderOnline';
import NightLife from './components/order/NightLife';
import Cart from './components/order/Cart';
import {
  BrowserRouter as Router,
  
  Routes, Route
  
} from "react-router-dom";
function App() {


 

  return (
   <div className="app">
   <Router>
   <ResponsiveAppBar/>  
   <Routes>
          <Route path="/login" element={ <Login />}/>
          <Route path="/" element={ [<FavorateFood/>, <OrderDining/>,<GetApp/>,<Footer/>]}/>
           {/* <Route path="/" element={ <MainPage/>}/> */}
           
           <Route path="/food" element={<Food/>}/>
           <Route path="/AddRes" element={<Restaurent/>}/>
      
           <Route path="/order" element={<OrderOnline/>}/>
           
           <Route path="/ordr" element={<Cart/>}/>
           <Route path="/night" element={<NightLife/>}/>
        </Routes>
   </Router>
   </div>
  );

  


}

export default App;
