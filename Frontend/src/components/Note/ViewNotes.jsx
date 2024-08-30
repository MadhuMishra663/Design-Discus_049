import React, { useEffect, useState } from 'react';
import { getNotes } from '../api/api';

const ViewNotes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            const data = await getNotes();
            setNotes(data);
        };

        fetchNotes();
    }, []);

    return (
        <div className="view-notes">
            <h2>Lecture Notes</h2>
            {notes.map(note => (
                <div key={note.id} className="note-item">
                    <h3>{note.title}</h3>
                    <a href={note.url} download>Download Note</a>
                </div>
            ))}
        </div>
    );
};

export default ViewNotes;
