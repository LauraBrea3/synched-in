import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

export default function Header (props) {
    return (
        <div className="container-fluid d-flex justify-content-between p-2 m-2 bg-primary" style={{color: "white"}}>
            <Link style={{color: "white", textDecoration: "none" }} to="/">
                <div className="logo" style={{fontWeight: "bold", fontSize: "24px"}}>SynchedIn</div>
            </Link>
            <Search />
        </div>
    )
}
