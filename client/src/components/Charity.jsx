import React, { useState } from 'react';

function Charity({ name, image, description, donate }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <div className="card charity-div" onClick={handleToggle} style={{ cursor: 'pointer' }}>
            <img src={image} className="card-img-top" alt={`title`} />
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
                {isExpanded && (
                    <div className="card-text">
                        <h4>{description}</h4>
                    <a href={donate} target="_blank" rel="noopener noreferrer" className="btn btn-secondary d-block mb-2">Donate!</a>
                </div>
                )}
                <button onClick={handleToggle} className="btn btnlink" >
                    {isExpanded ? 'Close' : 'More'}
                </button>
            </div>
        </div>
    )
}

export default Charity;