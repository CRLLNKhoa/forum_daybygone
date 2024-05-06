"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { LuArrowRight } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiMenuFill } from "react-icons/ri";
import { CiBookmarkPlus } from "react-icons/ci";
import { useFollowStore } from "@/stores/followsStore";

export default function Header() {
  const [top, setTop] = useState(true);
  const follows = useFollowStore((state:any) => state.follows)
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

      <div className="flex items-center ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto mr-2" size={"icon"} variant={"outline"}>
              <CiBookmarkPlus className="w-6 h-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Theo dõi</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {
              follows?.length === 0 && <DropdownMenuLabel>Chưa theo dõi người chơi nào!</DropdownMenuLabel>
            }
            {
              follows?.map((item:any) => (
                <DropdownMenuItem asChild><Link href={`/push/player/${item}`}>{item}</Link></DropdownMenuItem>
              ))
            }
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto mr-4" size={"icon"} variant={"outline"}>
              <RiMenuFill className="w-6 h-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={"/single-rewind"}>Single Rewind</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/double-rewind"}>Double Rewind</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/time-rewind"}>Time Rewind</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/push"}>Push Day</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/teams"}>Đội hình</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/world-tree"}>World Tree</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/calculator"}>Tính Dame</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/blogs"}>Blogs</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-[42px] w-[42px]",
            },
          }}
        />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton>
          <Button className="ml-2" size={"sm"}>
            Login <LuArrowRight className="ml-2" />
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}
