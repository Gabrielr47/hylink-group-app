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

                <section class="hero is-dark">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">About</h1>
                            <h2 class="subtitle">
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