import React, { Component } from 'react';

import SlidesWork from './SlidesWork';

class Home extends Component {
    render() {
        return (
            <div>

                <section className="section section-work">
                    <div className="container">
                        <h1 className="title">Work</h1>
                        <h2 className="subtitle">View all of our successful cases.</h2>
                    </div>
                    <br />
                    <SlidesWork />
                </section>

                <section className="hero is-dark">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">About</h1>
                            <h2 className="subtitle">
                                <strong>Independent </strong> and we are proud to stay that way. Our mission is simple: to help brands navigate the Chinese digital landscape.
                            </h2>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}

export default Home;