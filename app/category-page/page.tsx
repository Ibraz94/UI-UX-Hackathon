import Category from "@/components/Category"
import SidePanel from "@/components/SidePanel"


export default function CategoryPage (){
    return(
        <div className="w-screen flex p-4">
            <SidePanel/>
            <Category/>
        </div>
    )
};