import React from 'react';

const BillsPageData = (props) => {
    const {_id, name, email, phone} = props.bills;

    const handleDelete = (id) => {
         fetch(`http://localhost:5000/billsDelete/${id}`,{
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
            <td>{(new Date()).getFullYear()}</td>
            <td>
                <button type="button" className="btn btn-primary me-2">Edit</button>
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(_id)}>Delete</button>
            </td>
        </tr>
    );
};

export default BillsPageData;