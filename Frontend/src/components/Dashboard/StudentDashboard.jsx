import React, { useEffect, useState } from 'react';
import { getStudentProgress } from '../api/api';
import CourseList from '../Course/CourseList';

const StudentDashboard = () => {
    const [progress, setProgress] = useState(null);

    useEffect(() => {
        // Fetch student's progress
        getStudentProgress().then(data => setProgress(data));
    }, []);

    return (
        <div className="dashboard">
            <h1>Student Dashboard</h1>
            <CourseList />
            {/* Display progress report */}
        </div>
    );
}

export default StudentDashboard;
