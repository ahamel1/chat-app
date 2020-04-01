import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types'

const Contact = ({name, avatar, isOnline}) => {
    return (
        <div className = "Contact">
            <div>
                <img className="avatar" src ={avatar} alt = {name}/>
            </div>
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    <div className={isOnline ?'status-online' : 'status-offline'}></div>
                    <p className = "status-text">{isOnline ? "online" : "offline"}</p>   
                </div>
            </div>

        </div>
    );
}
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };
export default Contact;