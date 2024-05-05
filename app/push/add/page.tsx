"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [day, setDay] = useState<any>();
  const [team, setTeam] = useState<number[]>([]);
  const [em, setEm] = useState<string>();
  const [bd, setBd] = useState<string>();
  const [up, setUp] = useState<string>();
  const [hl, setHl] = useState<string>();
  const [ins, setIns] = useState<string>();
  const [ms, setMs] = useState<string>();
  const [bs, setBs] = useState<string>();
  const [cc, setCc] = useState<any>(null);
  const [mana, setMana] = useState<any>(null);
  const [heal, setHeal] = useState<any>(null);
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
  const [wt, setWt] = useState<string>();

  const { user } = useUser();
  if (!user) {
    return (
      <div className="flex flex-col items-center my-6 p-6 rounded-lg">
        <SignIn />
      </div>
    );
  }

  const [list, setList] = useState<any>();
  const [loading, setLoading] = useState<any>(true);
  useEffect(() => {
    const get = async () => {
      const result = await getLog();
      if (result?.status === 200) {
        setList(result.data);
        setLoading(false);
      }
    };

    get();
  }, []);

  const handleAdd = async () => {
    if (
      day > 0 &&
      team.length > 0 &&
      em !== "" &&
      bd !== "" &&
      up !== "" &&
      ins !== "" &&
      ms !== "" &&
      hl !== "" &&
      bs !== "" &&
      crit.lv !== "" &&
      crit.unl !== "" &&
      dame.lv !== "" &&
      dame.unl !== "" &&
      hero.lv !== "" &&
      hero.unl !== "" &&
      cc !== "" &&
      heal !== "" &&
      mana !== ""
    ) {
      setIsLoading(true);
      const result = await addLog({
        em,
        bd,
        up,
        in: ins,
        ms,
        hl,
        bs,
        crit: { lv: crit.lv, lvUnl: crit.unl },
        dame: { lv: dame.lv, lvUnl: dame.unl },
        hero: { lv: hero.lv, lvUnl: hero.unl },
        cc,
        heal,
        team,
        day,
        wt,
        mana,
      });
      if (result?.status === 200) {
        setIsLoading(false);
        alert("Thêm thành công!");
        setList([...list, result?.data[0]])
        setDay(0);
      }
    } else {
      alert("Nhập chưa đủ thông tin!");
    }
  };

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
            onChange={(e) => setCrit({ ...crit, lv: String(e.target.value) })}
          />
          <input
            placeholder="Level Unl"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[40%] ml-auto"
            value={crit.unl}
            onChange={(e) => setCrit({ ...crit, unl: String(e.target.value) })}
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
            onChange={(e) => setDame({ ...dame, lv: String(e.target.value) })}
          />
          <input
            placeholder="Level Unl"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[40%] ml-auto"
            value={dame.unl}
            onChange={(e) => setDame({ ...dame, unl: String(e.target.value) })}
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
            onChange={(e) => setHero({ ...hero, lv: String(e.target.value) })}
          />
          <input
            placeholder="Level Unl"
            type="text"
            className="border-4 outline-none border-dashed px-2 py-1 w-[40%] ml-auto"
            value={hero.unl}
            onChange={(e) => setHero({ ...hero, unl: String(e.target.value) })}
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
        <Button
          disabled={isLoading}
          onClick={handleAdd}
          className="col-span-4 lg:col-span-1"
        >
          {isLoading ? "Đang xử lý" : "Lưu lại"}
        </Button>
      </div>
      <DanhSachNhatKy list={list} setList={setList} loading={loading} setLoading={setLoading} />
    </div>
  );
}

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaQuoteRight } from "react-icons/fa";
import { common, rare, epic, legendary } from "@/array";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import { addLog, deleteLog, getLog } from "@/actions/logAction";
import Skeleton from "@/components/layouts/skeleton";
import { SignIn, useUser } from "@clerk/nextjs";

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

function DanhSachNhatKy(_props: {
  list: any[];
  loading: boolean;
  setLoading: any;
  setList: any
}) {
  if (_props.loading) {
    return <Skeleton item={9} />;
  }

  return (
    <div className="flex flex-col">
      <h1 className="font-semibold text-xl border px-2 border-sky-600 rounded-sm py-1 mt-4">
        Danh sách của bạn
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-4">
        {_props.list?.map((item: any) => (
          <Item list={_props.list} setList={_props.setList} key={item?.id} data={item} />
        ))}
      </div>
    </div>
  );
}

