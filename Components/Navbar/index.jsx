import React from "react";
import Link from "next/link";
import {
  ShoppingCartIcon,
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div>
      <div className="flex space-x-4 bg-white h-[74px] shadow-lg text-center justify-between items-center px-4">
        <MenuIcon className="h-6 w-6 md:hidden" />
        <Link href="/">
          <h2 className="text-3xl font-bold cursor-pointer">OvenArth</h2>
        </Link>
        <h3 className="hidden text-sm md:block">Categories</h3>
        <form className="hidden bg-[#f8fafb] md:flex border border-black rounded-3xl flex-1 h-12 items-center">
          <SearchIcon className="h-5 w-5 mx-4 text-gray" />
          <input
            type="text"
            placeholder="Search for anything"
            className="bg-transparent text-sm outline-none"
          />
        </form>
        <h3 className="hidden text-sm lg:block ">OvenArth Business</h3>
        <h3 className="hidden text-sm lg:block md:hidden">Teach on OvenArth</h3>
        <div className="flex">
          <SearchIcon className="h-6 w-6 text-gray-400 md:hidden" />
          <ShoppingCartIcon className="h-6 w-6 " />
        </div>
        <div className="hidden md:flex pr-4 space-x-4 justify-end">
          <Link href="/login">
            <button className="border border-black h-10 text-sm font-bold w-20 hover:bg-[#F5F5F5]">
              Log In
            </button>
          </Link>
          <Link href="/register">
            <button className="border bg-black text-white border-black h-10 text-sm font-bold w-20 hover:bg-[#F5F5F5] hover:text-black">
              sign Up
            </button>
          </Link>
          <button className="border border-black w-10 flex items-center  justify-center hover:bg-[F5F5F5]">
            <GlobeAltIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;