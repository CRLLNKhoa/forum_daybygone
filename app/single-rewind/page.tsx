"use client";
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
import dataSingleCost from "@/json/singleCost";
import { IoMdArrowRoundUp } from "react-icons/io";
import { cn } from "@/lib/utils";
import { RiArrowUpDownLine } from "react-icons/ri";

type TRow = {
  day: number;
  skip: number;
  tickets: number;
  cost: number;
};
export default function Single() {
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
      const data = dataSingleCost.filter(day => day.day >= currentDay && day.day <= planDay)
      setResultTable(data)
    };
  
    function handleSortAZ(){
      setResultTable(resultTable.sort((a: { cost: number; },b: { cost: number; }) => a.cost - b.cost))
    }
  
    function handleSortZA(){
      setResultTable(resultTable.sort((a: { cost: number; },b: { cost: number; }) => b.cost - a.cost))
    }
  
  return (
   <div className="flex flex-col mt-8 bg-white w-full items-center justify-center rounded-lg">
    <h1 className="text-xl font-bold mb-4">Single Rewind</h1>
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
            Skip day
          </TableHead>
          <TableHead className="text-center font-bold text-white">
            Tickets
          </TableHead>
          <TableHead onClick={() => {
            setSort(!sort)
            if(sort){
              handleSortZA()
            } else handleSortAZ()
          }} className="font-bold text-white flex items-center justify-center gap-2 cursor-pointer">
            Cost <RiArrowUpDownLine className="w-4 h-4" />
          </TableHead>
        </TableRow>

        </TableHeader>
        <TableBody>
            {resultTable.map(row => (
                <TableRow key={row.day} className={cn("border h-[24px] border-slate-400 hover:bg-black/80 duration-500 text-white cursor-pointer",
                ((row.cost >=  162 && row.cost <= 180) && "bg-[#1ac000]" ),
                ((row.cost >=  180 && row.cost <= 199) && "bg-[#33b300]" ),
                ((row.cost >=  199 && row.cost <= 218) && "bg-[#4d9900]" ),
                ((row.cost >=  218 && row.cost <= 237) && "bg-[#669900]" ),
                ((row.cost >=  237 && row.cost <= 256) && "bg-[#808000]" ),
                ((row.cost >=  256 && row.cost <= 275) && "bg-[#996600]" ),
                ((row.cost >=  275 && row.cost <= 294) && "bg-[#b24c00]" ),
                ((row.cost >=  294 && row.cost <= 313) && "bg-[#cc3200]" ),
                ((row.cost >=  313 && row.cost <= 332) && "bg-[#e51900]" ),
                ((row.cost >=  332 && row.cost <= 354) && "bg-[#ff0000]" ),
                ((row.cost >=  354 && row.cost <= 400) && "bg-[#441111]" ),
              )}
>
                <TableCell className="text-center">{row?.day}</TableCell>
                <TableCell className="text-center">{row?.skip}</TableCell>
                <TableCell className="text-center">{Math.floor(row?.tickets)}</TableCell>
                <TableCell className="text-center">{Math.floor(row?.cost)}</TableCell>
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
  )
}
