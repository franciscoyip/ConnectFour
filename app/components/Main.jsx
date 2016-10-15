import React, {Component} from 'react';

import Nav from 'Nav';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
}
//<Nav/>
