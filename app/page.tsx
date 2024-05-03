import Menu from "@/components/layouts/menu";
import PushList from "@/components/layouts/pushList";
import SliderComponent from "@/components/layouts/slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between py-4 gap-12">
      <SliderComponent />
      <Menu />
      <PushList />
    </main>
  );
}
