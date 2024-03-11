import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:2001/login_user_api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
    
            const responseData = await response.json(); 
    
            if (response.status === 200) {
                console.log('Login successful');
                navigate('/dashboard'); // Redirect to the dashboard upon successful login
            } else if (response.status === 401) {
                console.error('Invalid credentials:', responseData.message); // Log the error message
            } else if (response.status === 404) {
                console.error('User not found:', responseData.message); // Log the error message
            } else {
                console.error('Internal server error:', responseData.message); // Log the error message
            }
        } catch (error) {
            console.error('Error logging in:', error);
            // Optionally, display an error message to the user
        }
    };
    


    return (
        <div class="container">
            <div class="login-container">
                <h2 class="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="Enter username"
                            value={username} onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter password"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <p>dont have an account ? Register Yourself</p>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                </form>
            </div>
        </div>

    )
}

export default Login