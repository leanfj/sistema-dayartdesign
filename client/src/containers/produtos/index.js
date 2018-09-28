import React, { Component } from 'react';
import MenuBar from '../../components/menuBar';

class Produtos extends Component {
  render() {
    return (
      <div>
        <MenuBar btnLogout={this.props.produtosLogout} />
        <h1>Produtos</h1>
      </div>
    );
  }
}

export default Produtos;
