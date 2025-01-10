import { Star } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

export default function NewArrival() {
    return(
        <div className="w-screen relative py-20 flex flex-col items-center gap-4 ">
            <h4 className="text-5xl font-extrabold flex justify-center">NEW ARRIVALS</h4>
            <div className="flex items-center justify-center gap-6 py-16">
            <div className="flex flex-col gap-4">
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
                    <Image
                    src="/T-Shirt.png"
                    width={408}
                    height={100}
                    alt="T-Shirt"
                    />
                </div>
                <Link href="/product-details">
                <h1 className="text-xl font-semibold">T-Shirt With Tape Details</h1> 
                </Link>
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
                <p className="text-2xl font-semibold">$120</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
                    <Image
                    src="/Pant.png"
                    width={250}
                    height={100}
                    alt="T-Shirt"
                    />
                </div>
                <h1 className="text-xl font-semibold">Skinny Fit Jeans</h1> 
                <div className="flex">
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <div className="relative w-fit h-fit">
                <Star className="fill-[#FFC633] stroke-none" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
                </div>
                <p>3.5<span className="opacity-60">/5</span></p>
                </div>
                <div className="flex gap-4">
                <p className="text-2xl font-semibold">$240 <span className="opacity-40 line-through font-medium">$260</span></p>
                <div className="w-[60px] h-[30px] bg-red-100 rounded-[62px] text-red-500 font-light flex items-center justify-center text-sm">-20%</div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
                    <Image
                    src="/Shirt.png"
                    width={408}
                    height={100}
                    alt="Shirt"
                    />
                </div>
                <h1 className="text-xl font-semibold">Checkered Shirt</h1> 
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
                <p className="text-2xl font-semibold">$180</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
                    <Image
                    src="/Strip-Tshirt.png"
                    width={408}
                    height={100}
                    alt="T-Shirt"
                    />
                </div>
                <h1 className="text-xl font-semibold">Sleeve Striped T-Shirt</h1> 
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
                <p className="text-2xl font-semibold">$130 <span className="opacity-40 line-through font-medium">$160</span></p>
                <div className="w-[60px] h-[30px] bg-red-100 rounded-[62px] text-red-500 font-light flex items-center justify-center text-sm">-30%</div>
                </div>
            </div>
        </div>
        <div>
        <Button 
        variant="outline"
        className="w-[218px] h-[52px] rounded-[62px]"
        >View All
        </Button>
        </div>
        <div
         className="w-[1240px] border-[1px] bg-[#000000] relative rotate-180 top-14">
        </div>
        </div>


    )
}