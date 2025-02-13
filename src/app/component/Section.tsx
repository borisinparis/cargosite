import React from "react"
import { House } from 'lucide-react';
import { Car } from 'lucide-react';
import { MapPinCheckInside } from 'lucide-react';
import { Inbox } from 'lucide-react';
import { Headset } from 'lucide-react';
export const Section = () => {
    const listNames = [
        { name: "nuur huudas", log:<House />},
        { name: "minii zahailag", log:<Car/>},
        { name: "minii hayg" ,log:<MapPinCheckInside/>},
        { name: "aguulah" ,log:<Inbox/>},
        { name: "tuslamj", log:<Headset/> }
    ]

    return (
        <div className="flex w-full h-[100vh] ">
            <div className=" mt-[120px] w-full">
                <div className="flex justify-between">
                <div className="w-[60%]">
              <div className="w-[93%] m-7 h-[40%] bg-black"></div>
                <h2 className="m-7">zahiulga</h2>
                <div className="flex m-auto ml-7 gap-10">
                    <div className="w-full h-[100px] bg-pink-400"></div>
                    <div className="w-full h-[100px] bg-pink-400"></div>
                </div>
                </div>
                <div className="w-[40%] m-7">
                    <div className="w-full h-[200px] bg-black"></div>
                    <div className="w-full h-[200px] mt-10 bg-black"></div>
                </div>
                </div>

            </div>
        </div>
    )

}
export default Section