const {Router} = require("express");
const { validate_login, check_roles } = require("../Middleware/common");
const { validate_Admin, create_cookies, check_login_or_not } = require("../Middleware/Admin/login");
const { input_fileds_validate, check_duplicate_title, check_assigend_instructor, create_course, check_assigend_batch, all_courses } = require("../Middleware/Admin/course");
const { input_fileds_validate_batch, check_duplicate_batch_name, create_Batch } = require("../Middleware/Admin/batch");

const AdminRouter = Router();

AdminRouter.post('/login',validate_login,validate_Admin,check_roles(['admin']),create_cookies)



/* 
COURSE RELATED ROUTES START FROM HERE
*/
AdminRouter.post('/course/create',
    check_login_or_not,
    input_fileds_validate, //check all input fields with valid data
    check_duplicate_title,
    check_assigend_instructor,
    check_assigend_batch,
    create_course,
    (req,res)=>{
        res.send({messege:req.courseData})
    }
)

AdminRouter.get('/course/',
    check_login_or_not,
    all_courses
)
/* 
COURSE RELATED ROUTES END HERE
*/



/* 
BATCH RELATED ROUTES START FROM HERE
*/
AdminRouter.post('/batch/create',
    input_fileds_validate_batch,
    check_duplicate_batch_name,
    create_Batch,
    (req,res)=>{
        res.send({messege:req.courseData})
    }
)
/* 
BATCH RELATED ROUTES END HERE
*/



module.exports = {AdminRouter}