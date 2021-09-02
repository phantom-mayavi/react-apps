import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx';
import Body from './components/body.jsx';
import Footer from './components/footer.jsx';
import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';

function App() {
  return (
    <React.Fragment>
      <MDBContainer>
        <Header />
        <Body />
        <Footer />
      </MDBContainer>

    </React.Fragment>


  );
}

export default App;
