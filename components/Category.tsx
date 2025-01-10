import { Star, ChevronDown } from "lucide-react"
import Image from "next/image"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"





export default function Category() {

    return (
        <div className="container mx-auto py-20 px-2">
        <div className="flex items-center gap-[730px] mb-6">
        <h3 className="col-span-6 row-span-1 text-3xl font-bold">Casual</h3>
        <div className="flex items-center justify-between space-x-2">
        <h1 className="opacity-60">Showing 1-9 of 100 Products</h1>
        <h1 className="opacity-60">Sort by:</h1>
        <div className="flex items-center">
        <h1>Most Popular</h1>
        <ChevronDown/>
        </div>
        </div>
        </div>
        <div className="grid grid-cols-12 gap-y-6">
        <div className="col-span-4 flex flex-col gap-2">
           <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
            
               <Image
               src="/T-Shirt.png"
               width={408}
               height={100}
               alt="T-Shirt"
               />
        
           
            </div>
                <h1 className="text-xl font-semibold">T-Shirt With Tape Details</h1> 
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
            <div className="col-span-4 flex flex-col gap-2">
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
                    <Image
                    src="/T-Shirt.png"
                    width={408}
                    height={100}
                    alt="T-Shirt"
                    />
                </div>
                <h1 className="text-xl font-semibold">T-Shirt With Tape Details</h1> 
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
            <div className="col-span-4 flex flex-col gap-2">
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
                    <Image
                    src="/T-Shirt.png"
                    width={408}
                    height={100}
                    alt="T-Shirt"
                    />
                </div>
                <h1 className="text-xl font-semibold">T-Shirt With Tape Details</h1> 
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
            <div className="col-span-4 flex flex-col gap-2">
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
                    <Image
                    src="/T-Shirt.png"
                    width={408}
                    height={100}
                    alt="T-Shirt"
                    />
                </div>
                <h1 className="text-xl font-semibold">T-Shirt With Tape Details</h1> 
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
            <div className="col-span-4 flex flex-col gap-2">
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
                    <Image
                    src="/T-Shirt.png"
                    width={408}
                    height={100}
                    alt="T-Shirt"
                    />
                </div>
                <h1 className="text-xl font-semibold">T-Shirt With Tape Details</h1> 
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
            <div className="col-span-4 flex flex-col gap-2">
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
                    <Image
                    src="/T-Shirt.png"
                    width={408}
                    height={100}
                    alt="T-Shirt"
                    />
                </div>
                <h1 className="text-xl font-semibold">T-Shirt With Tape Details</h1> 
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
            <div className="col-span-4 flex flex-col gap-2">
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
                    <Image
                    src="/T-Shirt.png"
                    width={408}
                    height={100}
                    alt="T-Shirt"
                    />
                </div>
                <h1 className="text-xl font-semibold">T-Shirt With Tape Details</h1> 
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
            <div className="col-span-4 flex flex-col gap-2">
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
                    <Image
                    src="/T-Shirt.png"
                    width={408}
                    height={100}
                    alt="T-Shirt"
                    />
                </div>
                <h1 className="text-xl font-semibold">T-Shirt With Tape Details</h1> 
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
            <div className="col-span-4 flex flex-col gap-2">
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center">
                    <Image
                    src="/T-Shirt.png"
                    width={408}
                    height={100}
                    alt="T-Shirt"
                    />
                </div>
                <h1 className="text-xl font-semibold">T-Shirt With Tape Details</h1> 
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
            <div className="w-[1210px] border"></div>
            </div>
           <Pagination className="mt-4">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#"/>
                </PaginationItem>
                <div className="flex opacity-60">
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">8</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">9</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">10</PaginationLink>
                </PaginationItem>
                </div>
                <PaginationItem>
                  <PaginationNext href="#"/>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
        </div>
);
};