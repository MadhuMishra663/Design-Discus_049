import React, { useState } from 'react';
import { createAssignment } from '../api/api';

const CreateAssignment = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create assignment using API
        const response = await createAssignment({ title, description });
        if (response.status === 1) {
            alert('Assignment created successfully');
        } else {
            alert('Failed to create assignment');
        }
    };

    return (
        <div className="create-assignment">
            <h2>Create Assignment</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Assignment Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button type="submit">Create Assignment</button>
            </form>
        </div>
    );
};

export default CreateAssignment;
