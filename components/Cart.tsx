import Image from "next/image";
import { ChevronRight, ArrowRight, Trash, Minus, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function Cart() {
  return (
      <div className="grid grid-cols-12 gap-8 py-20 px-28">
      <div className='col-span-12 flex'>
        <h1 className="opacity-60">Home</h1>
        <ChevronRight className="opacity-60"/>             
        <h1>Cart</h1>
        </div>
         <div className='col-span-12 text-[40px] font-extrabold'>
         YOUR CART
         </div>
      <div className="col-span-12 gap-6 flex">
      <div className="grid col-span-6 border rounded-[20px] gap-2 p-4">
      <div className="col-span-2 flex gap-4">
      <div className="bg-[#F0EEED] rounded-[8px] flex justify-center items-center">
         <Image
         src="/Strip-Tshirt.png"
         width={124}
         height={124}
         alt="Image"
         />
      </div>
      <div className="w-auto h-auto flex justify-between gap-20 ">
      <div className="flex flex-col justify-between">
         <h1 className="text-xl font-extrabold">Gradient Graphic T-Shirt</h1>
         <h1>Size: <span className="opacity-60">Large</span></h1>
         <h1>Color: <span className="opacity-60">White</span></h1>
         <h1 className="text-2xl font-bold">$145</h1>
      </div>
      <div className="flex flex-col justify-between items-end">
      <Trash/>
         <button className="w-[170px] h-[52px] bg-[#F0F0F0] text-lg text-black rounded-[62px] flex items-center justify-around">
            <Minus/>
            <p>1</p>
            <Plus/>
         </button> 
      </div>
      </div>
      </div>
      <div className="w-[650px] border"></div>
      <div className="col-span-2 flex gap-4">
      <div className="bg-[#F0EEED] rounded-[8px] flex justify-center items-center">
         <Image
         src="/Shirt.png"
         width={124}
         height={124}
         alt="Image"
         />
      </div>
      <div className="flex justify-between gap-44 ">
      <div className="flex flex-col justify-between">
         <h1 className="text-xl font-extrabold">Checkered Shirt</h1>
         <h1>Size: <span className="opacity-60">Large</span></h1>
         <h1>Color: <span className="opacity-60">White</span></h1>
         <h1 className="text-2xl font-bold">$145</h1>
      </div>
      <div className="flex flex-col justify-between items-end">
      <Trash/>
         <button className="w-[170px] h-[52px] bg-[#F0F0F0] text-lg text-black rounded-[62px] flex items-center justify-around">
            <Minus/>
            <p>1</p>
            <Plus/>
         </button> 
      </div>
      </div>
      </div>
      <div className="w-[650px] border"></div>
      <div className="col-span-2 flex gap-4">
      <div className="bg-[#F0EEED] rounded-[8px] flex justify-center items-center">
         <Image
         src="/T-Shirt.png"
         width={124}
         height={124}
         alt="Image"
         />
      </div>
      <div className="flex justify-between gap-20 ">
      <div className="flex flex-col justify-between">
         <h1 className="text-xl font-extrabold">T-Shirt with Tape-Detail </h1>
         <h1>Size: <span className="opacity-60">Large</span></h1>
         <h1>Color: <span className="opacity-60">White</span></h1>
         <h1 className="text-2xl font-bold">$145</h1>
      </div>
      <div className="flex flex-col justify-between items-end">
      <Trash/>
         <button className="w-[170px] h-[52px] bg-[#F0F0F0] text-lg text-black rounded-[62px] flex items-center justify-around">
            <Minus/>
            <p>1</p>
            <Plus/>
         </button> 
      </div>
      </div>
      </div>
      </div>
    <div className="col-span-4 border rounded-[20px] grid justify-around p-4">
         <h1 className="text-2xl font-bold">Order Summary</h1>
         <div className="w-[457px] h-[193px] flex flex-col justify-between">
          <p className="flex justify-between opacity-60">Subtotal<span className="font-bold">$565</span></p>
          <p className="flex justify-between opacity-60">Discount (-20%)<span className="font-bold text-[#FF3333]">-$113</span></p>
          <p className="flex justify-between opacity-60">Delvery Fee<span className="font-bold">$15</span></p>
          <div className="w-[457px] border"></div>
          <h1 className="flex justify-between">Total <span className="font-bold">$467</span></h1>
         </div>
         <div className="w-[457px] h-[48px] flex gap-3 justify-center ">
            <Input placeholder="Add promo code"
                   className="w-[326px] h-[48px] rounded-[62px] bg-[#F0F0F0]"
                    />
            <Button className="w-[119px] h-[48px] rounded-[62px]">Apply
            </Button>
         </div>
         <Button className="w-[457px] h-[48px] rounded-[62px]">Go To Checkout
          <ArrowRight/>
         </Button>
         </div>
         </div>
    </div>
  );
}
