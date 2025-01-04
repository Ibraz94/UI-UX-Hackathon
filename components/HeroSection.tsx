import Image from "next/image"
import { Button } from "@/components/ui/button"


export default function HeroSection() {
  return (
    <div>
    <div className="w-screen h-[770px] bg-[#F2F0F1] relative top-16 px-6 sm:px-12 lg:px-28 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-sm sm:text-base opacity-60">
            Browse through our diverse range of meticulously crafted garments, designed
            <br className="hidden lg:block" /> to bring out your individuality and cater to your sense of style.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button className="w-40 sm:w-52 h-10 sm:h-12 rounded-full">Shop Now</Button>
          </div>
        </div>
        {/* Right Image */}
        <Image
          src="/star2.svg"
          width={60}
          height={1}
          alt="star2"
          className="relative py-52 left-44"
          />
          <Image
            src="/model.png"
            width={790}
            height={1}
            alt="Model Image"
            className="max-w-sm sm:max-w-md lg:max-w-2xl relative bottom-7 left-24"
          />
          <Image
          src="/star1.svg"
          width={104}
          height={104}
          alt="star1"
          className="relative right-14"
          />
      </div>
    </div>
    <div className="w-screen bg-black flex items-center justify-around relative py-7 ">
      <Image
      src="/versace.svg"
      width={166}
      height={33}
      alt="1"

      />
      <Image
      src="/zara.svg"
      width={91}
      height={38}
      alt="2"
      />
      <Image
      src="/gucci.svg"
      width={156}
      height={36}
      alt="3"
      />
      <Image
      src="/prada.svg"
      width={194}
      height={32}
      alt="4"
      />
      <Image
      src="/ck.svg"
      width={206}
      height={33}
      alt="5"
      />
    </div>
    </div>
  );
}

  
