/* eslint-disable @next/next/no-img-element */
import PaymentPage from "@/components/PaymentPage";
import React from "react";
import { notFound } from "next/navigation";
import connectDB from "@/db/Connectdb";
import User from "@/models/User";

const Username = async ({ params }) => {
  // if username is present in the database then show 404 not found
  const checkUser = async () =>{

    await connectDB()
    let u = await User.findOne({username: params.username})
    if(!u){
      return notFound()
    }
  }
  await checkUser()

  return (
    <>
      <PaymentPage username={params.username} />

    </>
  );
};

export default Username;

export async function generateMetadata({ params}) {
  return{
    title: `${params.username} - Fuel My Work!`,
  }
}