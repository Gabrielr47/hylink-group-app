import React, { Component } from 'react';

import Cover from './Cover';

class NotFound extends Component {
    render() {
        return (
            <div>

                <Cover cover="about" title="Think Hylink" subtitle="Think Dynamic" />

                <section className="hero is-warning">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">Page not Found</h1>
                            <h2 className="subtitle">
                                <strong>Sorry </strong> but the page that you are looking for could not be found.
                            </h2>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}

export default NotFound;