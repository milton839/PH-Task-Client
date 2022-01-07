import React, { useEffect, useState } from 'react';
import DashboardNav from '../Dashboard/DashboardNav';
import BillsPageData from './BillsPageData';

const BillsPage = () => {
    const [billsData, setBillsData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 10;
    useEffect(() => {
        fetch(`https://enigmatic-depths-87750.herokuapp.com/allBills?page=${page}&&size=${size}`)
        .then((response) =>response.json())
        .then((data) => {
            setBillsData(data.allBills)
            const count = data.count;
            const pageNumber = Math.ceil(count/size);
            setPageCount(pageNumber);
        });
    },[page])
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
                            billsData.map(bills => <BillsPageData bills={bills} key={bills._id}></BillsPageData>)
                        }
                    </tbody>
                </table>
            </div>
            <div style={{margin:'20px 40px 40px 290px'}}>
                {
                    [...Array(pageCount).keys()].map(number => 
                        <button 
                            className = {number === page ? 'btn btn-success me-1 px-4' : 'btn btn-primary me-1 px-4'}
                            key={number}
                            onClick = {() => setPage(number)}
                            >{number+1}</button>
                        )
                }
            </div>
        </section>
    );
};

export default BillsPage;