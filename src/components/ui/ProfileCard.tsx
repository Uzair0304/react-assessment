"use client";
import { IconsType, UserType } from "@/lib/types";
import Image from "next/image";
import React, { useState } from "react";

type ProfileCardProps = {
  data: UserType;
  icons: IconsType[];
};
const ProfileCard = ({ data, icons }: ProfileCardProps) => {
  const cardData = { ...data, name: `${data.firstName} ${data.lastName}` };
  const [previewState, setPreviewState] = useState("name");
  return (
    <div className="bg-white pb-14 rounded-2xl text-center">
      <div className="flex flex-col gap-3">
        <div className="bg-red-50 py-6 h-[130px]">
          <div className="w-[150px] h-[150px] mx-auto border border-gray-500 p-1 rounded-full bg-white">
            <Image
              width={150}
              height={150}
              src={data.thumbnail}
              alt={"avatar"}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        <div className="mt-16">
          <p className="text-lg">Hi, My {previewState} is</p>
          <h1 className="text-4xl font-semibold">
            {cardData[previewState as keyof typeof cardData]}
          </h1>
        </div>
        <div className="flex gap-10 justify-center">
          {icons.map((item: IconsType) => (
            <div
              className="hover:cursor-pointer"
              key={item.title}
              onMouseOver={() => {
                setPreviewState(item.title);
              }}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={item.width}
                height={item.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
