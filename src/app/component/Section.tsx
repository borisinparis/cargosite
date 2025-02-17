import React from "react"
import { House } from 'lucide-react';
import { Car } from 'lucide-react';
import { MapPinCheckInside } from 'lucide-react';
import { Inbox } from 'lucide-react';
import { Headset } from 'lucide-react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/component/App-sidebar"
import Header from "./Header";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export const Section = () => {
    const listNames = [
        { name: "nuur huudas", log: <House /> },
        { name: "minii zahailag", log: <Car /> },
        { name: "minii hayg", log: <MapPinCheckInside /> },
        { name: "aguulah", log: <Inbox /> },
        { name: "tuslamj", log: <Headset /> }
    ]
    const listOfImages = [
        { ulrOfImage: "image1.jpg" },
        { ulrOfImage: "image2.jpg" },
        { ulrOfImage: "image3.jpg" }
    ]
    return (
            <SidebarProvider>
            <Header />
            <div className="flex max-w-full">

              <AppSidebar />

              <div className="w-screen mt-[100px] min-h-[calc(100vh-120px)]" >
              <div className=" w-full h-full bg-green-200 p-10 flex gap-10 ">
            <div className="w-[65%] h-full bg-blue-300 shrink-0">fdf</div>
            <div  className="w-full bg-orange-300">ffd</div></div>
            </div>

            </div>
          </SidebarProvider>
    )

}
export default Section




{/* <div className=" w-full h-screen">
<div className=" mt-[10%] h-full w-full">
    <div className="flex h-full gap-20 justify-between pr-20">
        <div className="w-[60%] h-[60%]">
            <div className="w-full overflow-hidden h-[60%]">
                <Carousel
                    className="w-full h-full">

                    <CarouselContent className="h-full w-full">
                        {listOfImages?.map((el,index)=> {
                            return (
                            <CarouselItem key={index}><img className="h-[400px] m-auto object-cover w-full" src={`${el?.ulrOfImage}`} alt="" /></CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <h2 className="m-auto">zahiulga</h2>
            <div className="flex w-full gap-10">
                <div className="flex-1 m-auto h-[10vh] bg-[#FFACAE]">

                </div>
                <div className="flex-1 h-[10vh] bg-[#FFACAE]"></div>
            </div>
        </div>

        <div className="w-[40%] h-[60%] ">
            <div className="w-full h-[50%] bg-black"></div>
            <div className="w-full h-[50%] mt-10 bg-black"></div>
        </div>
    </div>
</div>
</div> */}