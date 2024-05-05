"use client"
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TbFolderSearch } from "react-icons/tb";
import {time} from "@/json/time";
import { IoMdArrowRoundUp } from "react-icons/io";
import { cn } from "@/lib/utils";
import { RiArrowUpDownLine } from "react-icons/ri";

type TRow = {
  Day: string;
  Time: string;
};

export default function Page() {
  const [currentDay, setCurrentDay] = useState<number>(0);
  const [planDay, setPlanDay] = useState<number>(0);
  const [resultTable, setResultTable] = useState<TRow[]>([]);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    const currentday = localStorage.getItem("current-day");
    if (currentday) {
      setCurrentDay(Number(JSON.parse(currentday)));
      setPlanDay(Number(JSON.parse(currentday)));
    }
  }, []);

  const handleCheck = () => {
    localStorage.setItem("current-day", JSON.stringify(currentDay));
    const data = time.filter(day => Number(day.Day) >= currentDay && Number(day.Day) <= planDay)
    setResultTable(data)
  };

  function handleSortAZ(){
    setResultTable(resultTable.sort((a: { Day: string; },b: { Day: string; }) => Number(a.Day) - Number(b.Day)))
  }

  function handleSortZA(){
    setResultTable(resultTable.sort((a: { Day: string; },b: { Day: string; }) => Number(b.Day) - Number(a.Day)))
  }

  return (
   
      <div className="flex flex-col mt-8 bg-white w-full items-center justify-center p-6 rounded-lg">
        <h1 className="text-xl font-bold mb-4">Time Rewind</h1>
        <div className="flex items-center gap-4 mb-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="current">Current Day</Label>
            <Input
              className="focus:outline-none"
              type="number"
              step={10}
              id="current"
              placeholder="Current Day"
              autoComplete="off"
              value={currentDay}
              onChange={(e: any) => setCurrentDay(Number(e.target.value))}
            />
          </div>
          <img src="/xx.svg" alt="icon" className="w-6 h-6 translate-y-2" />
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="plan" className="text-end">
              Plan Day
            </Label>
            <Input
              className="focus:outline-none"
              type="number"
              step={10}
              id="plan"
              placeholder="Current + >100"
              autoComplete="off"
              value={planDay}
              onChange={(e: any) => setPlanDay(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-center text-sm mb-1">Quick selection</h2>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => setPlanDay(currentDay + 100)}
              variant={"outline"}
              size={"sm"}
            >
              +100
            </Button>
            <Button
              onClick={() => setPlanDay(currentDay + 300)}
              variant={"outline"}
              size={"sm"}
            >
              +300
            </Button>
            <Button
              onClick={() => setPlanDay(currentDay + 500)}
              variant={"outline"}
              size={"sm"}
            >
              +500
            </Button>
          </div>
        </div>
        <Button onClick={handleCheck} className="mt-4 flex items-center">
          <TbFolderSearch className="w-5 h-5 mr-2" />
          Check
        </Button>
        {resultTable.length !== 0 ? (
          <Table className="mt-8">
            <TableCaption>A list of cost day.</TableCaption>
            <TableHeader>
            <TableRow className="bg-primary hover:bg-primary select-none">
              <TableHead className="text-center font-bold text-white">
                Day
              </TableHead>
              <TableHead className="text-center font-bold text-white">
                Time
              </TableHead>
            </TableRow>

            </TableHeader>
            <TableBody>
                {resultTable.map(row => (
                    <TableRow key={row.Day} className={cn("border h-[24px] border-slate-400 hover:bg-black/80 duration-500 text-white cursor-pointer",
                    ((Number(row.Day)%2===0) && "bg-[#1ac000]/60" ),
                    ((Number(row.Day)%2!==0) && "bg-[#ff0000]/60" ),
                  )}
  >
                    <TableCell className="text-center">{row?.Day}</TableCell>
                    <TableCell className="text-center">{row?.Time}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        ) : (
          <div className="flex items-center justify-center mt-8 h-[120px] flex-col">
            <IoMdArrowRoundUp className="w-8 h-8 animate-pulse" />
            <h1 className="text-sm text-center">Enter value & click check button</h1>
          </div>
        )}
      </div>
  );
}