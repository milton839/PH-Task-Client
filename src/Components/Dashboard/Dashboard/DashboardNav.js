import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as SiIcons from "react-icons/si";
import { Link } from 'react-router-dom';
import manImage from '../../../images/man.jpg';
import './DashboardNav.css';

const sidebarData = [
    {
        title:'Home',
        path: '/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text',
    },
    {
        title:'Billing',
        path: '/billspage',
        icon:<SiIcons.SiGoogleads/>,
        cName:'nav-text',
    },
    {
        title:'Contacts',
        path: '/contacts',
        icon:<AiIcons.AiFillContacts/>,
        cName:'nav-text',
    },
    {
        title:'Deals',
        path: '/deals',
        icon:<FaIcons.FaIdeal/>,
        cName:'nav-text',
    },
    {
        title:'Accounts',
        path: '/accounts',
        icon:<MdIcons.MdAccountCircle/>,
        cName:'nav-text',
    },
]

const DashboardNav = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    const [info, setInfo] = useState({});

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {
        
        const billInfo = {
            name:info.name,
            email:info.email,
            phone:info.phone,
            billAmount:info.billAmount,
            time:new Date().toLocaleDateString(),
        }

        const url = `http://localhost:5000/addNewBill`;
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(billInfo)
        })
        .then(res => {
            console.log(res);
        });
    }
    return (
        <IconContext.Provider value={{color:'#fff'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <div className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><FaIcons.FaPlus />Add New Bill</button>

                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">New Bill</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label for="billing-name" className="col-form-label">Full Name</label>
                                            <input type="text" onBlur={handleBlur} name="name" className="form-control" id="billing-name" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="billing-email" className="col-form-label">Email Address</label>
                                            <input type="email" onBlur={handleBlur} name="email" className="form-control" id="billing-email" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="billing-phone" className="col-form-label">Phone Number</label>
                                            <input type="number" onBlur={handleBlur} name="phone" className="form-control" id="billing-phone" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="billing-amount" className="col-form-label">Bill Amount</label>
                                            <input type="number" onBlur={handleBlur} name="billAmount" className="form-control" id="billing-amount" />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-primary">Add Bill</button>
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                        </div>
                </div>
                    <div className="me-4">
                        <div className="btn-group">
                                <img data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" src={manImage} alt="" className="img-fluid rounded-circle" style={{width:'40px', height:'40px', cursor:'pointer'}}/>
                            <ul className="dropdown-menu dropdown-menu-lg-end">
                                <li><Link to="/edit-profile" className="dropdown-item">Edit Profile</Link></li>
                                <li><Link to="/login" className="dropdown-item">Log Out</Link></li>
                            </ul>
                        </div>
                    </div>
            </div>
            <nav className="nav-menu">
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    </li>
                    {
                        sidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </IconContext.Provider>
    );
};

export default DashboardNav;