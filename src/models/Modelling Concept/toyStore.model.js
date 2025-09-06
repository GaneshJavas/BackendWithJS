import mongoose from "mongoose";

const toySchema = new mongoose.Schema({
    name: [String]
})


const toyBoxSchema = new mongoose.Schema({
    toys: {
        type: toySchema
    }

})


const ToyBox = mongoose.model("ToyBox",toyBoxSchema)


