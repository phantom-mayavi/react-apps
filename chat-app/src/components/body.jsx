import React, { Component } from 'react';
import cat from '../images/cat.PNG';
import background from '../images/wave-3.4.png';
import { ReactComponent as WaveSvg } from '../images/wave.svg';

class Body extends Component {
    state = {  }
    render() { 
        return (
            <div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#FFF" d="…"></path>
                </svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" transform="scale(1, -1)">
                    <path fill="#0099ff" fill-opacity="1" d="M0,0L34.3,53.3C68.6,107,137,213,206,261.3C274.3,309,343,299,411,282.7C480,267,549,245,617,208C685.7,171,754,117,823,85.3C891.4,53,960,43,1029,80C1097.1,117,1166,203,1234,224C1302.9,245,1371,203,1406,181.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg> */}
                {/* <WaveSvg /> */}
                
                <div class="container" style={{ backgroundImage: `url(${background})` }}>
                    <img src={cat} alt="Cat Icon" />
                    <h1>Chat App</h1>
                    <div class="row">
                        <div class="col-md-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iusto ex, veritatis repellat consequatur excepturi labore iste natus magni nesciunt unde vitae nam, odio tenetur explicabo, minus perferendis. Dolorem, quibusdam.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="container" style={{paddingLeft : '20px', paddingRight : '140px'}}>
                <div class="d-flex justify-content-center"><h1>Features</h1></div>
                <br/><br/>
                <div class="row">
                    <div class="col-md-6">
                        <div>
                            <h5>Feature 1</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper viverra nam libero justo laoreet sit amet cursus sit. Risus sed vulputate odio ut. Ultricies mi eget mauris pharetra et.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div>
                            <h5>Feature 2</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet sed euismod nisi porta lorem. Commodo ullamcorper a lacus vestibulum sed arcu non odio.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div>
                            <h5>Feature 3</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu non diam phasellus.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div>
                            <h5>Feature 4</h5>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
 
export default Body;