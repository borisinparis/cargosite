import { SidebarTrigger } from "@/components/ui/sidebar";
import ThemeSwitch from "./Theme-provider"
import { User } from 'lucide-react';
export const Header = () => {

    return (
        <header className="z-20 flex text-center justify-center justify-between rounded-[10px] fixed shadow-xs mt-5 w-full h-[10%] bg-[#FFACAE] ">
           <div className="flex items-center">
    <h3 className="text-base text-muted items-center gap-x-3 ml-[100px] flex text-3xl ">SH cargo</h3>
    <SidebarTrigger />

            </div> <h3 className="text-base items-center gap-x-3 ml-[100px] flex text-white text-3xl ">SH cargo</h3>
            <div className="flex items-center gap-x-3">
            <div className="w-[100px] bg-black-700 border-[1px] border-[#FFD3AC] rounded-xl h-[50px]">
                <div className="flex  text-center">
                <div className="m-auto w-[15px] h-[15px]">
                    <User/>
                </div>
                <h5>Hongoroo Saihnaa</h5>
                </div>
            </div>
            <div className="flex items-center gap-x-3"><ThemeSwitch/></div>
            </div>
        </header>
    )

}
export default Header