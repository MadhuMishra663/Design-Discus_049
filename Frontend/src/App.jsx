import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import InstructorDashboard from './components/Dashboard/InstructorDashboard';
import DiscussionForum from './components/common/DiscussionForum';
import CourseList from './components/Course/CourseList';
import CreateLecture from './components/Lecture/CreateLecture';
import ViewLecture from './components/Lecture/ViewLecture';
import CreateAssignment from './components/Assignment/CreateAssignment';
import ViewAssignments from './components/Assignment/ViewAssignments';
import CreateQuiz from './components/Quiz/CreateQuiz';
import ViewQuizzes from './components/Quiz/ViewQuizzes';
import ViewNotes from './components/Note/ViewNotes';
import UploadNotes from './components/Note/UploadNotes';
import LandingPage from './LandingPage';
import Registration from './components/Auth/Signin'

const App = () => {
    const [userType, setUserType] = useState(null);

    return (
        <Router>
            <Routes>
               <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login setUserType={setUserType} />} />
                <Route path="/signin" element={<Registration setUserType={setUserType} />} />
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
                <Route path="/discussion-forum" element={<DiscussionForum />} />
                <Route path="/courses" element={<CourseList />} />
                <Route path="/create-lecture" element={<CreateLecture />} />
                <Route path="/view-lecture/:id" element={<ViewLecture />} />
                <Route path="/create-assignment" element={<CreateAssignment />} />
                <Route path="/view-assignments" element={<ViewAssignments />} />
                <Route path="/create-quiz" element={<CreateQuiz />} />
                <Route path="/view-quizzes" element={<ViewQuizzes />} />
                <Route path="/view-notes" element={<ViewNotes />} />
                <Route path="/upload-notes" element={<UploadNotes />} />
            </Routes>
        </Router>
    );
}

export default App;
