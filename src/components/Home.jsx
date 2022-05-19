import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import Display from './ListOfProd';
import AddProd from './AddProd';
import Details from './DetailsProd';
class Home extends React.Component{
    constructor(){
        super();

        this.state = {
            ProdItems: [
              { id: 1, Name: "chepsy", Price: 5, ProdImg: '3.png', ProdDesc: "botatos" },
              { id: 2, Name: "bread", Price: 5, ProdImg: "1.jpg", ProdDesc: "Fresh Bread" },
              { id: 3, Name: "Juice", Price: 5, ProdImg: '2.jpg', ProdDesc: "Fresh Juice" }
            ],
            ShowAdd: 1,
            prodItem:"",
          }
          this.AddNewProd = (_newProd) => {
            this.state.ProdItems.push(_newProd);
            this.setState({
              ProdItems: this.state.ProdItems,
              ShowAdd: 1
            })
          }
      
          this.RemoveProd = (_objectIndex) => {
            this.state.ProdItems.splice(_objectIndex, 1);
            this.setState({
              ProdItems: this.state.ProdItems
            })
          }
      
          this.DetailsFun = (_object) => {
            this.setState({
              ShowAdd: 3,
              prodItem:_object
            })
            console.log(_object.id);
          }
          this.back =()=>{
            this.setState({
              ShowAdd:1
            })
          }
    }
    render(){
        return(
            <>
            <Router>
         <Header/>
        <Route component={(props)=><Display Data={this.state.ProdItems} RemoveItem={this.RemoveProd} Detailsdis={this.DetailsFun} BOMProps={props}/>} path="/" exact/>
        <Route component={(props)=><AddProd AddNew={this.AddNewProd} BOMProps={props} />} path="/addproduct" exact/>
        <Route component={(props)=><Details ProdDetails={this.state.prodItem} back={this.back} BOMProps={props} />} path="/details" exact/>
      </Router>
      </>
        );
    }
}
export default Home;