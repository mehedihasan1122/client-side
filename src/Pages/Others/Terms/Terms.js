import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>Terms and conditions</h3>
            <p>Go back to : <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;