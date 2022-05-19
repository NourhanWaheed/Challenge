import Details from "./DetailsProd";
import { useState } from "react";
import { Dropdown } from 'react-bootstrap';
let Display = (props) => {

    let [filter, setFilter] = useState("All");

    let prodItems = props.Data.map((prod, i) => {
        if (prod.Name == filter || filter == "All")
            return (
                <tr key={i}>
                    <td>{prod.id}</td>
                    <td>{prod.Name}</td>
                    <td>{prod.Price}</td>
                    <td><img
                        src={`Images/${prod.ProdImg}`}
                        style={{
                            width: 50,
                            height: 50
                        }}
                    /></td>
                    <td>{prod.ProdDesc}</td>
                    <td>
                        <button class="btn btn-primary" onClick={() => {
                            props.Detailsdis(prod);
                            props.BOMProps.history.push("/details");
                        }}>Details</button>
                        <button class="btn btn-danger" onClick={() => {
                            props.RemoveItem(i)
                        }}>Remove</button>
                    </td>

                </tr>
            );
    });

    let DropDownItems = props.Data.map((prod, i) => {
        return (
            <Dropdown.Item eventKey={prod.Name} key={i}>{prod.Name}</Dropdown.Item>
        );
    });

    let HandlerSelect=(e)=>{
        console.log(e);
        setFilter(e);
    }
    return (
        <>
            <Dropdown onSelect={HandlerSelect}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item eventKey="All">All</Dropdown.Item>
                   {DropDownItems}
                </Dropdown.Menu>
            </Dropdown>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                        <th scope="col">Descreption</th>
                        <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {prodItems}
                </tbody>
            </table>
            <button class="btn btn-primary" onClick={() => {
                props.BOMProps.history.push("/addproduct");
            }}>Add New Product</button>
        </>
    );
}

export default Display;