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
            <div className="mt-[120px] w-[20%] ">
                <h5 className=" p-7 text-pink-400">tses</h5>
                {listNames.map((el, index) => (
                    <button className="cursor-pointer w-[100%] h-[50px] mt-[20px] gap-7 p-6 flex" key={index}>
                        <div className="w-[30px] h-[30px]">{el.log}</div>
                        <p>{el.name}</p>
                    </button>

                ))}
            </div>
            <div className=" mt-[120px] w-[1px] bg-black"></div>
            <div className=" mt-[120px] w-[70%]">
                <div className="flex">
                <div>
              <div className="w-[1040px] m-7 h-[400px] bg-black"></div>
                <h2 className="m-7">zahiulga</h2>
                <div className="m-7 flex gap-10">
                    <div className="w-[500px] h-[100px] bg-pink-400"></div>
                    <div className="w-[500px] h-[100px] bg-pink-400"></div>
                </div>
                </div>
                <div className="m-7">
                    <div className="w-[500px] h-[200px] bg-black"></div>
                    <div className="w-[500px] h-[200px] mt-10 bg-black"></div>
                </div>
                </div>

            </div>
        </div>
    )

}
export default Section