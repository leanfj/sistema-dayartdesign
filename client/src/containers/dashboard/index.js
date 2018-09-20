import React from "react";
import "./index.css";

import Clientes from "../../components/clientes";
import Produtos from "../../components/produtos";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MenuBar from "../../components/menuBar";

const Dashboard = ({ dashBoardlogout }) => {
  return (
    <Router>
      <div>
        <MenuBar logout={dashBoardlogout} />
        <Route path="/dashboard/clientes" exact component={Clientes} />
        <Route path="/dashboard/produtos" exact component={Produtos} />
      </div>
    </Router>
  );
};

export default Dashboard;