function Item({ data, list, setList }: { data: any, list:any, setList: any }) {
  async function confirmDelete(id: number) {
    var confirmDelete = confirm("Bạn có chắc muốn xóa phần tử này không?");
    if (confirmDelete) {
      const result = await deleteLog(id);
      if (result?.status === 200) {
        alert("Phần tử đã được xóa." + id);
        setList(list.filter((item: { id: any; }) => item.id !== data?.id))
      }
    } else {
      console.log("Hủy xóa phần tử.");
    }
  }
  return (
    <div
      className="flex flex-col border border-sky-600 shadow-lg relative overflow-hidden
        border-dashed hover:border-red-600 rounded-lg px-6 py-2 cursor-pointer"
    >
      <div className="flex mb-2 items-center justify-between">
        <h1 className="text-sm">
          <b>Day</b>: {data?.day}
        </h1>
        <i className="text-sm text-muted-foreground">@{data?.player}</i>
      </div>
      <div className="flex items-center justify-center gap-1">
        {data?.team.map((item: any) => (
          <img
            key={item}
            src={`/hero/${item}.png`}
            className="w-8 h-8 bg-black/20 rounded-full"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 border-t my-2 py-2 pb-8 gap-2">
        <div className="flex items-center gap-2">
          <img src="/skill/empng.png" alt="img" className="w-6 h-6" />
          <p className="text-sm font-semibold">: {data?.em}</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/skill/bdpng.png" alt="img" className="w-6 h-6" />
          <p className="text-sm font-semibold">: {data?.bd}</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/skill/uppng.png" alt="img" className="w-6 h-6" />
          <p className="text-sm font-semibold">: {data?.up}</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/skill/inspng.png" alt="img" className="w-6 h-6" />
          <p className="text-sm font-semibold">: {data?.in}</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/skill/mspng.png" alt="img" className="w-6 h-6" />
          <p className="text-sm font-semibold">: {data?.ms}</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/skill/bspng.png" alt="img" className="w-6 h-6" />
          <p className="text-sm font-semibold">: {data?.bs}</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/skill/hlpng.png" alt="img" className="w-6 h-6" />
          <p className="text-sm font-semibold">: {data?.hl}</p>
        </div>
        {data?.cc && (
          <div className="flex items-center gap-2">
            <img src="/runes/cc.webp" alt="img" className="w-6 h-6" />
            <p className="text-sm font-semibold">: {data?.cc}</p>
          </div>
        )}
        {data?.heal && (
          <div className="flex items-center gap-2">
            <img src="/runes/heal.webp" alt="img" className="w-6 h-6" />
            <p className="text-sm font-semibold">: {data?.heal}</p>
          </div>
        )}
        {data?.mana && (
          <div className="flex items-center gap-2">
            <img src="/runes/mana.webp" alt="img" className="w-6 h-6" />
            <p className="text-sm font-semibold">: {data?.mana}</p>
          </div>
        )}
        <div className="flex items-center gap-2 col-span-3">
          <img src="/runes/crit.webp" alt="img" className="w-6 h-6" />
          <p className="text-sm font-semibold">: {data?.crit.lv}</p>
          <p>Unl: ({data?.crit.lvUnl})</p>
        </div>
        <div className="flex items-center gap-2 col-span-3">
          <img src="/runes/dame.webp" alt="img" className="w-6 h-6" />
          <p className="text-sm font-semibold">: {data?.dame.lv}</p>
          <p>Unl: ({data?.dame.lvUnl})</p>
        </div>
        <div className="flex items-center gap-2 col-span-3">
          <img src="/runes/hero.webp" alt="img" className="w-6 h-6" />
          <p className="text-sm font-semibold">: {data?.crit.lv}</p>
          <p>Unl: ({data?.hero.lvUnl})</p>
        </div>
        <div className="flex items-center gap-2 col-span-3">
          <p className="text-sm font-semibold">World tree:</p>
          <p className="text-sm">{data?.wt}</p>
        </div>
      </div>
      <div
        onClick={() => confirmDelete(data?.id)}
        className="flex items-center rounded-ss-md justify-center bg-red-500 absolute p-2 bottom-0 right-0"
      >
        <MdDelete className="text-white" />
      </div>
    </div>
  );
}
