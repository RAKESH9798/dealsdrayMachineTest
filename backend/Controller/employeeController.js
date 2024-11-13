import Employee from '../Model/employeeModel.js';

const createEmployee=async(req,res)=>{
    const employee = req.body;
    const isEmployeeExist = await Employee.findOne({email:employee.email});

    if(isEmployeeExist){
        console.log("Employee is already registered.");
        res.status(409).send({message:"Employee is already registered"});
    }

    try {
        const newEmployee = await Employee.create(employee);
        if(newEmployee){
            console.log("Employee is successfully added to the database.",newEmployee);
            res.status(201).send({message:"Employee is successfully added to the database."});
        }
    } catch (error) {
        res.status(500).send({message:"Error occured while adding employee to the database."},error);
    }
}

export {createEmployee};