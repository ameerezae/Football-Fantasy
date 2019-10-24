import React from 'react'
import { Link } from "react-router-dom"
import SignedInLinks from "./SignedInLinks"

const Navbar = () => {
    return(
        <nav className="nav-wrapper pink ">
            <div className="container">
                <Link to='/' className="brand-logo">sign in</Link>
                <SignedInLinks />
            </div>
        </nav>
    )
}

export default Navbar
