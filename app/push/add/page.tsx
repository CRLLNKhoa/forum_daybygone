"use client";
import React, { useState } from "react";

export default function Page() {
  const [day, setDay] = useState<number>();
  const [team, setTeam] = useState<number[]>([]);
  const [em, setEm] = useState<string>();
  const [bd, setBd] = useState<string>();
  const [up, setUp] = useState<string>();
  const [hl, setHl] = useState<string>();
  const [ins, setIns] = useState<string>();
  const [ms, setMs] = useState<string>();
  const [bs, setBs] = useState<string>();
  const [cc, setCc] = useState<string>();
  const [mana, setMana] = useState<string>();
  const [heal, setHeal] = useState<string>();
  const [crit, setCrit] = useState<any>({
    lv: 0,
    unl: 0,
  });
  const [dame, setDame] = useState<any>({
    lv: 0,
    unl: 0,
  });
  const [hero, setHero] = useState<any>({
    lv: 0,
    unl: 0,
  });
  const [wt,setWt] = useState<string>()
  return (
    <div className="flex flex-col pt-4">
      <h1 className="font-semibold text-xl border-b pb-2">
        Thêm mới (Đăng nhập để lưu lại)
      </h1>
      <div className="grid grid-cols-4 py-4 gap-4">
        <div className="flex items-center col-span-4 lg:col-span-1">
          <label htmlFor="day" className="font-semibold">
            DAY:{" "}
          </label>
          <input
            id="day"
            placeholder="Nhập day hiện tại"
            type="number"
            className="border-4 outline-none border-dashed ml-2 px-2 py-1"
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
          />
        </div>
        <div className="flex items-center col-span-4 lg:col-span-3 lg:pl-4">
          <label htmlFor="day" className="font-semibold">
            ĐỘI HÌNH:{" "}
          </label>
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
        {/* Skill */}
        <div className="flex items-center col-span-4 lg:col-span-1">
          <label htmlFor="em" className="font-semibold">
            <img src="/skill/empng.png" alt="skill_img" className="w-8 h-8" />
          </label>
          <input
            id="em"
            placeholder="Level hiện tại"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[80%] ml-auto"
            value={em}
            onChange={(e) => setEm(String(e.target.value))}
          />
        </div>
        <div className="flex items-center col-span-4 lg:col-span-1">
          <label htmlFor="bd" className="font-semibold">
            <img src="/skill/bdpng.png" alt="skill_img" className="w-8 h-8" />
          </label>
          <input
            id="bd"
            placeholder="Level hiện tại"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[80%] ml-auto"
            value={bd}
            onChange={(e) => setBd(String(e.target.value))}
          />
        </div>
        <div className="flex items-center col-span-4 lg:col-span-1">
          <label htmlFor="up" className="font-semibold">
            <img src="/skill/uppng.png" alt="skill_img" className="w-8 h-8" />
          </label>
          <input
            id="up"
            placeholder="Level hiện tại"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[80%] ml-auto"
            value={up}
            onChange={(e) => setUp(String(e.target.value))}
          />
        </div>
        <div className="flex items-center col-span-4 lg:col-span-1">
          <label htmlFor="hl" className="font-semibold">
            <img src="/skill/hlpng.png" alt="skill_img" className="w-8 h-8" />
          </label>
          <input
            id="hl"
            placeholder="Level hiện tại"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[80%] ml-auto"
            value={hl}
            onChange={(e) => setHl(String(e.target.value))}
          />
        </div>
        <div className="flex items-center col-span-4 lg:col-span-1">
          <label htmlFor="ins" className="font-semibold">
            <img src="/skill/inspng.png" alt="skill_img" className="w-8 h-8" />
          </label>
          <input
            id="ins"
            placeholder="Level hiện tại"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[80%] ml-auto"
            value={ins}
            onChange={(e) => setIns(String(e.target.value))}
          />
        </div>
        <div className="flex items-center col-span-4 lg:col-span-1">
          <label htmlFor="ms" className="font-semibold">
            <img src="/skill/mspng.png" alt="skill_img" className="w-8 h-8" />
          </label>
          <input
            id="ms"
            placeholder="Level hiện tại"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[80%] ml-auto"
            value={ms}
            onChange={(e) => setMs(String(e.target.value))}
          />
        </div>
        <div className="flex items-center col-span-4 lg:col-span-1">
          <label htmlFor="bs" className="font-semibold">
            <img src="/skill/bspng.png" alt="skill_img" className="w-8 h-8" />
          </label>
          <input
            id="bs"
            placeholder="Level hiện tại"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[80%] ml-auto"
            value={bs}
            onChange={(e) => setBs(String(e.target.value))}
          />
        </div>
        {/* Runes */}
        <div className="flex items-center col-span-4 lg:col-span-1">
          <label htmlFor="cc" className="font-semibold">
            <img src="/runes/cc.webp" alt="skill_img" className="w-8 h-8" />
          </label>
          <input
            id="cc"
            placeholder="Level hiện tại"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[80%] ml-auto"
            value={cc}
            onChange={(e) => setCc(String(e.target.value))}
          />
        </div>
        <div className="flex items-center col-span-4 lg:col-span-1">
          <label htmlFor="heal" className="font-semibold">
            <img src="/runes/heal.webp" alt="skill_img" className="w-8 h-8" />
          </label>
          <input
            id="heal"
            placeholder="Level hiện tại"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[80%] ml-auto"
            value={heal}
            onChange={(e) => setHeal(String(e.target.value))}
          />
        </div>
        <div className="flex items-center col-span-4 lg:col-span-1">
          <label htmlFor="mana" className="font-semibold">
            <img src="/runes/mana.webp" alt="skill_img" className="w-8 h-8" />
          </label>
          <input
            id="mana"
            placeholder="Level hiện tại"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[80%] ml-auto"
            value={mana}
            onChange={(e) => setMana(String(e.target.value))}
          />
        </div>
        <div className="flex items-center col-span-4 lg:col-span-2">
          <label htmlFor="crit" className="font-semibold">
            <img src="/runes/crit.webp" alt="skill_img" className="w-8 h-8" />
          </label>
          <input
            id="crit"
            placeholder="Level hiện tại"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[40%] ml-auto"
            value={crit.lv}
            onChange={(e) => setCrit({...crit, lv:String(e.target.value)})}
          />
          <input
            placeholder="Level Unl"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[40%] ml-auto"
            value={crit.unl}
            onChange={(e) => setCrit({...crit, unl:String(e.target.value)})}
          />
        </div>
        <div className="flex items-center col-span-4 lg:col-span-2">
          <label htmlFor="dame" className="font-semibold">
            <img src="/runes/dame.webp" alt="skill_img" className="w-8 h-8" />
          </label>
          <input
            id="dame"
            placeholder="Level hiện tại"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[40%] ml-auto"
            value={dame.lv}
            onChange={(e) => setDame({...dame, lv:String(e.target.value)})}
          />
          <input
            placeholder="Level Unl"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[40%] ml-auto"
            value={dame.lv}
            onChange={(e) => setDame({...dame, unl:String(e.target.value)})}
          />
        </div>
        <div className="flex items-center col-span-4 lg:col-span-2">
          <label htmlFor="hero" className="font-semibold">
            <img src="/runes/hero.webp" alt="skill_img" className="w-8 h-8" />
          </label>
          <input
            id="hero"
            placeholder="Level hiện tại"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[40%] ml-auto"
            value={hero.lv}
            onChange={(e) => setHero({...hero, lv:String(e.target.value)})}
          />
          <input
            placeholder="Level Unl"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[40%] ml-auto"
            value={hero.unl}
            onChange={(e) => setHero({...hero, unl:String(e.target.value)})}
          />
        </div>
        {/* WT */}
        <div className="flex items-center col-span-4 lg:col-span-3">
          <label htmlFor="wt" className="font-semibold">
            WORLD TREE:{" "}
          </label>
          <input
            id="wt"
            placeholder="VD: BT6 GW2 ...."
            type="text"
            className="border-4 outline-none border-dashed ml-2 px-2 py-1 flex-1"
            value={wt}
            onChange={(e) => setWt(String(e.target.value))}
          />
        </div>
        <Button className="col-span-4 lg:col-span-1">Lưu lại</Button>
      </div>
      <DanhSachNhatKy />
    </div>
  );
}

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaQuoteRight } from "react-icons/fa";
import { common, rare, epic, legendary } from "@/array";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";

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

