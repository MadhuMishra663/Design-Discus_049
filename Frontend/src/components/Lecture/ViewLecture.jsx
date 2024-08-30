import React, { useEffect, useState } from 'react';
import { getLecture } from '../api/api';

const ViewLecture = ({ id }) => {
    const [lecture, setLecture] = useState(null);

    useEffect(() => {
        const fetchLecture = async () => {
            const data = await getLecture(id);
            setLecture(data);
        };

        fetchLecture();
    }, [id]);

    if (!lecture) return <div>Loading...</div>;

    return (
        <div className="view-lecture">
            <h2>{lecture.title}</h2>
            <video src={lecture.videoUrl} controls />
            {lecture.notes && (
                <a href={lecture.notes} download>Download Notes</a>
            )}
        </div>
    );
};

export default ViewLecture;
