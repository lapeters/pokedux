import React, { Component } from 'react';
import SideHeader from './SideHeader';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { setClass: 'home' };
  }

  render() {
    const { setClass } = this.state;
    return (
      <div className="row">
        <SideHeader setClass={setClass} />
        <div className="col--6">
          <h1>Home</h1>
          <p>Lorem ipsum, Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
        </div>
      </div>
    );
  }
}
export default Home;
