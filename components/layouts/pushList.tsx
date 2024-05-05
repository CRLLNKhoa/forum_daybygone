"use client";
import { getLogHomePage } from "@/actions/logAction";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton from "./skeleton";

export default function PushList() {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<any>();
  useEffect(() => {
    const get = async () => {
      const result = await getLogHomePage();
      if (result?.status === 200) {
        setList(result.data);
        setLoading(true)
      }
    };
    get();
  }, []);

  if (!loading) {
    return <Skeleton item={6} />;
  }

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
        {list?.map((item: any) => (
          <Item key={item.id} data={item} />
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
          <img key={item}
            src={`/hero/${item}.png`}
            className="w-8 h-8 bg-black/20 rounded-full"
          />
        ))}
      </div>
    </Link>
  );
}
