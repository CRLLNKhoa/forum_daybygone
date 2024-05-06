"use client";
import { getLogs } from "@/actions/logAction";
import Skeleton from "@/components/layouts/skeleton";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const param = useParams();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<any>();
  useEffect(() => {
    const get = async () => {
      const result = await getLogs(String(param.name));
      if (result?.status === 200) {
        setList(result.data);
        setLoading(true);
      }
    };
    get();
  }, []);

  if(!loading){
    return(
      <Skeleton item={15} />
    )
  }
  return (
    <div className="min-h-screen">
      <h1 className="text-center font-semibold text-xl border-t border-b border-dashed py-2">
        Nhật ký của 😎 {param.name} 👑
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4">
        {list?.map((item: any) => (
          <Item data={item} />
        ))}
      </div>
    </div>
  );
}

function Item({ data }: { data: any }) {
  return (
    <Link
      href={`/push/${data?.id}`}
      className="flex flex-col border border-sky-600 shadow-lg
          border-dashed hover:border-red-600 rounded-lg px-6 py-2 cursor-pointer"
    >
      <div className="flex mb-2 items-center justify-between">
        <h1 className="text-sm">
          <b>Day</b>: {data?.day}
        </h1>
        <i className="text-sm text-muted-foreground">@{data?.player}</i>
      </div>
      <div className="flex items-center justify-center gap-1">
        {data?.team?.map((item: any) => (
          <img
            src={`/hero/${item}.png`}
            className="w-8 h-8 bg-black/20 rounded-full"
          />
        ))}
      </div>
    </Link>
  );
}
