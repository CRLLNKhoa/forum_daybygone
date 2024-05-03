import Link from "next/link";
import React from "react";

export default function PushList() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl lg:text-[1.75rem] leading-6">
            Các giáo án leo day
          </h1>
          <p className="text-muted-foreground text-xs lg:text-md lg:mt-1">
            Giúp bạn leo day một cách dễ dàng hơn
          </p>
        </div>
        <Link href={"/push"} className="text-sky-600 font-semibold text-sm">
          Xem tất cả
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
       <Item />
       <Item />
       <Item />
       <Item />
       <Item />
       <Item />
       <Item />
       <Item />
       <Item />
      </div>
    </div>
  );
}


function Item(){
    return(
        <div className="flex flex-col border border-sky-600 
        border-dashed hover:border-red-600 rounded-lg px-6 py-2 cursor-pointer">
            <div className="flex mb-2 items-center justify-between">
                <h1 className="text-sm"><b>Day</b>: 12000</h1>
                <i className="text-sm text-muted-foreground">@Lương Khoa</i>
            </div>
          <div className="flex items-center justify-center gap-1">
            <div className="w-8 h-8 bg-black/20 rounded-full"></div>
            <div className="w-8 h-8 bg-black/20 rounded-full"></div>
            <div className="w-8 h-8 bg-black/20 rounded-full"></div>
            <div className="w-8 h-8 bg-black/20 rounded-full"></div>
            <div className="w-8 h-8 bg-black/20 rounded-full"></div>
            <div className="w-8 h-8 bg-black/20 rounded-full"></div>
          </div>
        </div>
    )
}