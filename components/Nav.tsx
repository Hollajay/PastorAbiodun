"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Icon from "./ui/Icon";


export default function Header() {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Live Date & Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleString("en-NG", {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full max-w-7xl rounded-full mx-auto border-gray-300 border-b-[1px]  ">

      <div className="bg-white  text-sm px-6 md:px-0 py-4 flex justify-between items-center">
        
        
        <p className="opacity-80">{time}</p>

       
        <div className="flex items-center gap-4">
          
       
          <div className="flex items-center gap-1 text-black">
            {/* <FaPhone size={14} /> */}
            <span>Hotline: +234 800 000 0000</span>
          </div>

        
          <div className="flex items-center gap-3">
            <Icon type="instagram" />
            <Icon type="facebook" />
            
        </div>
      </div>

      
      <div className=" w-full bg-white">
      <div className="px-6 md:px-0 py-4 flex justify-between items-center ">

        {/* LOGO */}
        <h1 className="text-xl md:text-2xl font-bold text-black">
          Pastor S.A Abiodun
        </h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-black font-medium">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#" className="hover:text-blue-600 transition">Sermons</a>
          <a href="#" className="hover:text-blue-600 transition">Events</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-black text-white px-5 py-2 rounded hover:bg-blue-700 transition">
            Partner
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            {/* <FaHamburger /> */}O
          </button>
        </div>
      </div>
      </div>


      {/* 📱 MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 right-0 w-[75%] h-full bg-white shadow-lg p-6 z-50"
        >
          {/* CLOSE */}
          <div className="flex justify-end mb-6">
            <span onClick={() => setMenuOpen(false)} className="cursor-pointer" />
          </div>

          {/* MENU ITEMS */}
          <nav className="flex flex-col gap-6 text-black text-lg">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Sermons</a>
            <a href="#">Events</a>
            <a href="#">Contact</a>
          </nav>

          {/* CTA */}
          <button className="mt-8 bg-blue-600 text-white px-5 py-3 rounded-full">
            Partner
          </button>
        </motion.div>
      )}
    </header>
  );
}