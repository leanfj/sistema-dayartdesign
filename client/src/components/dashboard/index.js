import React, { Component } from 'react';
import './index.css';

import api from '../../api/api';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  usuarioLogout() {
    api.logoutUsuario().then(res => {});
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <button
          onClick={() => {
            this.usuarioLogout();
          }}
        >
          LogOut
        </button>
      </div>
    );
  }
}

export default Dashboard;
