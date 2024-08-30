import React, { useEffect, useState } from 'react';
import { getAssignments } from '../api/api';

const ViewAssignments = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        const fetchAssignments = async () => {
            const data = await getAssignments();
            setAssignments(data);
        };

        fetchAssignments();
    }, []);

    return (
        <div className="view-assignments">
            <h2>Assignments</h2>
            {assignments.map(assignment => (
                <div key={assignment.id} className="assignment-item">
                    <h3>{assignment.title}</h3>
                    <p>{assignment.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ViewAssignments;
