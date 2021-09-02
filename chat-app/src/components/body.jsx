import React, { Component } from 'react';
import cat from '../images/cat.PNG';

class Body extends Component {
    state = {  }
    render() { 
        return (
            <div>
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
        );
    }
}
 
export default Body;