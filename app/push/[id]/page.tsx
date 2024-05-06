"use client";
import { addCmt, getCmts, getDetailLog } from "@/actions/logAction";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@clerk/nextjs";
import { useFollowStore } from "@/stores/followsStore";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();
  const params = useParams();
  useEffect(() => {
    const get = async () => {
      const result = await getDetailLog(Number(params?.id));
      if (result?.status === 200) {
        setData(result.data[0]);
        setLoading(true);
      }
    };
    get();
  }, []);

  const follows = useFollowStore((state:any) => state.follows)
  const setFollows = useFollowStore((state:any) => state.setFollows)

  useEffect(() => {
    // Lấy mảng items từ localStorage khi component được mount
    const storedItems = localStorage.getItem("follows");
    if (storedItems) {
      setFollows(JSON.parse(storedItems));
    }
  }, []);

  const handleFollow = () => {
    // Kiểm tra xem newItem có tồn tại trong mảng items chưa
    if (!follows.includes(data?.player)) {
      // Tạo một bản sao của mảng items
      const updatedItems = [...follows];
      // Thêm mục mới vào bản sao
      updatedItems.push(data?.player);
      // Cập nhật state với mục mới
      setFollows(updatedItems);
      // Lưu trữ mảng mới vào localStorage
      localStorage.setItem("follows", JSON.stringify(updatedItems));
    } else {
      alert("Mục đã tồn tại trong danh sách!");
    }
  };

  const removeItem = () => {
    const updatedItems = follows.filter((item: any) => item !== data?.player);
    setFollows(updatedItems);
    localStorage.setItem("follows", JSON.stringify(updatedItems));
  };

  if (!loading) {
    return (
      <div className="flex flex-col gap-4">
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-2/3 h-[20px] rounded-full" />
        <Skeleton className="w-2/4 h-[20px] rounded-full" />
        <Skeleton className="w-full h-[120px] rounded-lg" />
        <Skeleton className="w-full h-[120px] rounded-lg" />
        <Skeleton className="w-1/2 h-[20px] rounded-full" />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen gap-6 pt-4">
      <h1 className="font-semibold text-xl border-b pb-1">
        Nhật ký số #{params.id}
      </h1>
      <div className="flex flex-col">
        <p>
          Người chơi:
          <b className="font-semibold ml-4">{data?.player}</b>
        </p>
        <p>
          Day:
          <b className="font-semibold ml-4">{data?.day}</b>
        </p>
        <div className="flex items-center py-1">
          <h1 className="mr-2 font-semibold">Đội hình: </h1>
          <div className="flex items-center gap-1">
            {data?.team?.map((item: any) => (
              <img
                src={`/hero/${item}.png`}
                className="w-8 h-8 bg-black/20 rounded-full"
              />
            ))}
          </div>
        </div>
        <h1 className="font-semibold mt-2">Level các kỹ năng:</h1>
        <div className="flex items-center flex-wrap gap-2 mt-1">
          <ItemSkill img={"/skill/empng.png"} level={data?.em} />
          <ItemSkill img={"/skill/hlpng.png"} level={data?.hl} />
          <ItemSkill img={"/skill/bdpng.png"} level={data?.bd} />
          <ItemSkill img={"/skill/uppng.png"} level={data?.up} />
          <ItemSkill img={"/skill/inspng.png"} level={data?.in} />
          <ItemSkill img={"/skill/mspng.png"} level={data?.ms} />
          <ItemSkill img={"/skill/bspng.png"} level={data?.bs} />
        </div>
        <h1 className="font-semibold mt-2">Level runes:</h1>
        <div className="flex items-center flex-wrap gap-2 mt-1">
          <ItemSkill
            unl={data?.crit?.lvUnl}
            img={"/runes/crit.webp"}
            level={data?.crit?.lv}
          />
          <ItemSkill
            unl={data?.dame?.lvUnl}
            img={"/runes/dame.webp"}
            level={data?.dame?.lv}
          />
          <ItemSkill
            unl={data?.hero?.lvUnl}
            img={"/runes/hero.webp"}
            level={data?.hero?.lv}
          />
          {data?.cc && <ItemSkill img={"/runes/cc.webp"} level={data?.cc} />}
          {data?.heal && (
            <ItemSkill img={"/runes/heal.webp"} level={data?.heal} />
          )}
          {data?.mana && (
            <ItemSkill img={"/runes/mana.webp"} level={data?.mana} />
          )}
        </div>
        <p className="font-semibold mt-4">
          World Tree: <i className="font-thin px-2">{data?.wt || "Chưa mở"}</i>
        </p>
        <div className="flex items-center justify-end mt-4">
          {follows.includes(data?.player) ? (
            <Button variant={"destructive"} onClick={removeItem} size={"sm"}>
              Bỏ theo dõi
            </Button>
          ) : (
            <Button onClick={handleFollow} size={"sm"}>
              Theo dõi
            </Button>
          )}
          <Link
            href={`/push/player/${data?.player}`}
            className="mt-2 hover:underline text-sky-500 flex items-center gap-2 ml-auto"
          >
            Nhật ký người chơi này
            <FaCaretRight />
          </Link>
        </div>
      </div>
      <BinhLuan />
    </div>
  );
}

function ItemSkill(_props: { img: string; level: string; unl?: string }) {
  return (
    <div className="border border-dashed p-2 rounded-lg flex items-center">
      <img
        src={_props.img}
        alt="skill_img"
        className="w-10 h-10 rounded-full"
      />
      <h1 className="font-semibold ml-2">: {_props.level}</h1>
      {_props.unl && <h1 className="ml-4">Unl: ({_props.unl})</h1>}
    </div>
  );
}

function BinhLuan() {
  const [content, setContent] = useState("");
  const [listCmt, setListCmt] = useState<any>();
  const params = useParams();
  const { user } = useUser();

  const handleCmt = async () => {
    if (content.length < 10 || content.length > 500) {
      alert("Bình luận ít nhất 10 ký tự và tối đa 500!");
    } else {
      console.log("debug");
      const result = await addCmt(content, Number(params?.id));
      console.log(result);
      if (result?.status === 200) {
        setListCmt([...listCmt, result?.data[0]]);
        setContent("");
      }
    }
  };

  useEffect(() => {
    const get = async () => {
      const result = await getCmts(Number(params?.id));
      if (result?.status === 200) {
        setListCmt(result?.data);
      }
    };
    get();
  }, []);

  return (
    <div className="flex flex-col border-t border-dashed pt-4">
      <h1 className="font-semibold mb-2 text-lg">
        Bình luận (đăng nhập để cmt)
      </h1>
      <div className="flex flex-col border rounded-lg overflow-hidden p-2">
        <textarea
          placeholder="Nội dung bình luận (nội dung không phù hợp sẽ bị ban)...."
          name="binhluan"
          id="binhluan"
          className="w-full outline-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {user && (
          <Button onClick={handleCmt} className="ml-auto" size={"icon"}>
            <IoSend className="w-4 h-4" />
          </Button>
        )}
      </div>
      <div className="flex flex-col mt-4 gap-4">
        {listCmt?.map((item: any) => (
          <ItemBinhLuan
            avatar={item.avatar}
            name={item?.name}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

function ItemBinhLuan(_props: {
  avatar: string;
  name: string;
  content: string;
}) {
  return (
    <div className="flex items-start border p-2 rounded-md">
      <img src={_props.avatar} alt="img" className="w-12 h-12 rounded-full" />
      <div className="flex flex-col ml-2">
        <h2 className="text-lg font-bold">{_props.name}</h2>
        <p className="text-sm">{_props.content}</p>
      </div>
    </div>
  );
}
