import { StatementModel } from "../models/statement_model.js";


//Function to store data in the database
export const addstatement = async (req, res) => {

    try {
        const addData = await StatementModel.create(req.body);
        res.status(200).send(addData)
    } catch (error) {
        console.log(error)
    }
}

//Statement to retrieve all data/ filtered statement
export const getStatements = async (req, res, next) => {
    try {
        const status = req.query.caseStatus
       if (status) {
         //Get filtered statement from database
         const allStatements = await StatementModel.find({caseStatus: status})
         //Return all filtered statements
        return res.send(allStatements)
       } else {
        const allStatements = await StatementModel.find()
        //Return all recipes
       return res.send(allStatements)
       }
    } catch (error) {
        next(error);
    }
}

//Retrieve one statement
export const getStatement = async (req, res, next) => {
    try {
        const idStatement = await StatementModel.findById(req.params.id)
        res.status(200).json(idStatement)
    } catch (error) {
        next(error)
    }
}
//Updating data
export const updateStatement = async (req, res, next) => {
    
    try {
        const status = req.body.caseStatus
        const upStatement = await StatementModel.findByIdAndUpdate(req.params.id, {caseStatus: status})
        res.status(200).json(upStatement)
    } catch (error) {
        next(error)
    }
}

export const filterStatement = async (req, res, next) => {
    
    try {
        const date = req.body.date
        const upStatement = await StatementModel.find(req.params.id, {caseStatus: date})
        res.status(200).json(upStatement)
    } catch (error) {
        next(error)
    }
}

//Deleting data
export const deleteStatement = async (req, res, next) => {
    
    try {
        
        const delStatement = await StatementModel.findByIdAndDelete(req.params.id)
        res.status(200).json(delStatement)
    } catch (error) {
        next(error)
    }
}


//const status = req.body.caseStatus