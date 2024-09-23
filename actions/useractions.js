"use server";

import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDB from "@/db/Connectdb";
import User from "@/models/User";
import Username from "@/app/[username]/page";

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB();

    // fetch from the user who is getting the payment
    let user = await User.findOne({username: to_username})
    const secret = user.razorpaysecret
    const id = user.razorpayid

    var instance = new Razorpay({
        key_id: id,
        key_secret: secret,
    })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options);

    // create a payment object which shows pending payment in th database

    await Payment.create({
        oid: x.id,
        amount: amount/100,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message,
    })

    return x
}

export const fetchuser = async (username) => {
    await connectDB()
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}
export const fetchpayments = async (username) => {
    await connectDB()
    // find all payment sorted in a decreasing order of amount and flatten object ID 
    let p = await Payment.find({ to_user: username, done: true })
        .sort({ amount: -1 })
        .limit(10)
        .lean();
    return p
}
export const totalpayments = async (username) => {
    await connectDB()
    // find all payment sorted in a decreasing order of amount and flatten object ID 
    let t = await Payment.find({ to_user: username, done: true })
        .sort({amount: -1})
        .lean();
    return t
}

export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)

    //if the username is being updated check if username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username Already exists" }
        }
        await User.updateOne({ email: ndata.email }, ndata)
        //now update all username in payment table
        await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})

    }
    else{

        await User.updateOne({ email: ndata.email }, ndata)
    }

}
