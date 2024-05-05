import Banner1 from "@/components/layouts/banner1";
import Banner2 from "@/components/layouts/banner2";
import ListBlog from "@/components/layouts/listblog";
import Menu from "@/components/layouts/menu";
import PushList from "@/components/layouts/pushList";
import PushTeam from "@/components/layouts/pushTeam";
import SliderComponent from "@/components/layouts/slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between py-4 gap-12">
      <SliderComponent />
      <Menu />
      <PushList />
      <Banner1 />
      <PushTeam />
      <Banner2 />
      <ListBlog />
    </main>
  );
}
