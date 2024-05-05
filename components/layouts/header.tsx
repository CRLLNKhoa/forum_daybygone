"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function Header() {
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <div
      className={cn(
        "h-16 flex items-center justify-between px-4 sticky top-0 left-0 right-0 duration-500 z-50 bg-white",
        !top && "shadow-md"
      )}
    >
      <Link href={"/"} className="flex items-center">
        <img className="w-6 h-6 mr-2" src="/tenor.gif" alt="logo" />
        <p className="font-semibold text-lg">Check cost</p>
      </Link>
      <Button size={"sm"}>Đăng nhập</Button>
    </div>
  );
}
