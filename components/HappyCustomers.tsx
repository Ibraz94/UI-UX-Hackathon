import { ArrowLeft, ArrowRight, Star, BadgeCheck } from "lucide-react"



export default function HappyCustomers () {
    return(
        <div className="w-screen">
            <div className="flex items-center justify-around gap-72 py-24">
            <h4 className="text-5xl font-extrabold">OUR HAPPY CUSTOMER</h4>
            <button className="flex">
            <ArrowLeft/>
            <ArrowRight/>
            </button>
            </div>
            <div className="flex gap-6 justify-center">
            <div className="w-[400px] h-[240px] rounded-2xl border-[1px] flex justify-center items-center">
            <div className="w-[336px] h-[161.58px] flex flex-col gap-4 justify-between ">
            <div className="flex">
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
            </div>
                <h1 className="flex">Sarah M. 
                <BadgeCheck className="fill-[#01AB31] stroke-white"/>
                </h1>
                <p className="text-sm opacity-40">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
            </div>
            <div className="w-[400px] h-[240px] rounded-2xl border-[1px] flex justify-center items-center">
            <div className="w-[336px] h-[161.58px] flex flex-col gap-4 justify-between ">
            <div className="flex">
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
            </div>
                <h1 className="flex">Alex K. 
                <BadgeCheck className="fill-[#01AB31] stroke-white"/>
                </h1>
                <p className="text-sm opacity-40">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
            </div>
            </div>
            <div className="w-[400px] h-[240px] rounded-2xl border-[1px] flex justify-center items-center">
            <div className="w-[336px] h-[161.58px] flex flex-col gap-4 justify-between ">
            <div className="flex">
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
                <Star className=" fill-[#FFC633] stroke-none"/>
            </div>
                <h1 className="flex">James L. 
                <BadgeCheck className="fill-[#01AB31] stroke-white"/>
                </h1>
                <p className="text-sm opacity-40">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
            </div>
            </div>
        </div>
        </div>
    )
}