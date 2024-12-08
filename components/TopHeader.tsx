import { X } from "lucide-react";




export default function TopHeader() {
    return (
      <header className="w-screen bg-black py-2 xl:py-1 flex items-center justify-center px-4 md:px-8 sm:px-18">
        {/* Left Section: Sale Announcement */}
        <div className="flex items-center justify-between">
          <h1 className="text-white text-sm md:text-base lg:text-[14px]">
          Sign up and get 20% off to your first order. <span className="font-bold">Sign Up Now</span>
          </h1>
          </div>
          <button className="hidden md:block text-white absolute top-0 right-0 m-1">
          <X />
          </button>
      </header>
    );
  }