
const validator = require("validator");
const { BatchModel } = require("../../Models/Batch");


const input_fileds_validate_batch = (req,res,next) =>{
    const { batchName } = req.body;
    let status = 0;
    let data = [];

    const batchNameRegex = /^[a-zA-Z0-9-\s]+$/;
    if (!batchName || !batchNameRegex.test(batchName)) {
        msg = "Invalid or missing Batch Name. Batch Name should contain only letters, numbers, hyphens, and spaces.";
        return res.json({ status: status, message: msg, data: data });
    }

    req.batchData = { batchName };
    next();
}

const check_duplicate_batch_name = async(req,res,next) =>{
    const {batchName} = req.batchData;
    try {
        const match = await BatchModel.findOne({name:batchName})
        if(match){
            return res.json({status:0,message:"Batch Name is already used"});
        }
        next();
    } catch (error) {
        res.json({status:0,message:error.message});
    }
}

const create_Batch = async(req,res) => {
    const {batchName} = req.batchData;
    const data = new BatchModel({name:batchName})
    try {
        await data.save();
        res.status(201).json({ status: 1, message: 'Batch Created successfully', data: req.courseData });
    } catch (error) {
        res.status(500).json({ status: 0, message: `An error occurred ${error.message}`, data:[]  });
    }
}

module.exports = {
    input_fileds_validate_batch,
    check_duplicate_batch_name,
    create_Batch
}