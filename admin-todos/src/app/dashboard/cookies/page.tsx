import {cookies} from 'next/headers';
import {Metadata} from "next";
import {TabBar} from "@/components/shared";

export const metadata: Metadata = {
  title: "Cookies Page",
  description: "SEO Title"
}

export default function CookiesPage() {

  const cookieStore = cookies();
  const cookieTab = Number(cookieStore.get("selectedTab")?.value ?? '1');

  return (
    <div className={"grid grid-cols-1 sm:grid-cols-2 gap-3"}>
      <div className={"flex text-black flex-col"}>
        <span className={"text-3xl"}>Tabs</span>
        <TabBar currentTab={cookieTab}></TabBar>
      </div>
    </div>
  );
}