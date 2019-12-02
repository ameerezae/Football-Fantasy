import React from 'react'
import {NavLink} from 'react-router-dom'

export default function SignedInLinks() {
    return (
        <ul className="right">
            <li><NavLink to="/">Your Squad</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to = "/" className="btn btn-floating grey lighten-1">HS</NavLink></li>
        </ul>
    )
}
