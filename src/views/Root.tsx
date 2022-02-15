import React, { FC } from "react";
import GlobalStyle from "../theme/GlobalStyle";
import { Route, Routes } from "react-router-dom";
// views
import NavigationView from "./NavigationView";
import HomeView from "./HomeView";
import ProductsListView from "../views/ProductsListView";
import LoginView from "./LoginView";
import AdminPanelView from "./AdminPanelView";

const Root: FC = () => {
  return (
    <>
      <GlobalStyle />

      <NavigationView />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/products" element={<ProductsListView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/admin" element={<AdminPanelView />}></Route>
      </Routes>
    </>
  );
};

export default Root;
