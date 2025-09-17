import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <div className="error-container">
            <div className="error-content">
                <h1 className="error-code text-dark">404</h1>
                <p className="error-text text-dark">Page Not Found</p>
                <Link to="/" className="home-link">
                    <button className="bubbles py-2 px-4 mt-2">
                        <span className="text">Back To Home</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Error404