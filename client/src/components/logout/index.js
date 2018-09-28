import React from 'react';
import './inhdex.css';

const Logout = ({ logout }) => {
  return (
    <button
      className="waves-effect waves-light red btn sidenav-close logout-btn"
      onClick={logout}
    >
      Logout
    </button>
  );
};

export default Logout;
