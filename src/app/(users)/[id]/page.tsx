import { Metadata } from "next";
import ProfilePage from "./ProfilePage";

export const metdata: Metadata = {
  title: "User Profile",
};
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ userData: string }>;
}) {
  const { userData } = await searchParams;
  const parseData = JSON.parse(userData);

  return <ProfilePage data={parseData} />;
}
