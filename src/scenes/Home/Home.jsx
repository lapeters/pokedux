import React from 'react';
import Search from './scenes/Search/Search';
import image from '../../assets/bgrnd.jpg';

function Home() {
  const backgroundStyles = {
    backgroundImage: `url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
  };
  return (
    <div className="home col--12">
      <div className="row">
        <div className="col--6" style={backgroundStyles} />
        <Search />
      </div>
    </div>
  );
}
export default Home;
