import React, { useState } from 'react';
import { createLecture } from '../api/api';

const CreateLecture = () => {
    const [title, setTitle] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [notes, setNotes] = useState(null); // Handle file upload for notes

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create lecture using API
        const formData = new FormData();
        formData.append('title', title);
        formData.append('videoUrl', videoUrl);
        if (notes) formData.append('notes', notes);

        const response = await createLecture(formData);
        if (response.status === 1) {
            alert('Lecture created successfully');
        } else {
            alert('Failed to create lecture');
        }
    };

    return (
        <div className="create-lecture">
            <h2>Create Lecture</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Lecture Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Video URL"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setNotes(e.target.files[0])}
                />
                <button type="submit">Create Lecture</button>
            </form>
        </div>
    );
};

export default CreateLecture;
