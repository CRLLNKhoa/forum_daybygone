"use client";
import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoIosAddCircleOutline } from "react-icons/io";
import { getAllLog } from "@/actions/logAction";
import { useSearchParams } from "next/navigation";
import Skeleton from "@/components/layouts/skeleton";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<any>();
  const [count,setCount] = useState<any>()
  const [currentPage,setCurrentPage] = useState<any>()
  const searchParams = useSearchParams()
  const page = searchParams.get("page")

  useEffect(() => {
    setCurrentPage(Number(page))
  }, [page])
  
  
  useEffect(() => {
    const get = async () => {
      const result = await getAllLog(Number(page) || 1);
      if (result?.status === 200) {
        setList(result.data);
        setLoading(true);
        setCount(result?.count)
      }
    };
    get();
    setCurrentPage(Number(page || 1))
  }, []);

  if(!loading){
    return(
      <Skeleton item={15} />
    )
  }

  return (
    <div className="min-h-screen p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between border-b pb-2">
        <h1 className="font-semibold text-xl ">📝Nhật ký leo day</h1>
        <Button asChild variant={"outline"} size={"sm"}>
         <Link href={"/push/add"}> <IoIosAddCircleOutline className="w-6 h-6 mr-1" /> Đóng góp</Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8 mt-4">
        {list?.map((item: any) => (
          <Item
            id={item.id}
            day={item.day}
            player={item.player}
            team={item.team}
          />
        ))}
      </div>
      <div className="flex items-center mt-auto">
        <PhanTrang count={count} currentPage={currentPage} />
      </div>
    </div>
  );
}

function Item(_props: { id: number; day: number; player: string; team: any }) {
  
  return (
    <Link
      href={`/push/${_props.id}`}
      className="flex flex-col border border-sky-600 shadow-lg
      border-dashed hover:border-red-600 rounded-lg px-6 py-2 cursor-pointer"
    >
      <div className="flex mb-2 items-center justify-between">
        <h1 className="text-sm">
          <b>Day</b>: {_props.day}
        </h1>
        <i className="text-sm text-muted-foreground">@{_props.player}</i>
      </div>
      <div className="flex items-center justify-center gap-1">
        {_props.team?.map((item: any) => (
          <img src={`/hero/${item}.png`} className="w-8 h-8 bg-black/20 rounded-full" />
        ))}
      </div>
    </Link>
  );
}

function PhanTrang(_props: {count: any, currentPage: any}) {
  const searchParams = useSearchParams()
  const page = searchParams.get("page")
  console.log(page)
  return (
    <Pagination>
      <PaginationContent>
        {(page && Number(page) !== 1) && <PaginationItem>
          <PaginationPrevious href={`/push?page=${Number((page === null ? 1 : page)) -1}`} />
        </PaginationItem>}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {page || 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {Number((page === null ? 1 : page)) <= Number(_props.count)/12 &&  <PaginationItem>
          <PaginationNext href={`/push?page=${Number((page === null ? 1 : page)) + 1}`} />
        </PaginationItem>}

      </PaginationContent>
    </Pagination>
  );
}
