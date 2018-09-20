import React from 'react';
import './inhdex.css';


const Logout = ({ btnlogout }) => {
  return (
    <button className="waves-effect waves-light red btn" onClick={btnlogout}>
      Logout
    </button>
  );
};

export default Logout;
