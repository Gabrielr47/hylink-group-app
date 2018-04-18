import React from 'react';
import { Link, NavLink } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

const Header = () => {
    return (
        <header>
            <nav className="navbar is-black is-fixed-top" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">

                        <Link className="navbar-item" to="/">
                            <img src="./images/hylink-logo.png" alt="We are China's largest independent digital advertising agency." width="128" height="37" />
                        </Link>

                        <div role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </div>

                    </div>

                    <div id="navMenu" className="navbar-menu">
                        <div className="navbar-start">
                            <NavLink className="navbar-item" to="/">Home</NavLink>
                            <NavLink className="navbar-item" to="/about">About</NavLink>
                            <NavLink className="navbar-item" to="/work">Work</NavLink>
                            <NavLink className="navbar-item" to="/office">Offices</NavLink>
                        </div>
                        <div className="navbar-end">
                            <NavLink className="navbar-item" to="/blog">Blog</NavLink>
                            <NavLink className="navbar-item" to="/services">Services</NavLink>
                            <NavLink className="navbar-item" to="/clients">Clients</NavLink>
                            <NavLink className="navbar-item" to="/careers">Careers</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;