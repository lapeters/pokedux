import React from 'react';
import Search from '../../components/Search/Search';
import image from '../../assets/bgrnd.jpg';

function Home() {
  const backgroundStyles = {
    backgroundImage: `url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'right bottom',
  };
  return (
    <div className="home row">
      <div className="home__background col--6" style={backgroundStyles} />
      <div className="home__search col-lg-6 col--12">
        <div className="search__top">
          <h1>Pokédux</h1>
          <p>A Pokedex app made using React.</p>
        </div>
        <div className="search__middle">
          <Search />
        </div>
        <div className="search__bottom" />
      </div>
    </div>
  );
}
export default Home;
