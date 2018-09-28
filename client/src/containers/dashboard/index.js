import React from 'react';
import './index.css';

import MenuBar from '../../components/menuBar';

const Dashboard = ({ dashBoardlogout }) => {
  return <MenuBar btnLogout={dashBoardlogout} />;
};

export default Dashboard;
