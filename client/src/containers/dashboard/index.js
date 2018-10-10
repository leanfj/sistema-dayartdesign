import React from 'react';
import './index.css';

import MenuBar from '../../components/menuBar';

const Dashboard = ({ dashBoardlogout }) => {
  return (
    <div>
      <MenuBar btnLogout={dashBoardlogout} />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
