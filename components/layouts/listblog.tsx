import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

export default function ListBlog() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl lg:text-[1.75rem] leading-6">
            Các bài viết
          </h1>
          <p className="text-muted-foreground text-xs lg:text-md lg:mt-1">
            Giúp bạn leo day một cách dễ dàng hơn
          </p>
        </div>
        <Link href={"/push"} className="text-sky-600 font-semibold text-sm">
          Xem tất cả
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
        <div className="flex flex-col shadow-md border 
        border-dashed hover:border-red-600 rounded-lg p-4 cursor-pointer">
            <img src="/banner2.png" alt="img" className="h-32 rounded-lg" />
            <div className="flex flex-col mt-2">
              <h1 className="font-semibold line-clamp-2 leading-5">Tiêu đề bài viết Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, eius. Illum eveniet dolore in nesciunt, perspiciatis error? Ipsum molestias vitae voluptatum? Ad, modi quia molestiae fugit dolorem fugiat neque. Aliquid.</h1>
            </div>
        </div>
    )
}