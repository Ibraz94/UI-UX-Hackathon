
export default function BrowseStyle (){
    return(
        <div className="w-screen flex justify-center">
        <div className="w-[1239px] h-[866px] bg-[#F0F0F0] rounded-[40px] flex flex-col justify-evenly items-center">
            <h4 className="text-5xl font-extrabold">BROWSE BY DRESS STYLE</h4>
            <div className="flex flex-col gap-4">
            <div className="flex gap-4">
            <div className="w-[407px] h-[289px] rounded-[20px] bg-[url('/Style1.png')] bg-center py-10 px-10">
            <h1 className="text-4xl font-bold">Casual</h1>
            </div>
            <div className="w-[684px] h-[289px] rounded-[20px] bg-[url('/Style2.png')] bg-center py-10 px-10">
            <h1 className="text-4xl font-bold">Formal</h1>
            </div>
            </div>
            <div className="flex gap-4">
            <div className="w-[684px] h-[289px] rounded-[20px] bg-[url('/Style3.png')] bg-left py-10 px-10">
            <h1 className="text-4xl font-bold">Party</h1>
            </div>
            <div className="w-[407px] h-[289px] rounded-[20px] bg-[url('/Style4.png')] bg-center py-10 px-10">
            <h1 className="text-4xl font-bold">Gym</h1>
            </div>
            </div>
            </div>
        </div>
        </div>
    )

}

