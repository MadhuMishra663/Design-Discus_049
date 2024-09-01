// import { useEffect, useState } from "react";
// import { Route, Routes, useLocation, Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import ForgotPassword from "./pages/ForgotPassword";
// import UpdatePassword from "./pages/UpdatePassword";
// import VerifyEmail from "./pages/VerifyEmail";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import PageNotFound from "./pages/PageNotFound";
// import CourseDetails from "./pages/CourseDetails";
// import Catalog from "./pages/Catalog";

// import Navbar from "./components/common/Navbar";

// import OpenRoute from "./components/core/Auth/OpenRoute";
// import ProtectedRoute from "./components/core/Auth/ProtectedRoute";

// import Dashboard from "./pages/Dashboard";
// import MyProfile from "./components/core/Dashboard/MyProfile";
// import Settings from "./components/core/Dashboard/Settings/Settings";
// import MyCourses from "./components/core/Dashboard/MyCourses";
// import EditCourse from "./components/core/Dashboard/EditCourse/EditCourse";
// import Instructor from "./components/core/Dashboard/Instructor";

// import Cart from "./components/core/Dashboard/Cart/Cart";
// import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
// import AddCourse from "./components/core/Dashboard/AddCourse/AddCourse";

// import ViewCourse from "./pages/ViewCourse";
// import VideoDetails from "./components/core/ViewCourse/VideoDetails";

// import { ACCOUNT_TYPE } from "./utils/constants";

// import { HiArrowNarrowUp } from "react-icons/hi";

// function App() {
//   const { user } = useSelector((state) => state.profile);

//   // Scroll to the top of the page when the component mounts
//   const location = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   useEffect(() => {
//     scrollTo(0, 0);
//   }, [location]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // Go upward arrow - show , unshow
//   const [showArrow, setShowArrow] = useState(false);

//   const handleArrow = () => {
//     if (window.scrollY > 500) {
//       setShowArrow(true);
//     } else setShowArrow(false);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleArrow);
//     return () => {
//       window.removeEventListener("scroll", handleArrow);
//     };
//   }, [showArrow]);

//   return (
//     <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
//       <Navbar />

//       {/* go upward arrow */}
//       <button
//         onClick={() => window.scrollTo(0, 0)}
//         className={`bg-yellow-25 hover:bg-pink-50 hover:scale-110 p-3 text-lg text-black rounded-2xl fixed right-3 z-10 duration-500 ease-in-out ${
//           showArrow ? "bottom-6" : "-bottom-24"
//         } `}
//       >
//         <HiArrowNarrowUp />
//       </button>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="catalog/:catalogName" element={<Catalog />} />
//         <Route path="courses/:courseId" element={<CourseDetails />} />

//         {/* Open Route - for Only Non Logged in User */}
//         <Route
//           path="signup"
//           element={
//             <OpenRoute>
//               <Signup />
//             </OpenRoute>
//           }
//         />

//         <Route
//           path="login"
//           element={
//             <OpenRoute>
//               <Login />
//             </OpenRoute>
//           }
//         />

//         <Route
//           path="forgot-password"
//           element={
//             <OpenRoute>
//               <ForgotPassword />
//             </OpenRoute>
//           }
//         />

//         <Route
//           path="verify-email"
//           element={
//             <OpenRoute>
//               <VerifyEmail />
//             </OpenRoute>
//           }
//         />

//         <Route
//           path="update-password/:id"
//           element={
//             <OpenRoute>
//               <UpdatePassword />
//             </OpenRoute>
//           }
//         />

//         {/* Protected Route - for Only Logged in User */}
//         {/* Dashboard */}
//         <Route
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         >
//           <Route path="dashboard/my-profile" element={<MyProfile />} />
//           <Route path="dashboard/Settings" element={<Settings />} />

//           {/* Route only for Students */}
//           {/* cart , EnrolledCourses */}
//           {user?.accountType === ACCOUNT_TYPE.STUDENT && (
//             <>
//               <Route path="dashboard/cart" element={<Cart />} />
//               <Route
//                 path="dashboard/enrolled-courses"
//                 element={<EnrolledCourses />}
//               />
//             </>
//           )}

//           {/* Route only for Instructors */}
//           {/* add course , MyCourses, EditCourse*/}
//           {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
//             <>
//               <Route path="dashboard/instructor" element={<Instructor />} />
//               <Route path="dashboard/add-course" element={<AddCourse />} />
//               <Route path="dashboard/my-courses" element={<MyCourses />} />
//               <Route
//                 path="dashboard/edit-course/:courseId"
//                 element={<EditCourse />}
//               />
//             </>
//           )}
//         </Route>

