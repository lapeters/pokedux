import React from 'react';
import Search from './scenes/Search/Search';

function Home() {
  return (
    <div className="col--12">
      <div className="row">
        <div className="col--6">
          <h2>Side Header</h2>
        </div>
        <Search />
      </div>
    </div>
  );
}
export default Home;
