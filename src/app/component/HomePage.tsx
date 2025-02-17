export const HomePage =() => {
return(
    <>
    <div className="h-screen w-screen bg-[#E0FFFF]">
        <div className="flex justify-center">
            <div className="w-[65%] mt-5  h-screen">
                <img className="w-[80%] m-auto h-[85%]" src="manCargo.jpg" alt="" />
                            </div>
            <div className="w-[35%] mt-3 mr-6 h-screen">
                <div className="w-full h-[85%] mt-5">
                    <div className="w-[40px] m-auto text-center h-[40px]">logo</div>
  
                    <fieldset className="space-y-2">
                <label className="block text-sm font-semibold leading-4 text-[#334155]">Утасны дугаар
                    <span className="text-red-500">*</span>
                </label>
                <input
                    type="number"
                    placeholder="99991010"
                    className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
                />
                <div className="text-red-700"></div>
                </fieldset>


                  
                <fieldset className="space-y-2">
                <label className="block text-sm font-semibold leading-4 text-[#334155]">Нууц үг
                    <span className="text-red-500">*</span>
                </label>
                <input
                    type="password"
                    placeholder="password"
                    className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
                />
                <div className="text-red-700"></div>
                </fieldset>
                <div className="w-full flex h-[40px]">
                <button className="w-[90%] m-auto h-full mt-5 bg-[#FFB07C] rounded-[10px]">Нэвтрэх</button>
                </div>
                <div className="w-full h-[2px] mt-12 bg-gray-500"></div>
                <div className="w-full border-solid border-[#FFB07C] flex h-[50px]">
  <button 
    className="w-[90%] m-auto h-full mt-5 bg-[#FFB07C] outline rounded-[10px] text-[#333] font-semibold 
              transition-all duration-300 ease-in-out 
              hover:bg-[#FFB07C] hover:text-white 
              focus:ring-4 focus:ring-[#FFB07C] focus:outline-none 
              disabled:bg-[#B0E0E6] disabled:text-[#A9A9A9]"
    disabled={false}  // Set to true to disable the button
  >
    <i className="fas fa-user-lock mr-2"></i> Бүртгүүлэх
  </button>
</div>


                </div>
            </div>
        </div>
    </div>
    </>
)
}
export default HomePage