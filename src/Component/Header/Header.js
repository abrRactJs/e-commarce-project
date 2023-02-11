import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../images/logo/logo.png'
import { useContext } from 'react';
import { cartContext } from '../../App';
function Header() {
    const [cart , setCart] = useContext(cartContext)
    return (
        <div className="header fixed-top">
            <Navbar expand="md">

                <Navbar.Brand href="#home">
                    <img className='logo' src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='active items' to="/home">Home</Link>
                        <Link className="items" to="/shop">Shop</Link>
                        <Link className="items" to="/blog">Blog</Link>
                        <Link className="items" to="/about">About</Link>
                        <Link className="items" to="/contact">Contact</Link>
                        <Link  title="Go To Cart" className='cart items' to="/cart">
                            <FaCartPlus/> <span className='text-dark'>{cart.length}</span>
                        </Link>

                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
}

export default Header;