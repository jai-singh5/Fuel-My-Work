/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { fetchpayments, initiate, fetchuser, totalpayments, } from "@/actions/useractions";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'
import { useRouter } from "next/navigation";
import CoverpicSkeleteon from "./CoverpicSkeleteon";


const PaymentPage = ({ username }) => {
    // const {data: session } = useSession()

    const [paymentform, setpaymentform] = useState({ name: "", message: "", amount: "" })
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const [allpayments, setAllPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast.success('Thanks for Your Donation', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            })
        }
        router.push(`/${username}`)
    }, [])


    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async (params) => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
        let addpayment = await totalpayments(username)
        setAllPayments(addpayment)

    }

    const pay = async (amount) => {
        // Get The order ID 
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Fuel My Work", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Jai Singh", //your customer's name
                "email": "jai.singh@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#1b3294"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className="cover w-full relative">
                {currentUser.coverpic?(
                    <img
                        className="object-cover h-40 md:md:h-[21rem] w-full"
                        src={currentUser.coverpic}
                        alt="coverImage"
                        onError={(e) => (e.target.src = <CoverpicSkeleteon />)}
                    />
                ):(
                    <CoverpicSkeleteon />
                )}
                <div className=" size-20 md:size-32 object-center absolute mx-auto right-0 left-0 -bottom-12 md:-bottom-16 border-4 overflow-hidden border-red-600 rounded-full bg-black">
                    <img
                        className="object-cover size-20 md:size-32 "
                        src={
                            currentUser.profilepic?currentUser.profilepic
                                : "./avatar.gif"
                        }
                        alt="avatarImage"
                        onError={(e) => (e.target.src = "./avatar.gif")}
                    />
                </div>
            </div>
            <div className="info flex justify-center items-center my-20 mb-32 gap-2 flex-col">
                <div className="font-bold">
                    @{username}
                </div>
                <div className="text-slate-500">
                    Let fuel {currentUser.name} for his Work!
                </div>
                <div className="text-slate-500">
                    {allpayments.length} Payments | ₹{allpayments.reduce((a, b) => a + (Number(b.amount) || 0), 0)} has raised.
                </div>
                <div className="payment flex flex-col md:flex-row w-[80%] gap-3 mt-11">
                    <div className="supporter w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        {/* Show List of all the Supporter as a Leader */}
                        <h2 className="text-2xl font-bold my-5">SUPPORTERS</h2>
                        <ul className="mx-5 text-lg">
                            {payments.length == 0 && <li>No Payments Yet 😕</li>}
                            {payments.map((p, i) => {
                                return <li key={i} className="my-2 flex gap-2 items-center">
                                    <img width={33} src="avatar.gif" alt="user avatar" />
                                    <span>
                                        <span className="text-blue-500 font-bold">{p.name} </span> donated
                                        <span className="text-green-500 font-bold"> ₹{(p.amount)} </span>
                                        with a message
                                        <span className="text-yellow-500 font-bold"> `&quot;`{p.message}`&quot;`</span>
                                    </span>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
                        <div className="flex flex-col gap-2">
                            <input
                                onChange={handleChange}
                                value={paymentform.name}
                                type="text"
                                className="w-full p-3 rounded-lg bg-slate-800"
                                placeholder="Enter Name"
                                name="name"
                            />
                            <input
                                onChange={handleChange}
                                value={paymentform.message}
                                type="text"
                                className="w-full p-3 rounded-lg bg-slate-800"
                                placeholder="Enter Message"
                                name="message"
                            />
                            <input
                                onChange={handleChange}
                                value={paymentform.amount}
                                type="number"
                                className="w-full p-3 rounded-lg bg-slate-800"
                                placeholder="Enter Amount"
                                name="amount"
                            />
                            <button
                                className="bg-blue-800 p-3 rounded-lg hover:bg-green-700 hover:text-[17px] disabled:bg-slate-500 disabled:hover:bg-slate-600"
                                disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}
                                onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}>
                                Pay
                            </button>
                        </div>
                        {/* Or Choose from these Amount */}
                        <div className="flex flex-col md:flex-row gap-2 mt-5">
                            <button className="bg-slate-800 p-3 rounded-lg hover:bg-green-700 disabled:hover:bg-slate-600" onClick={() => pay(1000)}
                                disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4}>Pay ₹10</button>
                            <button className="bg-slate-800 p-3 rounded-lg hover:bg-green-700 disabled:hover:bg-slate-600" onClick={() => pay(2000)}
                                disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} > Pay ₹20</button>
                            <button className="bg-slate-800 p-3 rounded-lg hover:bg-green-700 disabled:hover:bg-slate-600" onClick={() => pay(3000)}
                                disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} > Pay ₹30</button>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
};

export default PaymentPage;
