import React, { Component } from 'react';
import SocialFollow from "./SocialFollow"


class Footer extends Component {
    state = {  }
    render() { 
        return (
            <div class="container-fluid">
                <footer>
                    <div class="row">
                        <div class="col-md-3">
                            <ul class="list-unstyled">
                                <li class="lead"><b><strong>Group 1</strong></b></li>
                                <li>Home</li>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Team</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <ul class="list-unstyled">
                                <li class="lead"><b><strong>Group 2</strong></b></li>
                                <li>Privacy Policy</li>
                                <li>Terms</li>
                                <li>FAQ</li>
                                <li>Support</li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <ul class="list-unstyled">
                                <li class="lead"><b><strong>About Us</strong></b></li>
                                <li>
                                    <p>
                                        Far far away, behind the word <br/>
                                        mountains, far from the countries <br/>
                                        Vokalia and Consonantia, there live <br/>
                                        the blind texts <br/>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <ul class="list-unstyled">
                                <li class="lead"><b><strong>Follow Us</strong></b></li>
                                <li><SocialFollow /></li>
                            </ul>
                        </div>
                    </div>
                    <div class="text-center">&copy;2018 ChatApp. All Rights Reserved</div>
                </footer>
            </div>
        );
    }
}
 
export default Footer;