import React from 'react';
import Search from './scenes/Search/Search';

function Home() {
  return (
    <div className="row">
      <div className="col--6">
        <h2>Side Header</h2>
      </div>
      <Search />
    </div>
  );
}
export default Home;
