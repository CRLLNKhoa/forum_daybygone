"use client"
import { getTeams6 } from "@/actions/logAction";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton from "./skeleton";
import Cardteam from "./cardteam";

export default function PushTeam() {
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState<any[]>([]);
  useEffect(() => {
    const get = async () => {
      const result = await getTeams6();
      if (result?.status === 200) {
        setTeams(result?.data);
        setLoading(true);
      }
    };
    get();
  }, []);

  if(!loading){
    return(
      <Skeleton item={6} />
    )
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl lg:text-[1.75rem] leading-6">
            Các đội hình thường dùng
          </h1>
          <p className="text-muted-foreground text-xs lg:text-md lg:mt-1">
            Giúp bạn tối ưu lượng sát thương
          </p>
        </div>
        <Link href={"/teams"} className="text-sky-600 font-semibold text-sm">
          Xem tất cả
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {teams?.map((item: any) => (
          <Cardteam data={item} />
        ))}
      </div>
    </div>
  );
}
