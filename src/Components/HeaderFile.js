import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {BrowserRouter} from 'react-router-dom';

class NavbarFile extends Component{
    render() {
        return (
            <div>
                <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                    <a className="navbar-brand" href="/">Infrastructure Monitoring System</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/spring-boot">SpringBoot</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/node-express">NodeExpress</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    </nav>
                </BrowserRouter>
            </div>
           
        )
    }
}

export default NavbarFile;