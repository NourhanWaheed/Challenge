import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
class Profile extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props);
        return(
            <>
            <div class="card" style={{ width: '18rem' }}>
                <div class="card-body">
                    <h5 class="card-title">userName = {this.props.userData._UserName}</h5>
                    <h5 class="card-title">Password = {this.props.userData._Password}</h5>
                    
    
                </div>
            </div>
            </>
        );

    }
}

export default Profile;
