import React from 'react';
import Profile from "./Profile";
class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            _UserName: "",
            _Password: "",
            accessDenied: false
        }

        this.handlerInput = (e) => {
            this.setState({
                [e.target.name]: e.target.value,
            });
        };

        this.onSubMitHandler = (e) => {
            e.preventDefault();

            if(this.state._UserName !="" && this.state._Password != "")
            {
                let loginObjectUser = {
                    Name: this.state._UserName,
                    Pass: this.state._Password,
                };
    
                sessionStorage.setItem('AdminData', JSON.stringify(loginObjectUser));
                this.setState({
                    accessDenied:true
                })
                this.props.BOMProps.history.push("/details");
            }
        };
    }

    render() {

        if (this.state.accessDenied == false) {
            return (
                <form onSubmit={this.onSubMitHandler}>
                    <div class="mb-3">
                        <label class="form-label">User Name</label>
                        <input type="text" class="form-control" name="_UserName" value={this.state._UserName} onChange={this.handlerInput} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" name="_Password" value={this.state._Password} onChange={this.handlerInput} />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            );
        }
        else
        {
            return(
               <Profile userData={this.state}/>
            );
        }



    }
}

export default Login;
