import React from 'react';
import './App.css';
import './App.scss';
import { Main } from 'grommet';

import HeaderHome from './components/home/header';
import Body from './components/home/body';
import Footer from './components/home/footer';

function App() {

  return (
    <Main>
      <HeaderHome />

      <Body />

      <Footer />

    </Main>
  );
}

export default App;
