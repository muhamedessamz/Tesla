import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NewPages.css';

function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration attempt:', formData);
        // Handle registration logic here
    };

    return (
        <div className="tesla-form-page">
            <div className="form-container scroll-reveal in-view">
                <div className="form-box">
                    <header className="form-header">
                        <h1>Create Account</h1>
                    </header>
                    <form onSubmit={handleSubmit} className="tesla-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-terms">
                            <p>By creating an account, I understand and agree to Tesla's <a href="#">Terms of Use</a> and <a href="#">Privacy Notice</a>.</p>
                        </div>

                        <div className="form-footer">
                            <button type="submit" className="tesla-btn tesla-btn-primary w-100">Create Account</button>
                            <div className="form-links">
                                <span>Already have an account? </span>
                                <Link to="/login">Sign In</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
