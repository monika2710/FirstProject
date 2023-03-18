import mongoose from "mongoose";
const studentschema = new mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },
    Course:{
        type: String,
        required: true,
    },
    Email:{
        type: String,
        required: true,
    },
    Contact:{
        type: String,
        required: true,
    },
});

export default mongoose.model("student", studentschema);

