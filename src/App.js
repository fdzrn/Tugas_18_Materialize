import React, {Component} from 'react';
import Produk from './components/Produk';
import Profil from './components/Profil';
import SlideShow from './components/SlideShow';
import {Pagination} from 'react-materialize';
class App extends Component {
  render(){
    return(
      <div>
        <Profil/>
        <SlideShow />
        <br />
        <Produk />
        <Pagination activePage={2} maxButtons={8} />
      </div>
    );
  }
}

export default App;
