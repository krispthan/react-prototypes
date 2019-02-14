import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

export default props => (
  
        <ul className="nav nav-tabs mt-3">
        <li className="nav-item">
            <NavLink exact to="/"   activeClassName="active selected" className="nav-link">Welcome</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/our-macarons"  activeClassName="active selected" className="nav-link">Our Macarons</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/gift_parties"  activeClassName="active selected" className="nav-link">Gifts and Parties</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/contact"  activeClassName="active selected" className="nav-link">Contact</NavLink>
        </li>
    </ul>
   
)
