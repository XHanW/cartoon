import React from 'react';
import Header from './Header/Header';
import Content from './Content/index';
import Footer from './Footer/Footer';
import Leftside from './Side/Leftside';
import Rightside from './Side/Rightside';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Leftside />
      <Rightside />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default App;
