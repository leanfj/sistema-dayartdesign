import React from 'react';
import './index.css';

import Logout from '../../components/logout';

const Dashboard = ({ dashBoardlogout }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Logout btnlogout={dashBoardlogout} />
    </div>
  );
};

export default Dashboard;
