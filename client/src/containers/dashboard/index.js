import React from "react";
import "./index.css";

import Clientes from "../../components/clientes";
import Produtos from "../../components/produtos";

import { BrowserRouter as Router, Route } from "react-router-dom";

import MenuBar from "../../components/menuBar";

const Dashboard = ({ dashBoardlogout, exactRoute }) => {
  return (
    <Router>
      <div>
        <MenuBar logout={dashBoardlogout} />
        <Route path="/clientes" exact={exactRoute} component={Clientes} />
        <Route path="/produtos" exact={exactRoute} component={Produtos} />
      </div>
    </Router>
  );
};

export default Dashboard;
