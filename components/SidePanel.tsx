import { ChevronRight, Star, Circle, Minus, Plus, BadgeCheck, SlidersVertical, ChevronUp } from "lucide-react";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";

export default function Category (){
    return(
        <main className="py-20 px-28">
        <div className="w-[295px] h-[1220px] flex flex-col justify-between items-center gap-4 rounded-[20px] border-[1px] p-4">
            <div className="w-[247px] h-[27px] flex justify-between items-center">
                <h1 className="text-xl font-semibold">Filters</h1>
                <SlidersVertical className="opacity-50"/>
            </div>
        <p className="opacity-50">____________________________</p>
        <div className="w-[247px] h-[160px] flex justify-between flex-col opacity-50">
            <p className="flex justify-between">T-shirts <ChevronRight/></p>
            <p className="flex justify-between">Shorts <ChevronRight/></p>
            <p className="flex justify-between">Shirts <ChevronRight/></p>
            <p className="flex justify-between">Hoodie <ChevronRight/></p>
            <p className="flex justify-between">Jeans <ChevronRight/></p>
        </div>
        <p className="opacity-50">____________________________</p>
        <div className="w-[247px] h-[90px] flex flex-col justify-center gap-10">
        <h1 className="text-xl font-semibold flex justify-between">Price
        <ChevronUp/>
        </h1>
        <Slider/> 
        </div>
        <p className="opacity-50">____________________________</p>
        <div className="w-[247px] h-[137px] flex flex-col justify-between gap-4">
        <h1 className="text-xl font-semibold flex justify-between">Colors
        <ChevronUp/>
        </h1>
        <div className="grid grid-cols-5 gap-3">
        <Circle className="fill-[#00C12B] stroke-[1px] stroke-green-700 size-10"/>
        <Circle className="fill-[#F50606] stroke-[1px] stroke-red-700 size-10"/>
        <Circle className="fill-[#F5DD06] stroke-[1px] stroke-yellow-500 size-10"/>
        <Circle className="fill-[#F57906] stroke-[1px] stroke-orange-700 size-10"/>
        <Circle className="fill-[#06CAF5] stroke-[1px] stroke-sky-500 size-10"/>
        <Circle className="fill-[#063AF5] stroke-[1px] stroke-blue-800 size-10"/>
        <Circle className="fill-[#7D06F5] stroke-[1px] stroke-purple-700 size-10"/>
        <Circle className="fill-[#F506A4] stroke-[1px] stroke-pink-700 size-10"/>
        <Circle className="fill-[#FFFFFF] stroke-[1px] stroke-slate-300 size-10"/>
        <Circle className="fill-[#000000] stroke-[1px] stroke-slate-900 size-10"/>
        </div>
        </div>
        <p className="opacity-50">____________________________</p>
        <div className="w-[247px] h-[274px] flex flex-col justify-between">
        <h1 className="text-xl font-semibold flex justify-between">Size
        <ChevronUp/>
        </h1>
        <div className="w-[247px] h-[227px] grid grid-cols-2 gap-4">
        <Button 
        variant="secondary"className="rounded-[62px]">XX-Small</Button>
        <Button 
        variant="secondary"className="rounded-[62px]">X-Small</Button>
        <Button 
        variant="secondary"className="rounded-[62px] ">Small</Button>
        <Button 
        variant="secondary"className="rounded-[62px] ">Medium</Button>
        <Button 
        variant="secondary"className="rounded-[62px] ">Large</Button>
        <Button 
        variant="secondary"className="rounded-[62px] ">X-Large</Button>
        <Button 
        variant="secondary" className="rounded-[62px] ">XX-Large</Button>
        <Button 
        variant="secondary"className="rounded-[62px] ">3X-Large</Button>
        <Button 
        variant="secondary"className="rounded-[62px] ">4X-Large</Button>
        </div>
        </div>
        <p className="opacity-50">____________________________</p>
        <div className="w-[247px] h-[274px] flex flex-col gap-5">
            <h1 className="text-xl font-semibold flex justify-between">Dress Style<ChevronUp/></h1> 
            <p className="flex justify-between">Casual<ChevronRight/></p>
            <p className="flex justify-between">Formal<ChevronRight/></p>
            <p className="flex justify-between">Party<ChevronRight/></p>
            <p className="flex justify-between">Gym<ChevronRight/></p>
        </div>
        <Button className="w-[247px] h-12 rounded-[62px]">
        Apply Filter</Button>
        </div>
        </main>
    )

}