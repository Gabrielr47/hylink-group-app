import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="columns">
                <div className="column">
                    <p className="title">Address</p>
                    <p className="subtitle">
                        225 Santa Monica Blvd, 8th Floor<br />
                        Santa Monica, CA 90401<br />
                        +1 (310) 906-5965<br /><br />
                        hello@hylinkgroup.com<br />
                    </p>
                </div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column">
                    <p className="title">Social Media</p>
                    <div className="columns is-mobile">
                        <div className="column">
                            <a href="https://twitter.com/hylinkdigital" target="_blank" rel='noopener noreferrer' title="Twitter hylinkDigital">
                                <span className="icon has-text-info">
                                    <i className="fab fa-twitter fa-2x"></i>
                                </span>
                            </a>
                        </div>
                        <div className="column">
                            <a href="https://www.instagram.com/hylinkdigital/" target="_blank" rel='noopener noreferrer' title="Instagram hylinkDigital">
                                <span className="icon has-text-danger">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </span>
                            </a>
                        </div>
                        <div className="column">
                            <a href="https://www.linkedin.com/showcase/hylink-digital-solutions/" target="_blank" rel='noopener noreferrer' title="LinkedIn hylinkDigital">
                                <span className="icon has-text-link">
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </span>
                            </a>
                        </div>
                        <div className="column">
                            <a href="https://plus.google.com/u/1/114916500618781191902" target="_blank" rel='noopener noreferrer' title="Google Plus hylinkDigital">
                                <span className="icon has-text-danger">
                                    <i className="fab fa-google-plus fa-2x"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content has-text-centered">
                <p>© Copyright 2018 HYLINK · All Rights Reserved.</p>
            </div>

        </footer>
    )
}

export default Footer;