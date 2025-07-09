import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [loginErrors, setLoginErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loginSubmitted, setLoginSubmitted] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [backendError, setBackendError] = useState('');
    const [loginBackendError, setLoginBackendError] = useState('');

    const navigate = useNavigate();

    // Signup validation
    const validate = () => {
        const newErrors = {};
        if (!form.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!form.password) {
            newErrors.password = 'Password is required';
        } else if (form.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (!form.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (form.password !== form.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        return newErrors;
    };

    // Login validation
    const validateLogin = () => {
        const newErrors = {};
        if (!loginForm.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginForm.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!loginForm.password) {
            newErrors.password = 'Password is required';
        }
        return newErrors;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };

    const handleLoginChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
        setLoginErrors({ ...loginErrors, [e.target.name]: undefined });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        setBackendError('');
        if (Object.keys(validationErrors).length === 0) {
            try {
                const res = await fetch('http://localhost:3002/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: form.email, password: form.password })
                });
                const data = await res.json();
                if (!res.ok) {
                    setBackendError(data.message || 'Signup failed.');
                    setSubmitted(false);
                } else {
                    setSubmitted(true);
                    setBackendError('');
                }
            } catch (err) {
                setBackendError('Network error.');
                setSubmitted(false);
            }
        } else {
            setSubmitted(false);
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateLogin();
        setLoginErrors(validationErrors);
        setLoginBackendError('');
        if (Object.keys(validationErrors).length === 0) {
            try {
                const res = await fetch('http://localhost:3002/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: loginForm.email, password: loginForm.password })
                });
                const data = await res.json();
                if (!res.ok) {
                    setLoginBackendError(data.message || 'Login failed.');
                    setLoginSubmitted(false);
                } else {
                    setLoginSubmitted(true);
                    setLoginBackendError('');
                    window.location.href = 'http://localhost:3001';
                }
            } catch (err) {
                setLoginBackendError('Network error.');
                setLoginSubmitted(false);
            }
        } else {
            setLoginSubmitted(false);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
            {showLogin ? (
                <>
                    <h2>Login</h2>
                    <form onSubmit={handleLoginSubmit} noValidate>
                        <div style={{ marginBottom: 16 }}>
                            <label>Email:</label><br />
                            <input
                                type="email"
                                name="email"
                                value={loginForm.email}
                                onChange={handleLoginChange}
                                style={{ width: '100%', padding: 8, marginTop: 4 }}
                            />
                            {loginErrors.email && <div style={{ color: 'red', fontSize: 13 }}>{loginErrors.email}</div>}
                        </div>
                        <div style={{ marginBottom: 16 }}>
                            <label>Password:</label><br />
                            <input
                                type="password"
                                name="password"
                                value={loginForm.password}
                                onChange={handleLoginChange}
                                style={{ width: '100%', padding: 8, marginTop: 4 }}
                            />
                            {loginErrors.password && <div style={{ color: 'red', fontSize: 13 }}>{loginErrors.password}</div>}
                        </div>
                        <button type="submit" style={{ width: '100%', padding: 10, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>
                            Login
                        </button>
                        {loginBackendError && <div style={{ color: 'red', marginTop: 8 }}>{loginBackendError}</div>}
                        {loginSubmitted && <div style={{ color: 'green', marginTop: 16 }}>Login successful!</div>}
                    </form>
                    <div style={{ marginTop: 16, textAlign: 'center' }}>
                        <span>Don't have an account? </span>
                        <button type="button" style={{ color: '#1976d2', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => { setShowLogin(false); setLoginSubmitted(false); }}>
                            Sign Up
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit} noValidate>
                        <div style={{ marginBottom: 16 }}>
                            <label>Email:</label><br />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                style={{ width: '100%', padding: 8, marginTop: 4 }}
                            />
                            {errors.email && <div style={{ color: 'red', fontSize: 13 }}>{errors.email}</div>}
                        </div>
                        <div style={{ marginBottom: 16 }}>
                            <label>Password:</label><br />
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                style={{ width: '100%', padding: 8, marginTop: 4 }}
                            />
                            {errors.password && <div style={{ color: 'red', fontSize: 13 }}>{errors.password}</div>}
                        </div>
                        <div style={{ marginBottom: 16 }}>
                            <label>Confirm Password:</label><br />
                            <input
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                style={{ width: '100%', padding: 8, marginTop: 4 }}
                            />
                            {errors.confirmPassword && <div style={{ color: 'red', fontSize: 13 }}>{errors.confirmPassword}</div>}
                        </div>
                        <button type="submit" style={{ width: '100%', padding: 10, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>
                            Sign Up
                        </button>
                        {backendError && <div style={{ color: 'red', marginTop: 8 }}>{backendError}</div>}
                        {submitted && <div style={{ color: 'green', marginTop: 16 }}>Signup successful!</div>}
                    </form>
                    <div style={{ marginTop: 16, textAlign: 'center' }}>
                        <span>Already have an account? </span>
                        <button type="button" style={{ color: '#1976d2', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => { setShowLogin(true); setSubmitted(false); }}>
                            Login
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default SignUp;