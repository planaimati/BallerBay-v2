import React, { FC, useEffect } from "react";
import GlobalStyle from "../theme/GlobalStyle";
import { Route, Routes } from "react-router-dom";
// views
import CartView from "./CartView";
import AboutView from "./AboutView";
import NavigationView from "./NavigationView";
import HomeView from "./HomeView";
import ProductsListView from "../views/ProductsListView";
import LoginView from "./LoginView";
import AdminPanelView from "./AdminPanelView";
import SingleProductView from "./SingleProductView";
///redux

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/xd";

const Root: FC = () => {
  const dispatch = useDispatch();
  const { handleSetProducts } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    fetch(`https://ballerbay-api.herokuapp.com/api/v1/products`)
      .then((response) => response.json())
      .then((data) => handleSetProducts(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GlobalStyle />

      <NavigationView />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/products" element={<ProductsListView />} />
        <Route path="/products/:id" element={<SingleProductView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/admin" element={<AdminPanelView />}></Route>
        <Route path="/cart" element={<CartView />}></Route>
        <Route path="/about" element={<AboutView />}></Route>
      </Routes>
    </>
  );
};

export default Root;
