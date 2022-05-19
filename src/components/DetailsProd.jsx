import { withRouter } from "react-router-dom";

let Details = (props) => {
    console.log(props);
    return (
        <>
        <div class="card" style={{ width: '18rem' }}>
            <img src={`Images/${props.ProdDetails.ProdImg}`} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Id = {props.ProdDetails.id}</h5>
                <h5 class="card-title">Name = {props.ProdDetails.Name}</h5>
                <h5 class="card-title">Price = {props.ProdDetails.Price}</h5>
                <h5 class="card-title">Descreption = {props.ProdDetails.ProdDesc}</h5>
                <button class="btn btn-primary" onClick={() => {props.BOMProps.history.push("/")}}>Back</button>

            </div>
        </div>
        </>
    );
}
export default withRouter(Details);