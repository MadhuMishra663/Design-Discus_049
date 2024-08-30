import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Replace with your API base URL


export const signUpUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:5000/user/register', userData, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        return { status: 0 };
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:5000/user/login', userData, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        return { status: 0 };
    }
};

export const getCourses = async () => {
    const response = await fetch(`${API_URL}/courses`);
    return response.json();
};

export const enrollInCourse = async (courseId) => {
    const response = await fetch(`${API_URL}/courses/enroll`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId }),
    });
    return response.json();
};

export const getStudentProgress = async () => {
    const response = await fetch(`${API_URL}/student/progress`);
    return response.json();
};

export const createLecture = async (data) => {
    const response = await fetch(`${API_URL}/instructor/lectures`, {
        method: 'POST',
        body: data,
    });
    return response.json();
};

export const getLecture = async (id) => {
    const response = await fetch(`${API_URL}/lectures/${id}`);
    return response.json();
};

export const createAssignment = async (data) => {
    const response = await fetch(`${API_URL}/instructor/assignments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const getAssignments = async () => {
    const response = await fetch(`${API_URL}/assignments`);
    return response.json();
};

export const createQuiz = async (data) => {
    const response = await fetch(`${API_URL}/instructor/quizzes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const getQuizzes = async () => {
    const response = await fetch(`${API_URL}/quizzes`);
    return response.json();
};

export const getNotes = async () => {
    const response = await fetch(`${API_URL}/notes`);
    return response.json();
};

export const uploadNotes = async (data) => {
    const response = await fetch(`${API_URL}/instructor/notes`, {
        method: 'POST',
        body: data,
    });
    return response.json();
};
