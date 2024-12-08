import { Ghost, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"


export default function TopSelling() {
    return(
        <div className="w-screen relative py-20 flex flex-col items-center gap-4 ">
            <h4 className="text-5xl font-extrabold flex justify-center">TOP SELLING</h4>
            <div className="flex items-center justify-center gap-6 py-16">
            <div className="flex flex-col gap-4">
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
                    <Image
                    src="/GreenShirt.png"
                    width={408}
                    height={100}
                    alt="T-Shirt"
                    />
                </div>
                <h1 className="text-xl font-semibold">Vertical Striped Shirt</h1> 
                <div className="flex gap-1">
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <p>5.0<span className="opacity-60">/5</span></p>
                </div>
                <div className="flex gap-4">
                <p className="text-2xl font-semibold">$212 <span className="opacity-40 line-through font-medium">$232</span></p>
                <div className="w-[60px] h-[30px] bg-red-100 rounded-[62px] text-red-500 font-light flex items-center justify-center text-sm">-20%</div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
                    <Image
                    src="/OrangeT.png"
                    width={350}
                    height={100}
                    alt="T-Shirt"
                    />
                </div>
                <h1 className="text-xl font-semibold">Courage Graphic T-Shirt</h1> 
                <div className="flex gap-1">
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <p>4.0<span className="opacity-60">/5</span></p>
                </div>
                <p className="text-2xl font-semibold">$145</p>
                
            </div>
            <div className="flex flex-col gap-4">
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
                    <Image
                    src="/Shorts.png"
                    width={408}
                    height={100}
                    alt="Shirt"
                    />
                </div>
                <h1 className="text-xl font-semibold">Loose Fit Bermuda Shorts</h1> 
                <div className="flex gap-1">
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <p>3.0<span className="opacity-60">/5</span></p>
                </div>
                <p className="text-2xl font-semibold">$80</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
                    <Image
                    src="/BlackJeans.png"
                    width={250}
                    height={100}
                    alt="T-Shirt"
                    />
                </div>
                <h1 className="text-xl font-semibold">Faded Skinny Jeans</h1> 
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
                <p className="text-2xl font-semibold">$210</p> 
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
        </div>


    )
}