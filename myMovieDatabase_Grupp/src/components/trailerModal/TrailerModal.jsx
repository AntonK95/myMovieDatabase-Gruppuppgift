import React from 'react';
import './trailerModal.css';

function TrailerModal({ trailerLink, title, onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    <iframe
                        title={title}
                        width="850"
                        height="478"
                        src={trailerLink}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className="details-section">
                        <div className="detailed-info">
                            <h2>{title}</h2>
                            <button onClick={onClose}>Tillbaka</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrailerModal;