import React, { useState } from 'react';
import { createQuiz } from '../api/api';

const CreateQuiz = () => {
    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([{ questionText: '', options: ['', '', '', ''], correctAnswer: '' }]);

    const handleQuestionChange = (index, field, value) => {
        const updatedQuestions = [...questions];
        if (field === 'questionText') {
            updatedQuestions[index].questionText = value;
        } else {
            updatedQuestions[index].options[field] = value;
        }
        setQuestions(updatedQuestions);
    };

    const handleCorrectAnswerChange = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].correctAnswer = value;
        setQuestions(updatedQuestions);
    };

    const addQuestion = () => {
        setQuestions([...questions, { questionText: '', options: ['', '', '', ''], correctAnswer: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title === '' || questions.length === 0) {
            alert('Please provide a title and at least one question.');
            return;
        }

        try {
            // Create quiz using API
            const response = await createQuiz({ title, questions });

            if (response.status === 1) {
                alert('Quiz created successfully');
                // Clear form after successful submission
                setTitle('');
                setQuestions([{ questionText: '', options: ['', '', '', ''], correctAnswer: '' }]);
            } else {
                alert('Failed to create quiz');
            }
        } catch (error) {
            console.error('Error creating quiz:', error);
            alert('An error occurred while creating the quiz.');
        }
    };

    return (
        <div className="create-quiz">
            <h2>Create Quiz</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Quiz Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <div className="questions-section">
                    {questions.map((question, index) => (
                        <div key={index} className="question">
                            <input
                                type="text"
                                placeholder="Question Text"
                                value={question.questionText}
                                onChange={(e) => handleQuestionChange(index, 'questionText', e.target.value)}
                                required
                            />
                            <div className="options">
                                {question.options.map((option, optIndex) => (
                                    <input
                                        key={optIndex}
                                        type="text"
                                        placeholder={`Option ${optIndex + 1}`}
                                        value={option}
                                        onChange={(e) => handleQuestionChange(index, optIndex, e.target.value)}
                                        required
                                    />
                                ))}
                            </div>
                            <input
                                type="text"
                                placeholder="Correct Answer"
                                value={question.correctAnswer}
                                onChange={(e) => handleCorrectAnswerChange(index, e.target.value)}
                                required
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addQuestion}>Add Another Question</button>
                </div>
                <button type="submit">Create Quiz</button>
            </form>
        </div>
    );
};

export default CreateQuiz;
