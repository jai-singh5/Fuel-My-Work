import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
  name: { type: String, require: true },
  to_user: { type: String, require: true },
  oid: { type: String, require: true },
  message: { type: String},
  amount: { type: Number, require: true},
  razorpayid:{ type: String},
  razorpaysecret:{ type: String},
  createdAt: { type: String, require: true},
  updatedAt: { type: String, require: true},
  done: { type: Boolean, default: false},
});


export default mongoose.models.Payment || model("Payment", PaymentSchema);
