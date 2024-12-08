import { Search, CircleUserRound, ShoppingCart, ChevronDown } from "lucide-react"


export default function Navbar() {
  return (
    <div className="w-screen h-[38px] flex items-center justify-between px-4 md:px-8 lg:px-16 relative top-8">
      {/* Left Section */}
        <h4 className="text-black font-extrabold text-xl md:text-3xl">SHOP.CO</h4>
        <div className="hidden md:flex gap-6">
          <button className="flex gap-1 text-sm md:text-base hover:underline">Shop <ChevronDown/></button>    
          <button className="text-sm md:text-base hover:underline">On Sale</button>
          <button className="text-sm md:text-base hover:underline">New Arrivals</button>
          <button className="text-sm md:text-base hover:underline">Brands</button>
        </div>
          {/* Right Section */}
          <div className="flex items-center justify-between gap-4">
        <div className="w-[200px] md:w-[577px] h-[38px] bg-[#F5F5F5] flex items-center px-4 rounded-[50px]">
          <button>
            <Search className="text-gray-500" />
          </button>
          <input
             type="text"
             placeholder="Search For Products"
             className="hidden md:block bg-transparent text-slate-400 text-xs w-full outline-none"
           />           
        </div>
        <button>
          <ShoppingCart className="text-gray-700" />
        </button>
        <button>
          <CircleUserRound className="text-gray-700" />
        </button>
      </div>
    </div>
  );
}
