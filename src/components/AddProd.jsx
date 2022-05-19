import React from "react";
import { withRouter } from "react-router-dom";

class AddProd extends React.Component {
    constructor() {
        super();

        this.state = {
            _id: "",
            _Name: "",
            _Price: "",
            _Img: "",
            _Desc: ""
        }

        this.HandlerInput = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }
render(){
    return(
        <div>
            <div class="mb-3">
                <label class="form-label">Id</label>
                <input type="number" class="form-control" name="_id" value={this.state._id} onChange={this.HandlerInput} />
            </div>
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control"name="_Name" value={this.state._Name} onChange={this.HandlerInput} />
            </div>
            <div class="mb-3">
                <label class="form-label">Price</label>
                <input type="text" class="form-control" name="_Price" value={this.state._Price} onChange={this.HandlerInput}/>
            </div>
            <div class="mb-3">
                <label class="form-label">Image URL</label>
                <input type="text" class="form-control" name="_Img" value={this.state._Img} onChange={this.HandlerInput}/>
            </div>
            <div class="mb-3">
                <label class="form-label">Describtion</label>
                <input type="text" class="form-control" name="_Desc" value={this.state._Desc} onChange={this.HandlerInput}/>
            </div>
            <button class="btn btn-primary" onClick={()=>{
                this.props.AddNew({id:this.state._id,Name:this.state._Name,Price:this.state._Price,ProdImg:this.state._Img,ProdDesc:this.state._Desc});
                this.props.BOMProps.history.push("/");
            }}>Submit</button>
        </div >
    );
}
}
export default withRouter(AddProd);