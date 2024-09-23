import mongoose, { models } from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: { type: String, require: true },
    name: { type: String},
    username: { type: String, require: true },
    profilepic: { type: String },
    coverpic: { type: String },
    razorpayid:{ type: String},
    razorpaysecret:{ type: String},
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
});

export default mongoose.models.User || model("User", UserSchema);