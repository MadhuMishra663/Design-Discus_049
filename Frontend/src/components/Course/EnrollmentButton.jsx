import React from 'react';
import { enrollInCourse } from '../api/api';

const EnrollmentButton = ({ courseId }) => {
    const handleEnroll = () => {
        enrollInCourse(courseId).then(response => {
            if (response.status === 1) {
                alert('Enrolled successfully');
            } else {
                alert('Failed to enroll');
            }
        });
    };

    return <button onClick={handleEnroll}>Enroll</button>;
}

export default EnrollmentButton;
