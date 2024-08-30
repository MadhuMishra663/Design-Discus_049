import React, { useState } from 'react';
import { uploadNotes } from '../api/api';

const UploadNotes = () => {
    const [file, setFile] = useState(null);

    const handleUpload = async (e) => {
        e.preventDefault();
        // Upload notes using API
        const formData = new FormData();
        formData.append('notes', file);

        const response = await uploadNotes(formData);
        if (response.status === 1) {
            alert('Notes uploaded successfully');
        } else {
            alert('Failed to upload notes');
        }
    };

    return (
        <div className="upload-notes">
            <h2>Upload Lecture Notes</h2>
            <form onSubmit={handleUpload}>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button type="submit">Upload Notes</button>
            </form>
        </div>
    );
};

export default UploadNotes;
