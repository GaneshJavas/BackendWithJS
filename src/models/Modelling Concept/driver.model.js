import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    driver : mongoose.ObjectId,
},{timestamps: true});

const Car = mongoose.model("Driver", carSchema);




const car1 = new Car();

car1.driver = new mongoose.Types.ObjectId();
// console.log(car1 instanceof Car)

const car2 = new Car();
car2.driver = new mongoose.Types.ObjectId();

console.log(car1.driver.toString());
console.log(car2.driver.toString());
