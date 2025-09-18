import ProfileCard from "@/components/ui/ProfileCard";
import { IconsType, UserType } from "@/lib/types";
import Link from "next/link";
import React from "react";

const ProfilePage = ({ data }: { data: UserType }) => {
  const icons: IconsType[] = [
    { title: "name", icon: "/user-solid-full.svg", width: 40, height: 40 },
    { title: "email", icon: "/envelope-solid-full.svg", width: 40, height: 40 },
    { title: "gender", icon: "/gender-icon.svg", width: 40, height: 40 },
  ];
  return (
    <>
      <div className="max-w-[700px] w-full mx-auto py-6">
        <Link href="/" className="text-blue-600">Go back</Link>
        <h1 className="text-3xl font-bold mb-6">User Profile</h1>
        <ProfileCard data={data} icons={icons} />
      </div>
    </>
  );
};

export default ProfilePage;
