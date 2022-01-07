import React from 'react';

const LeadView = (props) => {
    const {name, email, phone} = props.lead;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{(new Date()).getFullYear()}</td>
            <td><button type="button" class="btn btn-primary">Edit</button></td>
        </tr>
    );
};

export default LeadView;