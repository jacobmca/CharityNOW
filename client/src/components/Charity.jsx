import React, { useState } from 'react';

function Charity({ name, image, description, isExpanded, onToggle }) {
    return (
        <div className="">
          <div className="charity-image-container">
            <img src={image} className="charity-image" alt={`title`} />
          </div>
          <div className="charity-content">
            <h2 className="charity-title">{name}</h2>
            {isExpanded && (
              <div className="charity-description">
                <h4>{description}</h4>
                <button className="donate-button">Donate!</button>
              </div>
            )}
            <button onClick={onToggle} className="close-btn btn btn-link">
              {isExpanded ? 'Close' : 'More'}
            </button>
          </div>
        </div>
      )
    }

export default Charity;