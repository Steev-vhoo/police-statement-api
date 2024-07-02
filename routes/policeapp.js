import { Router } from "express";
import { StatementModel } from "../models/statement_model.js";
import { addstatement, deleteStatement, getStatement, getStatements, updateStatement } from "../controller/statement_controller.js";

const policeApp = Router()

policeApp.get('/about', (req, res) => {
    res.json('Welcone to the police portal');
});

policeApp.get('/statements',getStatements)

policeApp.post('/statement', addstatement);

policeApp.get('/idstatement/:id', getStatement)

policeApp.patch('/idstatement/:id', updateStatement)

policeApp.delete('/idstatement/:id', deleteStatement)

//policeApp.post('/addstatement',addstatement);

export default policeApp;