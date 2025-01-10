

import { Search, CircleUserRound, ShoppingCart, ChevronDown, AlignJustify } from "lucide-react"
import Link from "next/link";


export default function Navbar() {
  return (
    <div className="w-screen h-[18px] lg:h-[38px] flex items-center justify-between px-4 md:px-8 lg:px-28 relative top-8">
      {/* Left Section */}
      <div className="flex items-center gap-4 lg:gap-8">
        <button className="lg:hidden">
          <AlignJustify className="text-gray-800"/></button>
        <Link href="/">
        <h4 className="text-black font-extrabold text-3xl lg:text-[32px]">SHOP.CO</h4>
        </Link>
        <div className="hidden md:flex gap-6">
          <Link
           href="/category-page"
           className="flex gap-1 text-sm md:text-base hover:underline">Shop<ChevronDown/> 
          </Link>
          <button className="text-sm md:text-base hover:underline">On Sale</button>
          <button className="text-sm md:text-base hover:underline">New Arrivals</button>
          <button className="text-sm md:text-base hover:underline">Brands</button>
        </div>
        </div>
          {/* Right Section */}
          <div className="flex items-center justify-between gap-2 lg:gap-8">
        <div className="w-[200px] md:w-[577px] h-[38px] bg-[#F5F5F5] hidden lg:flex gap-4 px-4 rounded-[50px]">
          <button>
            <Search className="text-gray-800"/>   
          </button>
          <input
             type="text"
             placeholder="Search For Products"
             className="bg-transparent text-slate-600 w-full outline-none"
           />           
        </div>
        <button>
            <Search className="text-gray-800 lg:hidden" 
            />
          </button>
        <Link href="/cart">
          <ShoppingCart className="text-gray-700" />
        </Link>
        <button>
          <CircleUserRound className="text-gray-700" />
        </button>
      </div>
    </div>
  );
}
