import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Markdown from "react-markdown";

export default function Cardteam(_props: { data: any }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="flex flex-col border border-sky-600 shadow-lg
        border-dashed hover:border-red-600 rounded-lg px-6 py-2 cursor-pointer"
        >
          <div className="flex mb-2 items-center justify-between">
            <h1 className="text-sm font-semibold line-clamp-1">
              {_props?.data?.name}
            </h1>
          </div>
          <div className="flex items-center gap-1">
            {_props?.data?.teams.map((item: any) => (
              <img
                src={`/hero/${item}.png`}
                className="w-8 h-8 bg-black/20 rounded-full"
              />
            ))}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col">
          <h1 className="text-sm font-semibold line-clamp-1">
            {_props?.data?.name}
          </h1>
        </div>
        <div className="flex items-center gap-1">
          {_props?.data?.teams.map((item: any) => (
            <img
              src={`/hero/${item}.png`}
              className="w-8 h-8 bg-black/20 rounded-full"
            />
          ))}
        </div>
        <Markdown>{_props?.data?.note}</Markdown>
      </DialogContent>
    </Dialog>
  );
}
