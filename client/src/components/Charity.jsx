import React, { useState } from 'react';
import Donation from './Donation'; // Import the Donation component

function Charity({ name, image, description, isExpanded, onToggle }) {
    // State to manage modal visibility
    const [isModalOpen, setModalOpen] = useState(false);

    // Function to handle opening the modal
    const handleDonateClick = () => {
        setModalOpen(true);
    };

    // Function to handle closing the modal
    const handleModalClose = () => {
        setModalOpen(false);
    };

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
                        {/* Donate button opens the modal */}
                        <button className="donate-button" onClick={handleDonateClick}>
                            Donate!
                        </button>
                    </div>
                )}
                <button onClick={onToggle} className="close-btn btn btn-link">
                    {isExpanded ? 'Close' : 'More'}
                </button>
            </div>

            {/* Donation Modal */}
            <Donation isOpen={isModalOpen} onClose={handleModalClose} />
        </div>
    );
}

export default Charity;


// import React, { useState } from 'react';

// function Charity({ name, image, description, isExpanded, onToggle }) {
//     return (
//         <div className="">
//           <div className="charity-image-container">
//             <img src={image} className="charity-image" alt={`title`} />
//           </div>
//           <div className="charity-content">
//             <h2 className="charity-title">{name}</h2>
//             {isExpanded && (
//               <div className="charity-description">
//                 <h4>{description}</h4>
//                 <button className="donate-button">Donate!</button>
//               </div>
//             )}
//             <button onClick={onToggle} className="close-btn btn btn-link">
//               {isExpanded ? 'Close' : 'More'}
//             </button>
//           </div>
//         </div>
//       )
//     }

// export default Charity;