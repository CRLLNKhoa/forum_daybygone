"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export default function AddTeam() {
  const [team, setTeam] = useState<number[]>([]);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [pass, setPass] = useState<number>(0);

  const handleAdd = async () => {
    if(pass === 12052000){
        alert("Đang thêm!")
        const result = await addTeam({ name, teams: team, note });
        if(result?.status === 200){
            alert("Thêm thành công!")
        }
    }else alert("Bạn không có quyền!")
  };

  return (
    <div className="flex flex-col pt-5 min-h-screen">
      <h1 className="font-bold text-xl border-b pb-1">Thêm đội hình</h1>
      <div className="flex flex-col mt-4">
        <div className="flex flex-col mb-4">
          <p className="font-semibold">Pass Admin</p>
          <input
            value={pass}
            onChange={(e) => setPass(Number(e.target.value))}
            className="h-8 border outline-none rounded-lg px-4"
            type="number"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Tên đội hình</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-8 border outline-none rounded-lg px-4"
            type="text"
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="font-semibold">Chọn đội hình</p>
          <div className="flex items-center justify-center flex-1 gap-2">
            {team.map((item) => (
              <img
                src={`/hero/${item}.png`}
                alt="skill_img"
                className="w-10 h-10 rounded-lg"
              />
            ))}
          </div>
          <ChonHero team={team} setTeam={setTeam} />
        </div>
        <div className="flex flex-col mt-4">
          <p className="font-semibold">Ghi chú</p>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="h-40 border outline-none rounded-lg px-4 py-4"
          />
        </div>
        <Button onClick={handleAdd} className="mt-4">
          Thêm đội hình
        </Button>
      </div>
    </div>
  );
}

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaQuoteRight } from "react-icons/fa";
import { common, rare, epic, legendary } from "@/array";
import { Button } from "@/components/ui/button";
import { addTeam } from "@/actions/logAction";
function ChonHero(_props: {
  team: number[];
  setTeam: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const handleChoice = (i: number) => {
    if (!_props.team.includes(i)) {
      if (_props.team.length > 5) {
        alert("Tối đa 6 anh hùng!");
      } else {
        _props.setTeam([..._props.team, i]);
      }
    } else _props.setTeam(_props.team.filter((item) => item !== i));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="border-4 border-dashed ml-auto px-2 cursor-pointer hover:border-sky-600">
          Chọn
        </span>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col">
          <h1 className="font-semibold mb-2 flex items-center gap-2">
            <FaQuoteRight /> Common:
          </h1>
          <div className="flex flex-wrap gap-2">
            {common.map((i: any) => (
              <img
                onClick={() => handleChoice(i)}
                key={i}
                src={`/hero/trang/${i}.png`}
                alt="img"
                className={cn(
                  "w-12 h-12 rounded-lg cursor-pointer",
                  _props.team.includes(i) && "border-4 border-red-600"
                )}
              />
            ))}
          </div>
          <h1 className="font-semibold mb-2 flex items-center gap-2 mt-4 text-sky-600">
            <FaQuoteRight /> Rare:
          </h1>
          <div className="flex flex-wrap gap-2">
            {rare.map((i: any) => (
              <img
                onClick={() => handleChoice(i)}
                key={i}
                src={`/hero/xanh/${i}.png`}
                alt="img"
                className={cn(
                  "w-12 h-12 rounded-lg cursor-pointer",
                  _props.team.includes(i) && "border-4 border-red-500"
                )}
              />
            ))}
          </div>
          <h1 className="font-semibold mb-2 flex items-center gap-2 mt-4 text-purple-600">
            <FaQuoteRight /> Epic:
          </h1>
          <div className="flex flex-wrap gap-2">
            {epic.map((i: any) => (
              <img
                onClick={() => handleChoice(i)}
                key={i}
                src={`/hero/tim/${i}.png`}
                alt="img"
                className={cn(
                  "w-12 h-12 rounded-lg cursor-pointer",
                  _props.team.includes(i) && "border-4 border-red-500"
                )}
              />
            ))}
          </div>
          <h1 className="font-semibold mb-2 flex items-center gap-2 mt-4 text-yellow-600">
            <FaQuoteRight /> Legendary:
          </h1>
          <div className="flex flex-wrap gap-2">
            {legendary.map((i: any) => (
              <img
                onClick={() => handleChoice(i)}
                key={i}
                src={`/hero/vang/${i}.png`}
                alt="img"
                className={cn(
                  "w-12 h-12 rounded-lg cursor-pointer",
                  _props.team.includes(i) && "border-4 border-red-500"
                )}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
