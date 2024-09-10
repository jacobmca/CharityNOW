import React from 'react';

function Organization({ name, image, description, donate }) {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={`title`} />
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
                <div classname="card-text">
                    <h4>{description}</h4>
                    <a href={donate} target="_blank" rel="noopener noreferrer" className="btn btn-secondary d-block mb-2">Github Repo</a>
                </div>
            </div>
        </div>
    )
}

export default Organization