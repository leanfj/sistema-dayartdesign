import React, { Component } from 'react';
import MenuBar from '../../components/menuBar';

class Produtos extends Component {
  render() {
    const { produtosLogout } = this.props;
    return (
      <div>
        <MenuBar btnLogout={produtosLogout} />
        <h1>Produtos</h1>
      </div>
    );
  }
}

export default Produtos;
