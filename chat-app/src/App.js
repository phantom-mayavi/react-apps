import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx';
import Body from './components/body.jsx';
import Footer from './components/footer.jsx';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>


  );
}

export default App;
