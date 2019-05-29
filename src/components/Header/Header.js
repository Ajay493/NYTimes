import React, { Component } from 'react';
import './Header.scss'

class Header extends Component {
  render() {
    return (
      <header>
        <span className="logo" onClick={() => (window.location = '/')}>
          NY Times Most popular
				</span>
      </header>
    );
  }
}
export default Header;