import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    return (
            <nav className="navBarCss">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/About">About</a>
                    </li>
                    <li>
                        <a href="/Classes">Classes</a>
                    </li>
                    <li>
                        <a href="/Contact">Contact</a>
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar;