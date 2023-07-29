import { Link } from "gatsby"
import * as React from "react"
import MobileBarLinks from "./MobileBarLinks"
import { useState } from "react"

const Bar = ({ location }) => {
    const getRoutes = require("../Routes/GetRoutes")
    const routes = getRoutes.default()
    const currentLink = "/" + decodeURI(location.pathname.slice(1, -1)) + "/"
    const [mobileBar, setMobileBar] = useState(false)

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-teal-900">
            <div class="container-fluid">
                <Link className="ml-5 mr-5 text-decoration-none" href="/">
                    <h1 className="text-white" >Buh.guru</h1>
                </Link>
                <button
                    onClick={() => { mobileBar ? setMobileBar(false) : setMobileBar(true) }}
                    class="navbar-toggler"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse f" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        {routes.map((route) => {
                            return (
                                <li class="nav-item">
                                    <Link to={route.link} className="text-decoration-none">
                                        <p class={route.link === currentLink ? "nav-link text-white" : "nav-link"}>
                                            {route.title}
                                        </p>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            {mobileBar && (
                <MobileBarLinks />
            )}
        </nav >


    )
}

export default Bar