//         {/* For the watching course lectures */}
//         <Route
//           element={
//             <ProtectedRoute>
//               <ViewCourse />
//             </ProtectedRoute>
//           }
//         >
//           {user?.accountType === ACCOUNT_TYPE.STUDENT && (
//             <Route
//               path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
//               element={<VideoDetails />}
//             />
//           )}
//         </Route>

//         {/* Page Not Found (404 Page ) */}
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;





// import { useEffect, useState } from "react";
// import { Route, Routes, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import ForgotPassword from "./pages/ForgotPassword";
// import UpdatePassword from "./pages/UpdatePassword";
// import VerifyEmail from "./pages/VerifyEmail";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import PageNotFound from "./pages/PageNotFound";
// import CourseDetails from "./pages/CourseDetails";
// import Catalog from "./pages/Catalog";

// import Navbar from "./components/common/Navbar";

// import OpenRoute from "./components/core/Auth/OpenRoute";
// import ProtectedRoute from "./components/core/Auth/ProtectedRoute";

// import Dashboard from "./pages/Dashboard";
// import MyProfile from "./components/core/Dashboard/MyProfile";
// import Settings from "./components/core/Dashboard/Settings/Settings";
// import MyCourses from "./components/core/Dashboard/MyCourses";
// import EditCourse from "./components/core/Dashboard/EditCourse/EditCourse";
// import Instructor from "./components/core/Dashboard/Instructor";

// import Cart from "./components/core/Dashboard/Cart/Cart";
// import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
// import AddCourse from "./components/core/Dashboard/AddCourse/AddCourse";

// import ViewCourse from "./pages/ViewCourse";
// import VideoDetails from "./components/core/ViewCourse/VideoDetails";

// import { ACCOUNT_TYPE } from "./utils/constants";

// import { HiArrowNarrowUp } from "react-icons/hi";

// function App() {
//   const { user } = useSelector((state) => state.profile);
//   const [theme, setTheme] = useState("dark");

//   const location = useLocation();
  
//   // Scroll to the top of the page when the component mounts
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   // Toggle between dark and light theme
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
//   };

//   // Apply the current theme to the body
//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);

//   // Go upward arrow - show/unshow
//   const [showArrow, setShowArrow] = useState(false);

//   const handleArrow = () => {
//     if (window.scrollY > 500) {
//       setShowArrow(true);
//     } else setShowArrow(false);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleArrow);
//     return () => {
//       window.removeEventListener("scroll", handleArrow);
//     };
//   }, [showArrow]);

//   return (
//     <div className={`w-screen min-h-screen flex flex-col font-inter ${theme === "dark" ? "bg-richblack-900" : "bg-white"}`}>
//       <Navbar />

//       {/* Theme Toggle Button */}
//       <button
//         onClick={toggleTheme}
//         className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
//       >
//         Toggle Theme
//       </button>

//       {/* Go upward arrow */}
//       <button
//         onClick={() => window.scrollTo(0, 0)}
//         className={`bg-yellow-25 hover:bg-pink-50 hover:scale-110 p-3 text-lg text-black rounded-2xl fixed right-3 z-10 duration-500 ease-in-out ${
//           showArrow ? "bottom-6" : "-bottom-24"
//         }`}
//       >
//         <HiArrowNarrowUp />
//       </button>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="catalog/:catalogName" element={<Catalog />} />
//         <Route path="courses/:courseId" element={<CourseDetails />} />

//         {/* Open Route - for Only Non Logged in User */}
//         <Route
//           path="signup"
//           element={
//             <OpenRoute>
//               <Signup />
//             </OpenRoute>
//           }
//         />

//         <Route
//           path="login"
//           element={
//             <OpenRoute>
//               <Login />
//             </OpenRoute>
//           }
//         />

//         <Route
//           path="forgot-password"
//           element={
//             <OpenRoute>
//               <ForgotPassword />
//             </OpenRoute>
//           }
//         />

//         <Route
//           path="verify-email"
//           element={
//             <OpenRoute>
//               <VerifyEmail />
//             </OpenRoute>
//           }
//         />

//         <Route
//           path="update-password/:id"
//           element={
//             <OpenRoute>
//               <UpdatePassword />
//             </OpenRoute>
//           }
//         />

//         {/* Protected Route - for Only Logged in User */}
//         {/* Dashboard */}
//         <Route
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         >
//           <Route path="dashboard/my-profile" element={<MyProfile />} />
//           <Route path="dashboard/Settings" element={<Settings />} />

