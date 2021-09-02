import React, { Component } from 'react';
import chatapplogo from '../images/chatapp.PNG';
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

class Header extends Component {
    state = {};

    render() {
        return (
            <div>
                <MDBNavbar expand='lg' light bgColor='light'>
                    <MDBContainer fluid>
                        {/* <MDBNavbarBrand href='#'> */}
                            <img src={chatapplogo} alt="ChatAppLogo" width="25%" height="25%"/>
                        {/* </MDBNavbarBrand> */}
                        <MDBCollapse navbar show={true}>
                            <MDBNavbarNav>
                                <MDBNavbarItem>
                                    <MDBNavbarLink active aria-current='page' href='#'>
                                        Home
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Features</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Team</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        
                                    </span>

                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Docs</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Contact</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Login</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <button type="button" class="btn btn-primary">Call Us</button>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </div>
        );
    }
}
 
export default Header;