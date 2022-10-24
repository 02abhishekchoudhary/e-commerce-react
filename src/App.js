import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import { toast } from "react-toastify";
import ToastNotification from "./components/ToastNotification";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import { addcartItem } from "./Redux/CartSlice";
import { useDispatch } from "react-redux";
import ProductDetails from "./components/Pdp";

const App = () => {
  const [cart, setCart] = useState([]);
  const [productDetailspage, setProductDetailspage] = useState();
  const dispatch = useDispatch();

  const handleClick = (e, item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    try {
      dispatch(addcartItem(item));
      toast.success(`Product Added to Cart`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChange = (item, d) => {
    const index = cart.indexOf(item);
    const arr = cart;
    arr[index].amount += d;

    if (arr[index].amount === 0) arr[index].amount = 1;
    setCart([...arr]);
  };

  const handlePdp = (e, item) => {
    setProductDetailspage(item);
  };

  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={<Main handleClick={handleClick} handlePdp={handlePdp} />}
            ></Route>

            <Route
              exact
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  setCart={setCart}
                  handleChange={handleChange}
                />
              }
            ></Route>

            <Route exact path="/addProduct" element={<AddProduct />}></Route>
            <Route
              exact
              path="/productDetails"
              element={
                <ProductDetails
                  handleClick={handleClick}
                  productDetailspage={productDetailspage}
                />
              }
            ></Route>
          </Routes>
          <ToastNotification />
        </div>
      </Router>
    </>
  );
};

export default App;
