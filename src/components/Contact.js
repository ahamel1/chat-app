import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnline : props.isOnline
        }
    }
    render() {
        return (
            <div className = "Contact">
                <div>
                    <img className="avatar" src ={this.props.avatar} alt = {this.props.name}/>
                </div>
                <div>
                    <h4 className="name">{this.props.name}</h4>
                    <div className="status">
                        <div className={this.state.isOnline ?'status-online' : 'status-offline'}
                        onClick = {event => {
                            const newIsOnline = !this.state.isOnline;
                            this.setState({isOnline : newIsOnline});
                        }}>
                        </div>
                        <p className = "status-text">{this.state.isOnline ? "online" : "offline"}</p>   
                    </div>
                </div>

            </div>
        );
    }
}
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };
export default Contact;