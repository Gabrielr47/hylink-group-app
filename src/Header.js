import React from 'react';

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
                        <a className="navbar-item" href="/">
                            <img src="./images/hylink-logo.png" alt="We are China's largest independent digital advertising agency." width="128" height="37" />
                        </a>

                        <div role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </div>

                    </div>

                    <div id="navMenu" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="/">Home</a>
                            <a className="navbar-item" href="/">About</a>
                            <a className="navbar-item" href="/">Work</a>
                            <a className="navbar-item" href="/">Offices</a>
                        </div>
                        <div className="navbar-end">
                            <a className="navbar-item" href="/">Blog</a>
                            <a className="navbar-item" href="/">Services</a>
                            <a className="navbar-item" href="/">Clients</a>
                            <a className="navbar-item" href="/">Careers</a>
                        </div>
                    </div>
                </div>
            </nav>
            
            <section className="hero is-medium home-cover">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title has-text-white">
                            Think Hylink
                            </h1>
                        <h2 className="subtitle has-text-white">
                            We are China's largest independent digital advertising agency.
                        </h2>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header;