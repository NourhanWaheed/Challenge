import React, { Component } from "react";
class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            _UserName: "",
            _Password: "",
            AdminData: {
                Name: "Nour",
                Password: 123
            },
            AccessDenied: true
        }

        this.handlerInput = (e) => {
            this.setState({
                [e.target.name]: e.target.value,
            });
        };

        this.onSubMitHandler = (e) => {
            e.preventDefault();
            console.log("Submitted");
            //get values ==>inputs
            let loginObjectUser = {
                Name: this.state._UserName,
                Pass: this.state._Password,
            };
            //Save object ==>session
            //check ==>adminObjectData===>sever
            //redirect to App ==>Admin
            if (
                this.state.AdminData.Name == this.state._UserName &&
                this.state.AdminData.Password == this.state._Password
            ) {
                sessionStorage.setItem('AdminData', JSON.stringify(loginObjectUser));
                this.props.AccessFunc(true);
            }
            else
                this.setState({
                    AccessDenied: false
                });

        };
    }

    render() {
        if (this.state.AccessDenied == false)
            return (
                <>
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
                    <div class="text-bg-danger">Access Not Vaild</div>
                </>

            );
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
}

export default Login;
