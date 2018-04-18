import React from 'react';


const Cover = (props) => {
    const cStyle = {
        background: `url('./images/covers/${props.cover}.jpg')  no-repeat`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: 'cover'
    }
    return (
        <section className="hero is-medium" style={cStyle}>
            <div className="hero-body">
                <div className="container">
                    <h1 className="title has-text-white">{props.title}</h1>
                    <h2 className="subtitle has-text-white">{props.subtitle}</h2>
                </div>
            </div>
        </section>
    )
}

export default Cover;