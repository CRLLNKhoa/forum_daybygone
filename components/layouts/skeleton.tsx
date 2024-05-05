"use client";
import React, { useState } from "react";

export default function Skeleton(props: { item: number }) {
  const [itemSkeletion, setItemSkeletion] = useState(
    Array.from({ length: props.item }, (_, index) => index + 1)
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      {itemSkeletion.map((i) => (
        <div className="bg-gray-200 h-[72px] rounded-lg animate-pulse"></div>
      ))}
    </div>
  );
}
