"use client";

import React from 'react';
import Script from 'next/script';
import { useState, useEffect } from 'react';
import { initiate } from '@/actions/useractions';
import { useSession } from 'next-auth/react';
import { fetchuser, fetchpayments } from '@/actions/useractions';

const Paymentpage = ({ username }) => {
  // const { data: session } = useSession();
  const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
  const [currentuser, setcurrentuser] = useState(null);
  const [payments, setPayments] = useState([])

  useEffect(() => {
    getData()
  }, [])


  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  }
  const getData = async () => {
    let u = await fetchuser(username)
    setcurrentuser(u)
    let dbpayments = await fetchpayments(username)
    setPayments(dbpayments)
  }
  const pay = async (amount) => {
    //Get the order Id
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;

    var options = {
      "key": process.env.NEXT_PUBLIC_KEY_ID,
      "amount": amount,
      "currency": "INR",
      "name": "Get Me A Chai",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": paymentform.name, //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    }
    var rzp1 = new Razorpay(options);
    rzp1.open();
  }
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className='cover w-full relative'>
        <img className='object-cover w-full' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/12772748/529362c7039f4987ac4e14ffa9753e2e/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/4.png?token-hash=o_8l-fy8MFKEoQXwGDZRCSvHEN0QpWz-7uvLJebPsxA%3D&token-time=1762214400" alt="" />
        <div className='absolute right-[46%] bottom-[-55px]  '>
          <img width={120} className='rounded-2xl' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/12772748/731d8072b6814967a34ee295b435d7cb/eyJoIjozNjAsInciOjM2MH0%3D/3.jpg?token-hash=nZjyyhHuF03pemTXc-oa75YZSqBYzpGg36mB-DQSemo%3D&token-time=1761264000" alt="" />
        </div>
      </div>
      <div className="info flex flex-col justify-center items-center my-20 gap-1">
        <div className="text-3xl font-bold text-center">
          ♥️Celebi Cosplays♥️
        </div>
        <div>
          Cosplay Content Creator!
        </div>
        <div>
          194 posts
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 text-white rounded-lg p-10">
            {/*Show list of all the supporters as the leaderboard*/}
            <h2 className='text-2xl font-bold my-5'>Supporters</h2>
            <ul className='mx-5 text-lg'>
              {payments.map((p, i) => {
                
                return (
                  <li key={p._id} className='my-4 flex gap-2 items-center'>
                    <img width={33} src="avatar.gif" alt="user avatar" />
                    <span>
                      {p.name} donated <span className='font-black'>₹{p.amount / 100}</span> with a sweet note "{p.message}"
                    </span>
                  </li>
                )
              })}


            </ul>
          </div>

          <div className="makePayment w-1/2 bg-slate-900 text-white rounded-lg p-10">
            <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
            <div className='flex gap-2 flex-col'>
              <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
              <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
              <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
              <button onClick={() => pay(paymentform.amount * 100)} className='p-3 cursor-pointer text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Pay</button>

            </div>
            <div className='flex gap-2 mt-5'>
              <button className='bg-slate-800 p-3 rounded-lg cursor-pointer' onClick={() => pay(1000)}>Pay ₹10</button>
              <button className='bg-slate-800 p-3 rounded-lg cursor-pointer' onClick={() => pay(2000)}>Pay ₹20</button>
              <button className='bg-slate-800 p-3 rounded-lg cursor-pointer' onClick={() => pay(3000)}>Pay ₹30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Paymentpage
