import React from 'react';
import Search from '../../components/Search/Search';
import image from '../../assets/images/bgrnd2.jpg';

function Home() {
  const backgroundStyles = {
    backgroundImage: `url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'right bottom',
  };
  return (
    <div className="home row">
      <div className="home__background col--6" style={backgroundStyles}>
        <div>
          <p>
            Collage by:
            {' '}
            <a href="https://www.pinterest.com/paularnold90/" target="_blank" rel="noopener noreferrer">Paul Arnold</a>
          </p>
        </div>
      </div>
      <div className="home__search col-lg-6 col--12">
        <div className="search__top">
          <h1>Pokédux</h1>
          <p>
            A Pokedex app made using React.
            <br />
            Search for a Pokemon below, names only as of now.
          </p>
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
