import { ChevronRight, Star, Circle, Minus, Plus, BadgeCheck, } from "lucide-react";
import { Button } from "@/components/ui/button";



export default function ProductDetails() {
    return(
        <div>
        <div className="w-[1240px] border-[1px] bg-[#000000] relative rotate-180 top-14 left-[17.5%]"></div>
        <div className="flex flex-col gap-6 py-20">
        <div className="flex gap-1 py-2 px-[18%]">
        <button className="flex gap-1 opacity-50">Home<ChevronRight/></button>
        <button className="flex gap-1 opacity-50">Shop<ChevronRight/></button>
        <button className="flex gap-1 opacity-50">Men<ChevronRight/></button>
        <p className="flex gap-1">T-Shirts</p>
        </div>
        <div className="flex gap-6 justify-center">
        <div className="flex gap-4">
        <div className="flex flex-col gap-4">
        <div className="w-[152px] h-[167px] bg-[#F0EEED] rounded-2xl"></div>
        <div className="w-[152px] h-[167px] bg-[#F0EEED] rounded-2xl"></div>
        <div className="w-[152px] h-[167px] bg-[#F0EEED] rounded-2xl"></div>
        </div>
        <div className="w-[444px] h-[530px] bg-[#F0EEED] rounded-2xl"></div>
        </div>
        <div className="flex flex-col justify-between">
        <h1 className="text-[40px] font-extrabold">ONE LIFE GRAPHIC T-SHIRT</h1>
        <div className="flex">
        <Star className=" fill-[#FFC633] stroke-none"/>
        <Star className=" fill-[#FFC633] stroke-none"/>
        <Star className=" fill-[#FFC633] stroke-none"/>
        <Star className=" fill-[#FFC633] stroke-none"/>
        <div className="relative w-fit h-fit">
        <Star className="fill-[#FFC633] stroke-none" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
        </div>
        <p>4.5<span className="opacity-60">/5</span></p>
        </div>
        <div className="flex gap-4">
            <p className="text-2xl font-semibold">$260 <span className="opacity-40 line-through font-medium">$300</span></p>
            <div className="w-[60px] h-[30px] bg-red-100 rounded-[62px] text-red-500 font-light flex items-center justify-center text-sm">-40%</div>
            </div>
            <p className="text-base opacity-50">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and <br /> breathable fabric, it offers superior comfort and style.</p>
            <p className="opacity-20">____________________________________________________________________</p>
            <h1 className="opacity-50">Select Colors</h1>
            <div className="flex gap-2 ">
            <Circle
            className="fill-[#4F4631] stroke-none size-10"/>
            <Circle
            className="fill-[#314F4A] stroke-none size-10"/>
            <Circle
            className="fill-[#31344F] stroke-none size-10"/>
            </div>
            <p className="opacity-20">____________________________________________________________________</p>
            <h1 className="opacity-50">Choose Size</h1>
            <div className="flex gap-3">
            <Button className="w-[86px] h-[46px] bg-[#F0F0F0] text-base text-slate-500 rounded-[62px]">Small</Button>    
            <Button className="w-[105px] h-[46px] bg-[#F0F0F0] text-base text-slate-500 rounded-[62px]">Medium</Button> 
            <Button className="w-[86px] h-[46px] rounded-[62px]">Large</Button> 
            <Button className="w-[105px] h-[46px] bg-[#F0F0F0] text-base text-slate-500 rounded-[62px]">X-Large</Button> 
            </div>
            <p className="opacity-20">____________________________________________________________________</p>
            <div className="flex gap-6">
            <Button className="w-[170px] h-[52px] bg-[#F0F0F0] text-lg text-black rounded-[62px] flex justify-around">
            <Minus/>
            <p>1</p>
            <Plus/>
            </Button>     
            <Button className="w-[400px] h-[52px] text-base rounded-[62px]">Add To Cart</Button> 
            </div>
        </div>
        </div>
        </div>
        <div className="flex items-center justify-evenly text-xl">
            <h1 className="opacity-60">Product Details</h1>
            <h1>Rating & Reviews</h1>
            <h1 className="opacity-60">FAQs</h1>
        </div>
        <p className="opacity-20 flex justify-center">_________________________________________________________________________________________________________________________________________</p>
        </div>
    )
}