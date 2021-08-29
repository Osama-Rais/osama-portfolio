import React from "react"
import image from "../images/background2.jpg"
export default function Contact(){
  return(
    <main>
      <img 
      src={image}
       alt="Home Page" 
       className="absolute object-cover w-full h-full"/>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 ">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-sung home-name">
          Hi.I'm Osama
        </h1>
      </section>
    </main>
  )
}