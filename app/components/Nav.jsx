import React, { Component } from 'react';

import {Link, IndexLink} from 'react-router';

export default class Nav extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Connect Four</li>
            <li><IndexLink to="/" activeClassName="active-link">Game</IndexLink></li>
            <li><Link to="/ranking">Ranking</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                Done by Francisco Yip
              </li>
              <li className="menu-text icon-wrap"><div className="icon"><img src="https://randomuser.me/api/portraits/lego/3.jpg"/></div></li>
            </ul>
          </div>
      </div>
    );
  }
};
