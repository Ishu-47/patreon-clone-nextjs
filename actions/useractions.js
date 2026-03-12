"use server"

import Razorpay from "razorpay"
import Payments from "@/models/Payments"
import connectDB from "@/db/connectDb"
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.NEXT_PUBLIC_KEY_SECRET })

    // This is the only 'create' call you need
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    let x = await instance.orders.create(options)
    
    // Create a payment record in your database
    await Payments.create({
        oid: x.id, 
        amount: Number.parseInt(amount), 
        to_user: to_username, 
        name: paymentform.name,
        message: paymentform.message, 
        status: "PENDING"
    })
    return x
}

export const fetchuser = async (username) => {
    await connectDB();
    let u = await User.findOne({ username: username });
    let user = u.toObject({flattenObjectsIds: true})
    return user;
}

export const fetchpayments = async (username) => {
    await connectDB();
    // Fetch payments and return as plain objects with .lean()
    let p = await Payments.find({ to_user: username, done: true }).sort({ amount: -1 }).lean();
    return p;
}