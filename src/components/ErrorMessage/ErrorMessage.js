import React from 'react';
import './ErrorMessage.css'

const ErrorMessage = (props) => {
    // Return error message if actor exist otherwise retun Null
    if (props.doesExist) {
        return (
            <small style={{ color: 'red', marginBottom: '2px' }}>
                Exist on the following list !!
            </small>
        )
    }
    return null

};

export default ErrorMessage;