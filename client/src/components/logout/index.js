import React from 'react';
import './inhdex.css';

import { Button } from 'reactstrap';

const Logout = ({ btnlogout }) => {
  return (
    <Button color="danger" className="float-right" onClick={btnlogout}>
      Logout
    </Button>
  );
};

export default Logout;
