import React, { Component } from 'react';
import Logout from '../logout';

import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropBtn: '',
      sideNav: ''
    };
  }
  componentDidMount() {
    M.AutoInit();

    this.setState({
      dropBtn: document.querySelectorAll('.dropdown-trigger'),
      sideNav: document.querySelectorAll('.sidenav')
    });
    M.Dropdown.init(this.state.dropBtn, { hover: false });
    M.Sidenav.init(this.state.sideNav);
  }
  render() {
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content center-align">
          <li>
            <a href="">Perfil</a>
          </li>
          <li>
            <a href="">Config</a>
          </li>
          <li className="divider" />
          <Logout logout={this.props.btnLogout} />
        </ul>
        <ul className="sidenav center-align" id="mobile-demo">
          <li className="sidenav-close">
            <Link to="/clientes">Clientes</Link>
          </li>
          <li className="sidenav-close">
            <Link to="/produtos">Produtos</Link>
          </li>
          <li className="divider" />
          <Logout logout={this.props.btnLogout} />
        </ul>
        <nav>
          <div className="nav-wrapper">
            <Link to="/dashboard" className="brand-logo">
              Day Art Design
            </Link>
            <a href="" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/clientes">Clientes</Link>
              </li>
              <li>
                <Link to="/produtos">Produtos</Link>
              </li>
              <li>
                <a className="dropdown-trigger" href="" data-target="dropdown1">
                  Admin
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MenuBar;
