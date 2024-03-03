import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css";
import Badge from 'react-bootstrap/Badge'
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

export default function Navbar() {

    let data = useCart();
    const[cartView,setCartView] = useState(false)
    const navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.removeItem("authToken");
        navigate('/login'); //navigating to login page
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#000000", borderRadius: "5px" }}>
                <Link className="navbar-brand fs-1" to="/">FoodHub</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className=" navbar-nav me-auto mb-2">
                        <li className="nav-item active">
                            <Link className="nav-link active fs-5" to="/">Home</Link>
                        </li>
                    {(localStorage.getItem('authToken'))?
                        <li className="nav-item active">
                        <Link className="nav-link active fs-5" to="/MyOrder">Orders </Link>
                    </li>
                    :""}

                    </ul>
                    {(!localStorage.getItem('authToken'))?
                    <div className='d-flex'>
                        <Link className="btn bg-outline-dark text-white mx-1" style={ {backgroundColor: "#800000" }} to="/login">Login </Link>
                        <Link className="btn bg-outline-dark text-white mx-1" style={ {backgroundColor: "#800000" }} to="/createuser">SignUp </Link>
                    </div>
                    :
                    <div>
                    <div className="btn bg-outline-dark text-white mx-2" onClick={()=>{setCartView(true)}} style={ {backgroundColor: "#800000" }}>
                        My Cart {" "}
                        <Badge pbill style={ {backgroundColor: "#0000000" }}> {data.length} </Badge>
                    </div>
                    {
                        cartView?<Modal onClose={()=>{setCartView(false)}}><Cart /></Modal>:null
                    }
                    <div className="btn bg-outline-dark text-white mx-2" style={ {backgroundColor: "#800000" }} onClick={handleLogout}>Logout</div> {/*when we click on logout it'll take to login page by deleting the authtoken*/}
                    </div>
                    }
                </div>
            </nav>

        </div>
    )
}