function DanhSachNhatKy(){
    return(
        <div className="flex flex-col">
            <h1 className="font-semibold text-xl border px-2 border-sky-600 rounded-sm py-1 mt-4">Danh sách của bạn</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-4">
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}

function Item(){
    function confirmDelete(id:number) {
        var confirmDelete = confirm("Bạn có chắc muốn xóa phần tử này không?");
        if (confirmDelete) {
            console.log("Phần tử đã được xóa.");
        } else {
            console.log("Hủy xóa phần tử.");
        }
    }
    return(
        <div className="flex flex-col border border-sky-600 shadow-lg relative overflow-hidden
        border-dashed hover:border-red-600 rounded-lg px-6 py-2 cursor-pointer">
            <div className="flex mb-2 items-center justify-between">
                <h1 className="text-sm"><b>Day</b>: 12000</h1>
                <i className="text-sm text-muted-foreground">@Lương Khoa</i>
            </div>
          <div className="flex items-center justify-center gap-1">
            <div className="w-8 h-8 bg-black/20 rounded-full"></div>
            <div className="w-8 h-8 bg-black/20 rounded-full"></div>
            <div className="w-8 h-8 bg-black/20 rounded-full"></div>
            <div className="w-8 h-8 bg-black/20 rounded-full"></div>
            <div className="w-8 h-8 bg-black/20 rounded-full"></div>
            <div className="w-8 h-8 bg-black/20 rounded-full"></div>
          </div>
          <div className="grid grid-cols-3 border-t my-2 py-2 gap-2">
            <div className="flex items-center gap-2">
                <img src="/skill/empng.png" alt="img" className="w-6 h-6" />
                <p className="text-sm font-semibold">: 1ae</p>
            </div>
            <div className="flex items-center gap-2">
                <img src="/skill/bdpng.png" alt="img" className="w-6 h-6" />
                <p className="text-sm font-semibold">: 1ae</p>
            </div>
            <div className="flex items-center gap-2">
                <img src="/skill/uppng.png" alt="img" className="w-6 h-6" />
                <p className="text-sm font-semibold">: 1ae</p>
            </div>
            <div className="flex items-center gap-2">
                <img src="/skill/inspng.png" alt="img" className="w-6 h-6" />
                <p className="text-sm font-semibold">: 1ae</p>
            </div>
            <div className="flex items-center gap-2">
                <img src="/skill/mspng.png" alt="img" className="w-6 h-6" />
                <p className="text-sm font-semibold">: 1ae</p>
            </div>
            <div className="flex items-center gap-2">
                <img src="/skill/bspng.png" alt="img" className="w-6 h-6" />
                <p className="text-sm font-semibold">: 1ae</p>
            </div>
            <div className="flex items-center gap-2">
                <img src="/skill/hlpng.png" alt="img" className="w-6 h-6" />
                <p className="text-sm font-semibold">: 1ae</p>
            </div>
            <div className="flex items-center gap-2">
                <img src="/runes/cc.webp" alt="img" className="w-6 h-6" />
                <p className="text-sm font-semibold">: 1ae</p>
            </div>
            <div className="flex items-center gap-2">
                <img src="/runes/heal.webp" alt="img" className="w-6 h-6" />
                <p className="text-sm font-semibold">: 1ae</p>
            </div>
            <div className="flex items-center gap-2">
                <img src="/runes/mana.webp" alt="img" className="w-6 h-6" />
                <p className="text-sm font-semibold">: 1ae</p>
            </div>
            <div className="flex items-center gap-2 col-span-2">
                <img src="/runes/crit.webp" alt="img" className="w-6 h-6" />
                <p className="text-sm font-semibold">: 1ae</p>
                <p>Unl: (12)</p>
            </div>
            <div className="flex items-center gap-2 col-span-2">
                <img src="/runes/dame.webp" alt="img" className="w-6 h-6" />
                <p className="text-sm font-semibold">: 1ae</p>
                <p>Unl: (12)</p>
            </div>
            <div className="flex items-center gap-2 col-span-2">
                <img src="/runes/hero.webp" alt="img" className="w-6 h-6" />
                <p className="text-sm font-semibold">: 1ae</p>
                <p>Unl: (12)</p>
            </div>
          </div>
          <div onClick={() => confirmDelete(1)} className="flex items-center rounded-ss-md justify-center bg-red-500 absolute p-2 bottom-0 right-0">
          <MdDelete className="text-white" />
          </div>
        </div>
    )
}