//           {/* Route only for Students */}
//           {/* cart , EnrolledCourses */}
//           {user?.accountType === ACCOUNT_TYPE.STUDENT && (
//             <>
//               <Route path="dashboard/cart" element={<Cart />} />
//               <Route
//                 path="dashboard/enrolled-courses"
//                 element={<EnrolledCourses />}
//               />
//             </>
//           )}

//           {/* Route only for Instructors */}
//           {/* add course , MyCourses, EditCourse*/}
//           {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
//             <>
//               <Route path="dashboard/instructor" element={<Instructor />} />
//               <Route path="dashboard/add-course" element={<AddCourse />} />
//               <Route path="dashboard/my-courses" element={<MyCourses />} />
//               <Route
//                 path="dashboard/edit-course/:courseId"
//                 element={<EditCourse />}
//               />
//             </>
//           )}
//         </Route>

//         {/* For watching course lectures */}
//         <Route
//           element={
//             <ProtectedRoute>
//               <ViewCourse />
//             </ProtectedRoute>
//           }
//         >
//           {user?.accountType === ACCOUNT_TYPE.STUDENT && (
//             <Route
//               path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
//               element={<VideoDetails />}
//             />
//           )}
//         </Route>

//         {/* Page Not Found (404 Page ) */}
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;



import { ChakraProvider, extendTheme, useColorMode, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// Import other components and pages...

import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import ProtectedRoute from "./components/core/Auth/ProtectedRoute";
import { ACCOUNT_TYPE } from "./utils/constants";
import { HiArrowNarrowUp } from "react-icons/hi";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import CourseDetails from "./pages/CourseDetails";
import SignupForm from "./components/core/Auth/SignupForm";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/VerifyEmail";
import UpdatePassword from "./pages/UpdatePassword";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Settings from "./components/core/Dashboard/Settings/Settings";
import Instructor from "./components/core/Dashboard/Instructor";
import AddCourse from "./components/core/Dashboard/AddCourse/AddCourse";
import MyCourses from "./components/core/Dashboard/MyCourses";
import VideoDetailsSidebar from "./components/core/ViewCourse/VideoDetailsSidebar";
import EditCourse from "./components/core/Dashboard/EditCourse/EditCourse";
import PageNotFound from "./pages/PageNotFound";

// Custom Themes
const lightTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

const darkTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

function App() {
  const { user } = useSelector((state) => state.profile);

  const location = useLocation();
  const [showArrow, setShowArrow] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleArrow = () => {
      if (window.scrollY > 500) {
        setShowArrow(true);
      } else setShowArrow(false);
    };

    window.addEventListener("scroll", handleArrow);
    return () => {
      window.removeEventListener("scroll", handleArrow);
    };
  }, [showArrow]);

  return (
    <ChakraProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
        <Navbar />
        <Button onClick={toggleTheme} position="fixed" top="1rem" right="1rem">
          Toggle Theme
        </Button>

        {/* go upward arrow */}
        <button
          onClick={() => window.scrollTo(0, 0)}
          className={`bg-yellow-25 hover:bg-pink-50 hover:scale-110 p-3 text-lg text-black rounded-2xl fixed right-3 z-10 duration-500 ease-in-out ${
            showArrow ? "bottom-6" : "-bottom-24"
          } `}
        >
          <HiArrowNarrowUp />
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="catalog/:catalogName" element={<Catalog />} />
          <Route path="courses/:courseId" element={<CourseDetails />} />
          {/* Define other routes */}
          <Route path="signup" element={<OpenRoute><Signup /></OpenRoute>} />
          <Route path="login" element={<OpenRoute><Login /></OpenRoute>} />
          <Route path="forgot-password" element={<OpenRoute><ForgotPassword/></OpenRoute>} />
          <Route path="verify-email" element={<OpenRoute><VerifyEmail /></OpenRoute>} />
          <Route path="update-password/:id" element={<OpenRoute><UpdatePassword /></OpenRoute>} />
          <Route element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
            <Route path="dashboard/my-profile" element={<MyProfile />} />
            <Route path="dashboard/Settings" element={<Settings />} />
            {user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route path="dashboard/cart" element={<Cart />} />
                <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
              </>
            )}
            {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
              <>
                <Route path="dashboard/instructor" element={<Instructor />} />
                <Route path="dashboard/add-course" element={<AddCourse />} />
                <Route path="dashboard/my-courses" element={<MyCourses />} />
                <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
              </>
            )}
          </Route>
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <Route path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId" element={<VideoDetailsSidebar />} />
          )}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;



