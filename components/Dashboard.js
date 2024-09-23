"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchuser, updateProfile } from "@/actions/useractions";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'

const Dashboard = () => {
  const { data: session, status, update, } = useSession(); // Get session status
  const router = useRouter()
  const [form, setform] = useState({})

  useEffect(() => {
    getData()
    if (!session) {
      router.push('/login')
    }
  }, [router, session])

  // const getData = async () =>{
  //   console.log(session.user)
  //   let u = await fetchuser(session.user.name)
  //   setform(u)
  // }
  const getData = async () => {
    if (session && session.user) {
      let u = await fetchuser(session.user.name);
      setform(u);
    }
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    update()
    console.log(session.user.name);
    let a = await updateProfile(e, session.user.name)
    toast('Profile Updated', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container mx-auto py-5 px-6">
        <h1 className="text-3xl font-bold text-center py-5">
          Welcome to your dashboard
        </h1>
        <form className="max-w-2xl mx-auto" action={handleSubmit}>
          {/* input for Name */}
          <div className="my-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={form.name ? form.name : ""}
              onChange={handleChange}
              name="name"
            />
          </div>
          {/* input for email */}
          <div className="my-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              E-mail
            </label>
            <input
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="email"
              value={form.email ? form.email : ""}
              onChange={handleChange}
              name="email"
            />
          </div>
          {/* input for username */}
          <div className="my-2">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={form.username ? form.username : ""}
              onChange={handleChange}
              name="username"
            />
          </div>
          {/* input for profile */}
          <div className="my-2">
            <label
              htmlFor="profilepic"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Profile Picture
            </label>
            <input
              id="profilepic"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={form.profilepic ? form.profilepic : ""}
              onChange={handleChange}
              name="profilepic"
            />
          </div>
          {/* input for cover pic */}
          <div className="my-2">
            <label
              htmlFor="coverpic"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cover Picture
            </label>
            <input
              id="coverpic"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={form.coverpic ? form.coverpic : ""}
              onChange={handleChange}
              name="coverpic"
            />
          </div>
          {/* input for razorpay id */}
          <div className="my-2">
            <label
              htmlFor="razorpayid"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              RazorPay ID
            </label>
            <input
              id="razorpayid"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={form.razorpayid ? form.razorpayid : ""}
              onChange={handleChange}
              name="razorpayid"
            />
          </div>
          {/* input for razorpay secret */}
          <div className="my-2">
            <label
              htmlFor="razorpaysecret"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              RazorPay Secret
            </label>
            <input
              id="razorpaysecret"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={form.razorpaysecret ? form.razorpaysecret : ""}
              onChange={handleChange}
              name="razorpaysecret"
            />
          </div>
          <div className="my-6">
            <button
              type="submit"
              className=" w-full bg-blue-500 p-2 rounded-lg hover:bg-blue-800 hover:text-[17px]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
