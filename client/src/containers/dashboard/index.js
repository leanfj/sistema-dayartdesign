import React from 'react';
import './index.css';

import Clientes from '../../components/clientes';
import Produtos from '../../components/produtos';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MenuBar from '../../components/menuBar';

const Dashboard = ({ dashBoardlogout }) => {
  return (
    <Router>
      <Switch>
        <MenuBar logout={dashBoardlogout} />
        <Route path="/clientes" exact component={Clientes} />
        <Route path="/produtos" component={Produtos} />
      </Switch>
    </Router>
  );
};

export default Dashboard;
