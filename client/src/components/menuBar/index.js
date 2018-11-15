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

    const { dropBtn, sideNav } = this.state;

    M.Dropdown.init(dropBtn, { hover: false });
    M.Sidenav.init(sideNav);
  }
  render() {
    const styleMenu = {
      padding: '0 20px'
    };
    const { btnLogout } = this.props;
    return (
      <div className="row">
        <ul id="dropdown1" className="dropdown-content center-align">
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
          <li>
            <a href="">Config</a>
          </li>
          <li className="divider" />
          <Logout logout={btnLogout} />
        </ul>
        <ul className="sidenav center-align" id="mobile-demo">
          <li className="sidenav-close">
            <Link to="/clientes">Clientes</Link>
          </li>
          <li className="sidenav-close">
            <Link to="/produtos">Produtos</Link>
          </li>
          <li className="divider" />
          <li className="sidenav-close">
            <Link to="/perfil">Perfil</Link>
          </li>
          <li className="sidenav-close">
            <a href="">Config</a>
          </li>
          <li className="divider" />
          <Logout logout={btnLogout} />
        </ul>
        <nav>
          <div className="nav-wrapper" style={styleMenu}>
            <Link to="/dashboard" className="brand-logo">
              Day Art
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
