import React from 'react'
import { Link } from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import { connect } from "react-redux"
const Navbar = () => {
    return(
        <nav className="nav-wrapper pink ">
            <div className="container">
                <Link to='/' className="brand-logo">Football Fantasy</Link>
                <SignedInLinks />

            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
    console.log("salam",state);
    return{

    }
}

export default connect(mapStateToProps)(Navbar)
