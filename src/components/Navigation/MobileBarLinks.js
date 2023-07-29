import { Link } from "gatsby"
import * as React from "react"
import * as windows1251 from 'windows-1251'
import { useState } from 'react'

const MobileBar = ({ mobileBar, setMobileBar }) => {
    const getRoutes = require("../Routes/GetRoutes")
    const routes = getRoutes.default()

    return (
        <div className="p-5">
            <ul class="navbar-nav me-auto">
                {routes.map((route) => {
                    return (
                        <li class="nav-item">
                            <Link to={route.link} class="nav-link">
                                <p class="nav-link">{route.title}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MobileBar