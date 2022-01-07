import React from 'react';
import { Link } from 'react-router-dom';

const BillsPageData = (props) => {
    const {_id, name, email, phone, billAmount} = props.bills;

    const handleDelete = (id) => {
         fetch(`https://enigmatic-depths-87750.herokuapp.com/billsDelete/${id}`,{
            method:'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            alert("Are yow Confirm for delete?")
        })
    };
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{billAmount}</td>
            <td>{(new Date()).getFullYear()}</td>
            <td>
                <Link to={`/billsPage/edit/${_id}`}>
                    <button type="button" className="btn btn-primary me-2">Edit</button>
                </Link>
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(_id)}>Delete</button>
            </td>
        </tr>
    );
};

export default BillsPageData;