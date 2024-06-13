import {WidgetItem} from "@/components/shared";
import {getUserBySession} from "@/helpers/auth";

export const InfoUser = async () => {
  const user = await getUserBySession(true);
  return (
    <WidgetItem title={"User connected Server-Side"}>
      <div className={"flex flex-col"}>
        <span>{user?.name}</span>
        <span>{user?.image}</span>
        <span>{user?.email}</span>
      </div>
    </WidgetItem>);
}