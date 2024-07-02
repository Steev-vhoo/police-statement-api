import { Schema, model } from "mongoose";

const statementSchema = new Schema({
    incidentType: {type: String, enum: ['Criminal','Non-Criminal']},
    civilianStatus: {type: String, enum: ['suspect', 'complainant','witness']},
    statement: {type: String},
    date: {type: Date},
    caseStatus: {type: String, enum: ['Open','Closed']},
    civilianId: {type: String},
    createAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
})
 


export const StatementModel = model('Statement', statementSchema);