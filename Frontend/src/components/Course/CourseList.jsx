import React, { useEffect, useState } from 'react';
import { getCourses } from '../api/api';
import EnrollmentButton from '../Course/EnrollmentButton';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch courses
        getCourses().then(data => setCourses(data));
    }, []);

    return (
        <div className="course-list">
            <h2>Available Courses</h2>
            {courses.map(course => (
                <div key={course.id} className="course-item">
                    <h3>{course.title}</h3>
                    <EnrollmentButton courseId={course.id} />
                </div>
            ))}
        </div>
    );
}

export default CourseList;
