import { Schema, model } from "mongoose";

const civilianSchema = new Schema({
    statementid: {type: String},
    incidentType: {type: String},
    civilianStatus: {type: String},
    caseStatus: {type: String},
    civilianId: {type: String},
    createAt: {type: String},
    updatedAt: {type: String}
})



export const CivilianModel = model('Civilian', civilianSchema);