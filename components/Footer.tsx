import Image from "next/image";
import { FaGithub, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

export default function Footer() {
    return (
    <div className="w-screen h-[589px] py-16">
    <div className="w-[1240px] h-[180px] bg-black rounded-[20px] flex items-center justify-around relative top-24 left-36">
    <h4 className="text-[40px] font-extrabold text-white">STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h4>
    <div className="flex flex-col gap-2">
    <div className="w-[349px] h-[48px] bg-white rounded-[62px] flex items-center gap-4 px-6">
    <Mail className="opacity-50"/>
    <input
    type="text"
    placeholder="Enter Your Email Address"
    />
    </div>
    <Button className="w-[349px] h-[48px] bg-white text-black rounded-[62px]">Subscribe To Newsletter</Button>
    </div>
    </div>
    <div className="w-screen h-[499px] bg-[#F0F0F0] flex flex-col items-center justify-center">
    <div className="w-[1240px] h-[177px] flex justify-between">
    <div className="flex flex-col justify-between">
    <h1 className="text-4xl font-extrabold">SHOP.CO</h1>
    <p className="text-sm opacity-60">We have clothes that suits your style and  <br />which you’re proud to wear. <br /> From women to men.</p>
    <div className="flex gap-2">
    <div className="w-8 h-8 border-2 rounded-full bg-white flex justify-center items-center">
    <FaTwitter/> </div>
    <div className="w-8 h-8 border-2 rounded-full bg-white flex justify-center items-center">
    <FaFacebook/></div>
    <div className="w-8 h-8 border-2 rounded-full bg-white flex justify-center items-center">
    <FaInstagram/></div>
    <div className="w-8 h-8 border-2 rounded-full bg-white flex justify-center items-center">
    <FaGithub/></div>
    </div>
    </div>
    <div className="flex flex-col justify-between">
    <h4 className="text-base font-semibold">C O M P A N Y</h4>
    <h1 className="opacity-60 font-normal">About</h1>
    <h1 className="opacity-60 font-normal">Features</h1>
    <h1 className="opacity-60 font-normal">Works</h1>
    <h1 className="opacity-60 font-normal">Career</h1>
    </div>
    <div className="flex flex-col justify-between">
    <h4 className="text-base font-semibold">H E L P</h4>
    <h1 className="opacity-60 font-normal">Customer Support</h1>
    <h1 className="opacity-60 font-normal">Delivery Details</h1>
    <h1 className="opacity-60 font-normal">Terms & Conditions</h1>
    <h1 className="opacity-60 font-normal">payments</h1>
    </div>
    <div className="flex flex-col justify-between">
    <h4 className="text-base font-semibold">F A Q</h4>
    <h1 className="opacity-60 font-normal">Account</h1>
    <h1 className="opacity-60 font-normal">Manage Deliveries</h1>
    <h1 className="opacity-60 font-normal">Order</h1>
    <h1 className="opacity-60 font-normal">Payments</h1>
    </div>
    <div className="flex flex-col justify-between">
    <h4 className="text-base font-semibold">R E S O U R C E S</h4>
    <h1 className="opacity-60 font-normal">Free eBooks</h1>
    <h1 className="opacity-60 font-normal">Development Tutorial</h1>
    <h1 className="opacity-60 font-normal">How To - Blog</h1>
    <h1 className="opacity-60 font-normal">Youtube Playlist</h1>
    </div>
    </div>
    <div
    className="w-[1240px] border-[1px] bg-[#000000] relative rotate-180 top-14">
    </div>
    <div className="w-[1240px] flex items-center justify-between relative top-20">
    <p className="text-sm opacity-50">Shop.co © 2000-2024, All Rights Reserved</p>
    <Image
    src="/cards.png"
    width={200}
    height={200}
    alt="image"/>
    </div>
    </div>
    </div>
)
}