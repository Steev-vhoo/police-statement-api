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

//Statement to retrieve all data
export const getStatements = async (req, res, next) => {
    try {
        //Get all statement from database
        const allStatements = await StatementModel.find()
        //Return all recipes
        res.json(allStatements)
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