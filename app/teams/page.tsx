"use client";
import { getTeams } from "@/actions/logAction";
import Cardteam from "@/components/layouts/cardteam";
import Skeleton from "@/components/layouts/skeleton";
import React, { useEffect, useState } from "react";

export default function Teams() {
    const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState<any[]>([]);
  useEffect(() => {
    const get = async () => {
      const result = await getTeams();
      if (result?.status === 200) {
        setTeams(result?.data);
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
    <div className="flex flex-col pt-4 min-h-screen">
      <h1 className="font-bold text-xl border-b pb-1">
        Danh sách đội hình tham khảo
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-6 gap-4">
        {teams?.map((item: any) => (
          <Cardteam data={item} />
        ))}
      </div>
    </div>
  );
}
