import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DashboardNav from '../Dashboard/DashboardNav';

const EditBillInfo = () => {
    const [bill, setBill] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const url = `https://enigmatic-depths-87750.herokuapp.com/allBills/${id}`;
        fetch(url)
            .then((response) =>response.json())
            .then(data => setBill(data));
    },[id]);

    const handleNameChange = (e) => {
        const updateName = e.target.value;
        const updateBill = {name: updateName, email:bill.email, phone: bill.phone, billAmount: bill.billAmount};
        setBill(updateBill);
    }

    const handleEmailChange = (e) => {
        const updateEmail = e.target.value;
        const updateBill = {name: bill.name, email:updateEmail, phone: bill.phone, billAmount: bill.billAmount};
        setBill(updateBill);
    }

    const handlePhoneChange = (e) => {
        const updatePhone = e.target.value;
        const updateBill = {name: bill.name, email:bill.email, phone: updatePhone, billAmount: bill.billAmount};
        setBill(updateBill);
    }

    const handleAmountChange = (e) => {
        const updateAmount = e.target.value;
        const updateBill = {name: bill.name, email:bill.email, phone: bill.phone, billAmount: updateAmount};
        setBill(updateBill);
    }
    

    const handleEditBill = (e) => {
        e.preventDefault();
        const url = `https://enigmatic-depths-87750.herokuapp.com/allBills/${id}`;
        fetch(url, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(bill)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                alert('Updated Successfully');
            }
        })
    }
    return (
        <section>
            <div>
                <DashboardNav></DashboardNav>
            </div>
            <div className="" style={{margin:'20px 40px 40px 290px'}}>
                <h2>{id}</h2>
                <form onSubmit={handleEditBill}>
                    <div className="mb-3" style={{"width":"600px"}}>
                        <label for="billing-name" className="col-form-label">Full Name</label>
                        <input type="text" onChange={handleNameChange} name="name" className="form-control" id="billing-name" value={bill.name || ""} />
                    </div>
                    <div className="mb-3" style={{"width":"600px"}}>
                        <label for="billing-email" className="col-form-label">Email Address</label>
                        <input type="email" onChange={handleEmailChange} name="email" className="form-control" id="billing-email" value={bill.email || ""} />
                    </div>
                    <div className="mb-3" style={{"width":"600px"}}>
                        <label for="billing-phone" className="col-form-label">Phone Number</label>
                        <input type="number" onChange={handlePhoneChange} name="phone" className="form-control" id="billing-phone" value={bill.phone || ""} />
                    </div>
                    <div className="mb-3" style={{"width":"600px"}}>
                        <label for="billing-amount" className="col-form-label">Bill Amount</label>
                        <input type="number" onChange={handleAmountChange} className="form-control"name="billAmount" className="form-control" id="billing-amount" value={bill.billAmount || ""} />
                    </div>
                    <div style={{"width":"600px"}}>
                        <button type="submit" className="btn btn-primary">Edit Bill</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EditBillInfo;