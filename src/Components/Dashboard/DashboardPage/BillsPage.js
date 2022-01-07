import React, { useEffect, useState } from 'react';
import DashboardNav from '../Dashboard/DashboardNav';
import LeadView from './BillsPageData';

const BillsPage = () => {
    const [billsData, setBillsData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allBills')
        .then((response) =>response.json())
        .then((data) => setBillsData(data));
    })
    return (
        <section className="">
            <div>
                <DashboardNav></DashboardNav>
            </div>
            <div className="text-center" style={{margin:'20px 40px 40px 290px'}}>
                <h3>Total Records: {billsData.length}</h3>
                <table className="table table-striped table-hover">
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Created Time</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                            billsData.map(bills => <LeadView bills={bills} key={bills._id}></LeadView>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default BillsPage;