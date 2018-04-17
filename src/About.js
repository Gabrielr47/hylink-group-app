import React, { Component } from 'react';

import Cover from './Cover';

class About extends Component {
    render() {
        return (
            <div>

                <Cover cover="about" title="Think Hylink" subtitle="Think Dynamic" />

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

export default About;