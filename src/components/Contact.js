import React from 'react';
import './Contact.css';

function Contact (isOnline) {
    return (
        <div className = "Contact">
            <div>
                <img className="avatar" src ="https://randomuser.me/api/portraits/women/48.jpg" alt = "Vera Larson"/>
            </div>
            <div>
                <h4 className="name">Vera Larson</h4>
                <div className="status">
                    <div className="status-online"></div>
                    <p className = "status-text">online</p>   
                </div>
            </div>

        </div>
    );
}

export default Contact;