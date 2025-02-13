import { Moon } from "lucide-react"
import ThemeSwitch from "./Theme-provider"
export const Header = () => {

    return (
        <header className=" flex text-center justify-center justify-between rounded-[10px] fixed mt-[0px] shadow-xs mt-5 w-full h-[100px] bg-pink-400 ">
            <h3 className="text-base items-center gap-x-3 ml-[100px] flex text-white text-2xl ">Hongoroo cargo</h3>
            <div className="flex items-center gap-x-3">
            <div className="w-[100px] h-[50px] bg-black"></div>
            <div className="flex items-center gap-x-3"><ThemeSwitch/></div>
            </div>
        </header>
    )

}
export default Header