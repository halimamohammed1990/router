import React from 'react';

import {Nav} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbarr(){
return (
    <div>

<Nav>
  <Nav.Item>
    <Nav.Link><Link to="/">Home</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link ><Link to="/aboutus">About us</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
   
  </Nav.Item>
</Nav>
 

    </div>
)}
export default Navbarr