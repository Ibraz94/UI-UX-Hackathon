import { Star, BadgeCheck, SlidersVertical, ChevronDown, Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Reviews() {
    return(
        <div>
        <div className="flex items-center justify-around gap-10 py-10">
        <h4 className="text-2xl font-bold">All Reviews <span className="font-normal opacity-60">(451)</span></h4>
        <div className="flex gap-[10px]">
        <button className="w-12 h-12 flex justify-center items-center bg-[#F0F0F0] rounded-[62px]">
        <SlidersVertical/>
        </button>
        <Button className="w-[120px] h-12 flex justify-center items-center bg-[#F0F0F0] text-black rounded-[62px]"> Latest 
            <ChevronDown/>
        </Button>
        <Button className="w-[166px] h-12 flex justify-center items-center rounded-[62px]">
        Write a Review
        </Button>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex gap-6">    
        <div className="w-[610px] h-[240px] rounded-2xl border-[1px] flex flex-col justify-center items-center">
        <div className="w-[546px] h-[161.58px] flex flex-col gap-4 justify-between ">
        <div className="flex justify-between">
            <div className="flex">
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            </div>
            <div className="opacity-60"><Ellipsis/></div>
        </div>
            <h1 className="flex font-semibold">Samantha D. 
            <BadgeCheck className="fill-[#01AB31] stroke-white"/>
            </h1>
            <p className="text-sm opacity-40">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
            <p className="opacity-60">Posted on August 14, 2023</p>
        </div>
           
        </div>
        <div className="w-[610px] h-[240px] rounded-2xl border-[1px] flex justify-center items-center">
        <div className="w-[546px] h-[161.58px] flex flex-col gap-4 justify-between ">
        <div className="flex justify-between">
            <div className="flex">
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            </div>
            <div className="opacity-60"><Ellipsis/></div>
        </div>
            <h1 className="flex font-semibold">Alex M. 
            <BadgeCheck className="fill-[#01AB31] stroke-white"/>
            </h1>
            <p className="text-sm opacity-40">"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
            <p className="opacity-60">Posted on August 15, 2023</p>
        </div>
        </div>
        </div>
        <div className="flex gap-6">
        <div className="w-[610px] h-[240px] rounded-2xl border-[1px] flex justify-center items-center">
        <div className="w-[546px] h-[161.58px] flex flex-col gap-4 justify-between ">
        <div className="flex justify-between">
            <div className="flex">
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            </div>
            <div className="opacity-60"><Ellipsis/></div>
        </div>
            <h1 className="flex font-semibold">Ethan R. 
            <BadgeCheck className="fill-[#01AB31] stroke-white"/>
            </h1>
            <p className="text-sm opacity-40">"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>
            <p className="opacity-60">Posted on August 16, 2023</p>
        </div>
        </div>
        <div className="w-[610px] h-[240px] rounded-2xl border-[1px] flex justify-center items-center">
        <div className="w-[546px] h-[161.58px] flex flex-col gap-4 justify-between ">
        <div className="flex justify-between">
            <div className="flex">
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            </div>
            <div className="opacity-60"><Ellipsis/></div>
        </div>
            <h1 className="flex font-semibold">Olivia P. 
            <BadgeCheck className="fill-[#01AB31] stroke-white"/>
            </h1>
            <p className="text-sm opacity-40">"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
            <p className="opacity-60">Posted on August 17, 2023</p>
        </div>
        </div>

    </div>
    <div className="flex gap-6">
        <div className="w-[610px] h-[240px] rounded-2xl border-[1px] flex justify-center items-center">
        <div className="w-[546px] h-[161.58px] flex flex-col gap-4 justify-between ">
        <div className="flex justify-between">
            <div className="flex">
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            </div>
            <div className="opacity-60"><Ellipsis/></div>
        </div>
            <h1 className="flex font-semibold">Liam K. 
            <BadgeCheck className="fill-[#01AB31] stroke-white"/>
            </h1>
            <p className="text-sm opacity-40">"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
            <p className="opacity-60">Posted on August 18, 2023</p>
        </div>
        </div>
        <div className="w-[610px] h-[240px] rounded-2xl border-[1px] flex justify-center items-center">
        <div className="w-[546px] h-[161.58px] flex flex-col gap-4 justify-between ">
        <div className="flex justify-between">
            <div className="flex">
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            <Star className=" fill-[#FFC633] stroke-none"/>
            </div>
            <div className="opacity-60"><Ellipsis/></div>
        </div>
            <h1 className="flex font-semibold">Ava H. 
            <BadgeCheck className="fill-[#01AB31] stroke-white"/>
            </h1>
            <p className="text-sm opacity-40">"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
            <p className="opacity-60">Posted on August 19, 2023</p>
        </div>
        </div>

    </div>
    </div>
    <div className="flex justify-center py-10">
    <Button 
    variant="outline"
    className="w-[230px] h-[52px] rounded-[62px]">Load More Reviews</Button>
    </div>
    </div>
);
};
