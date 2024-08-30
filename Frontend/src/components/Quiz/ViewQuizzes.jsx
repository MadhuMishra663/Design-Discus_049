import React, { useEffect, useState } from 'react';
import { getQuizzes } from '../api/api';

const ViewQuizzes = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            const data = await getQuizzes();
            setQuizzes(data);
        };

        fetchQuizzes();
    }, []);

    return (
        <div className="view-quizzes">
            <h2>Quizzes</h2>
            {quizzes.map(quiz => (
                <div key={quiz.id} className="quiz-item">
                    <h3>{quiz.title}</h3>
                    {/* Display quiz details */}
                </div>
            ))}
        </div>
    );
};

export default ViewQuizzes;
