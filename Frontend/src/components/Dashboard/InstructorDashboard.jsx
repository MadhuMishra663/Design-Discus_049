import React from 'react';
import CreateLecture from '../Lecture/CreateLecture';
import ViewLecture from '../Lecture/ViewLecture';
import CreateAssignment from '../Assignment/CreateAssignment';
import ViewAssignments from '../Assignment/ViewAssignments';
import CreateQuiz from '../Quiz/CreateQuiz';
import ViewQuizzes from '../Quiz/ViewQuizzes';


const InstructorDashboard = () => {
    return (
        <div className="dashboard">
            <h1>Instructor Dashboard</h1>
            <CreateLecture />
            <ViewLecture />
            <CreateAssignment />
            <ViewAssignments />
            <CreateQuiz />
            <ViewQuizzes />
        </div>
    );
}

export default InstructorDashboard;
