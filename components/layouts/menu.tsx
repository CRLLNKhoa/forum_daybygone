import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-[1.75rem] leading-[2.25rem] mb-9">
        Các danh mục hàng đầu
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center h-[80px] bg-[#d3e3fd] rounded-xl p-4 shadow-lg
        text-white font-semibold cursor-pointer justify-between hover:bg-[#a8c7fa]
        duration-300 hover:text-white group">
          Single Rewind
          <div className="w-12 h-12 flex items-center justify-center bg-[#a8c7fa]
          rounded-full group-hover:bg-[#7cacf8] duration-300">
            <img className="w-5 h-5" src="/single.svg" alt="icon" />
          </div>
        </div>
        <div className="flex items-center h-[80px] bg-[#e3e3e3] rounded-xl p-4 shadow-lg
        text-white font-semibold cursor-pointer justify-between hover:bg-[#c7c7c7]
        duration-300 hover:text-white group">
          Double Rewind
          <div className="w-12 h-12 flex items-center justify-center bg-[#c7c7c7]
          rounded-full group-hover:bg-[#ababab] duration-300">
            <img className="w-5 h-5" src="/tripple.svg" alt="icon" />
          </div>
        </div>
        <div className="flex items-center h-[80px] bg-[#c2e7ff] rounded-xl p-4 shadow-lg
        text-white font-semibold cursor-pointer justify-between hover:bg-[#7fcfff]
        duration-300 hover:text-white group">
          Time Rewind
          <div className="w-12 h-12 flex items-center justify-center bg-[#7fcfff]
          rounded-full group-hover:bg-[#5ab3f0] duration-300">
            <img className="w-6 h-6" src="/time.svg" alt="icon" />
          </div>
        </div>
        <Link href={"/push"} className="flex items-center h-[80px] bg-[#c4eed0] rounded-xl p-4 shadow-lg
        text-white font-semibold cursor-pointer justify-between hover:bg-[#6dd58c]
        duration-300 hover:text-white group">
          Push day 
          <div className="w-12 h-12 flex items-center justify-center bg-[#6dd58c]
          rounded-full group-hover:bg-[#37be5f] duration-300">
            <img className="w-5 h-5" src="/push.svg" alt="icon" />
          </div>
        </Link>
        <div className="flex items-center h-[80px] bg-[#efd197] rounded-xl p-4 shadow-lg
        text-white font-semibold cursor-pointer justify-between hover:bg-[#f0bc5a]
        duration-300 hover:text-white group">
          Đội hình
          <div className="w-12 h-12 flex items-center justify-center bg-[#f0bc5a]
          rounded-full group-hover:bg-[#eeaf35] duration-300">
            <img className="w-5 h-5" src="/team.svg" alt="icon" />
          </div>
        </div>
        <div className="flex items-center h-[80px] bg-[#c495ef] rounded-xl p-4 shadow-lg
        text-white font-semibold cursor-pointer justify-between hover:bg-[#ae64f1]
        duration-300 hover:text-white group">
          World tree
          <div className="w-12 h-12 flex items-center justify-center bg-[#ae64f1]
          rounded-full group-hover:bg-[#9735ee] duration-300">
            <img className="w-5 h-5" src="/tree.svg" alt="icon" />
          </div>
        </div>
        <div className="flex items-center h-[80px] bg-[#cd7c77] rounded-xl p-4 shadow-lg
        text-white font-semibold cursor-pointer justify-between hover:bg-[#bf5751]
        duration-300 hover:text-white group">
          Tính dame
          <div className="w-12 h-12 flex items-center justify-center bg-[#bf5751]
          rounded-full group-hover:bg-[#b3261e] duration-300">
            <img className="w-8 h-8" src="/calculator.svg" alt="icon" />
          </div>
        </div>
        <div className="flex items-center h-[80px] bg-[#c4cd77] rounded-xl p-4 shadow-lg
        text-white font-semibold cursor-pointer justify-between hover:bg-[#adbf51]
        duration-300 hover:text-white group">
          Blogs
          <div className="w-12 h-12 flex items-center justify-center bg-[#aebf51]
          rounded-full group-hover:bg-[#c8cd36] duration-300">
            <img className="w-8 h-8" src="/blog.svg" alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
