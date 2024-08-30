import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUser } from '../api/api';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const role = new URLSearchParams(location.search).get('role');

    const handleLogin = async (e) => {
        e.preventDefault();
        // Login logic using API
        const response = await loginUser({ username, password });
        if (response.status === 1) {
            alert('Login successful!');
            // Redirect to the correct dashboard based on role
            if (role === 'instructor') {
                navigate('/instructor-dashboard');
            } else {
                navigate('/student-dashboard');
            }
        } else {
            alert('Login failed!');
        }
    };

    return (
        <div className="login">
            <h2>Login as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
