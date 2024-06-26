import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Login from "./components/Login/Login";
import SignIn from "./components/SignIn/SignIn";
import RequiredAuth from "./components/Required Auth/RequiredAuth";
import Shpment from "./components/Shipment/Shpment";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route
          path="/inventory"
          element={
            <RequiredAuth>
              <Inventory></Inventory>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/shipment"
          element={
            <RequiredAuth>
              <Shpment></Shpment>
            </RequiredAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="signin" element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
