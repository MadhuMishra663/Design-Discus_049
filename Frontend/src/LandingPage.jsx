import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [role, setRole] = useState('student');
    const navigate = useNavigate();

    const handleSignIn = () => {
        // Navigate to SignIn page with the selected role
        navigate(`/signin?role=${role}`);
    };

    return (
        <div className="landing-page">
            <h1>Welcome to the LMS</h1>
            <div className="role-selection">
                <label>
                    <input
                        type="radio"
                        value="student"
                        checked={role === 'student'}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    Student
                </label>
                <label>
                    <input
                        type="radio"
                        value="instructor"
                        checked={role === 'instructor'}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    Instructor
                </label>
            </div>
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default LandingPage;
